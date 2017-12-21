import React from 'react'
import Footer from '../principal/Footer'
import Lightbox from 'react-images'
import { images } from '../utils/images'
import albertoivo from '../images/alberto-ivo-me.jpg'
import './portfolio.css'

class Portfolio extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    })
  }

  render() {
    return (
      <div>
        <div className="port-container">
          <div className="port-menu">
            <div>
              <img src={albertoivo} alt="alberto ivo vieira" />
            </div>
            <div id="categories">
              <ul>
                <li>Nature</li>
                <li>Portrait</li>
                <li>Northern Lights</li>
                <li>Selective Color</li>
              </ul>
            </div>
          </div>
          <div id="photos">
            <p>
              Use your keyboard to navigate.
              <kbd>left</kbd>
              <kbd>right</kbd>
              <kbd>esc</kbd>
            </p>
            {images.map((img, index) => {
              return (
                <a href={img.src} onClick={e => this.openLightbox(index, e)}>
                  <img src={img.src} />
                </a>
              )
            })}
            <Lightbox
              images={images}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClickThumbnail={this.gotoImage}
              onClose={this.closeLightbox}
            />
          </div>
        </div>
        <Footer css={'port-footer'} />
      </div>
    )
  }
}
export default Portfolio
