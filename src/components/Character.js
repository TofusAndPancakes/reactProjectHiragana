import { useParams, Link } from "react-router-dom"
import { getCharacterDatum } from "../data"

export const Character = () => {
    let params = useParams()
    let characterData = getCharacterDatum(parseInt(params.characterId, 10))
    return (
        <>
        {/*SingleCharacterTop*/}
        <div className='singleCharacterTop' style={{backgroundColor:characterData.color}}>
          <div className='singleCharacterTopTitle' >
            <h2>{characterData.character}</h2>
          </div>
          <div className='singleCharacterMenu'>
            <Link  to={'/'}>
              <img src={'./img/menu/return.svg'} alt="Return to Home"/>
            </Link>
          </div>
        </div>
        {/*Pronounciation*/}
        <div className= 'singleCharacter'>
          <div className='singleCharacterPadding'>
            <div className='singleCharacterContainer'>
              <div className='singleCharacterHeader'>
                <h3>Reading and Pronounciation</h3>
              </div>
              <div className='singleCharacterContentRow'>
                <div className='singleCharacterReading'>
                  <h2>{characterData.reading}</h2>
                </div>
                <div className='singleCharacterPronounce'>
                  <p>{characterData.pronounce}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*PronounciationEnd*/}
        {/*Mnemonic*/}
        <div className= 'singleCharacter' style={{paddingBottom:'40px'}}>
          <div className='singleCharacterPadding'>
            <div className='singleCharacterContainer'>
              <div className='singleCharacterHeader'>
                <h3>Mnemonic</h3>
              </div>
              <div className='singleCharacterImage'>
                <img src={characterData.image} alt={characterData.character} />
              </div>
              <div className='singleCharacterContent'>
                <p>{characterData.description}</p>
              </div>
            </div>
          </div>
        </div>
        {/*MnemonicEnd*/}
      </>
    )
}

export default Character
