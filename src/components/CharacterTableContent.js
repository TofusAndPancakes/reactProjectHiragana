import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const CharacterTableContent = ({ characterContent, color }) => {
    let characterCheck = characterContent.character
    let characterConditional;

    if (characterCheck == "null"){
      characterConditional = (
        <div className='characterTableContentNull'>
          <h3>&nbsp;</h3>
        </div>
      );
    } else {
      characterConditional = (
        <Link
        to={`/${characterContent.id}`}
        key={characterContent.id}>
        <div className='characterTableContent' style={{backgroundColor: color}}>
          <h3>{characterContent.character}</h3>
          <p>{characterContent.reading}</p>
        </div>
      </Link>
      );
    }
    return (
      characterConditional
    )
}

CharacterTableContent.defaultProps = {
    color: "00AAFF",
}

CharacterTableContent.propTypes = {
    color: PropTypes.string,
}


export default CharacterTableContent
