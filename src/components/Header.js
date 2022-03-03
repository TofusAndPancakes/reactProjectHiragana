import { useParams, Link } from "react-router-dom"
import PropTypes from 'prop-types'

export const Header = ({title, onToggle}) => {
    return (
        <div className='navBar'>
          <div className='navBarPadding'>
            <div className='navBarLeft'>
              <Link to="/"><img src={'./img/menu/favicon.png'} alt="HiraganaChart"/></Link>
            </div>
            <div className='navBarRight'>
              <div className='navBarContent'>
              <Link to="chart"><p>Extras</p></Link>
              </div>
              <div className='navBarContent' onClick={onToggle}>
                <p>Info</p>
              </div>
            </div>
          </div>
          <div className='dropDownNav' id='navActive'>
            <div className='dropDownNavPadding'>
              <h3>Note</h3>
              <hr/>
              <p>This website is a reformatting of&nbsp;
              <a target="_blank" href="https://www.tofugu.com/japanese/learn-hiragana/">Tofugu's Hiragana Guide!</a></p>
              <p>Please support them!</p>
            </div>
          </div>
        </div>
    )
}

Header.defaultProps = {
    title: "ひらがな"
}

Header.propTypes = {
    title: PropTypes.string,
}

{/*
//Just to remind myself that setting CSS this way is possible
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
*/}

{//https://www.tofugu.com/japanese/hiragana-chart/
}


export default Header
