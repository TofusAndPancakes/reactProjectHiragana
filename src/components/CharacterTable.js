import PropTypes from 'prop-types'
import React from 'react'
import CharacterTableContent from './CharacterTableContent'

export const CharacterTable = ({ characterContent, letter, color, margin}) => {
    return (
        <div className="characterTableColumn" style={{marginRight: margin}}>
          <div className= "characterTableInfoRowContent">
            <p>{letter}</p>
          </div>
          {characterContent.map((charContent) => {
            return(
              <CharacterTableContent key={charContent.id} characterContent={charContent} color={color}/>
            );
          }
          )}
        </div>
    )
}

CharacterTable.defaultProps = {
    letter: " ",
    color: "00AAFF",
    margin: "0px",
}

CharacterTable.propTypes = {
    letter: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

/*
  Useful resource when learning adding JSX Conditions to a React File
  https://stackoverflow.com/questions/63367050/using-conditional-logic-inside-of-an-array-map-in-react
*/

export default CharacterTable
