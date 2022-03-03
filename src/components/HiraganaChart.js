import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'


export const HiraganaChart = () => {
    return (
        <>
          {/*SingleCharacterTop*/}
          <div className='singleCharacterTop hiraganaChart'>
            <div className='singleCharacterTopTitle' >
              <h2>Extras</h2>
            </div>
          </div>
          {/*ExtraContent1*/}
          <div className= 'singleCharacter' style={{paddingBottom:'40px'}}>
            <div className='singleCharacterPadding'>
              <div className='singleCharacterContainer'>
                <div className='singleCharacterHeader'>
                  <h3>Other Resources</h3>
                </div>
                <div className='singleCharacterContent' style={{marginBottom:'10px'}}>
                  <p>Tofugu compiled various different Hiragana Charts which they think are some of the best.
                    The following are some of recommendations given!
                    Access the full post&nbsp;
                    <a target="_blank" href="https://www.tofugu.com/japanese/hiragana-chart/">here!</a>
                  </p>
                </div>
                <div className='singleCharacterCarousel'>
                  <div className='singleCharacterCarouselPadding'>
                  <Carousel>
                    <Carousel.Item>
                      <div className='carouselContent'>
                        <div className='carouselSection'>
                          <img src={'./img/chart/kidsmoji.jpg'} alt="kidsmoji"/>
                        </div>
                        <div className='carouselSection'>
                          <div className='carouselCaption'>
                            <h3>Kidsmoji Chart</h3>
                            <hr/>
                              <p>A cute rendition of a Hiragana Chart. The illustration next to the kana
                              relate to Japanese word using the kana, not mnemonics.</p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className='carouselContent'>
                          <div className='carouselSection'>
                            <img src={'./img/chart/sasagami358.jpg'} alt="kidsmoji"/>
                          </div>
                        <div className='carouselSection'>
                          <div className='carouselCaption'>
                            <h3>Sasagami358's Stroke Order Chart</h3>
                            <hr/>
                            <p>When writing hiragana by hand, stroke order is important. Sasagami358's made a hiragana chart with
                            grey strokes so you can practice over them!</p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className='carouselContent'>
                        <div className='carouselSection'>
                          <img src={'./img/chart/origin.jpg'} alt="kidsmoji"/>
                        </div>
                          <div className='carouselSection'>
                            <div className='carouselCaption'>
                              <h3>JapanAKALuigi's Hiragana Origin Chart</h3>
                              <hr/>
                              <p>This chart shows where the Hiragana we know now comes from, comparing them side by side! Dont sweat it too much when starting out!</p>
                            </div>
                          </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default HiraganaChart
