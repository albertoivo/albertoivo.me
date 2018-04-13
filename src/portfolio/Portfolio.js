import React from 'react'
import Footer from '../principal/Footer'
import Lightbox from 'react-images'
import { natures, portraits } from '../utils/images'
import albertoivo from '../images/alberto-ivo-me.jpg'
import './portfolio.css'

class Portfolio extends React.Component {
  constructor() {
    super()
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      nature: false,
      portrait: false,
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleNature = this.handleNature.bind(this)
    this.handlePortrait = this.handlePortrait.bind(this)
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
  handleNature() {
    this.setState({
      nature: true,
      portrait: false
    })
  }
  handlePortrait() {
    this.setState({
      nature: false,
      portrait: true
    })
  }

  render() {
    const { nature, portrait } = this.state
    return (
      <div>
        <div className="port-container">
          <div className="port-menu">
            <div>
              <img src={albertoivo} alt="alberto ivo vieira" />
            </div>
            <div id="categories">
              <ul>
                <li>
                  <a href="#" onClick={this.handleNature}>
                    Nature
                  </a>
                </li>
                <li>
                  <a href="#" onClick={this.handlePortrait}>
                    Portrait
                  </a>
                </li>
                <li>Northern Lights</li>
                <li>Selective Color</li>
              </ul>
            </div>
          </div>
          <div id="photos">

            {nature && natures.map((img, index) => {
              return (
                <a href={img.src} onClick={e => this.openLightbox(index, e)}>
                  <img src={img.src} alt={index} />
                </a>
              )
            })}
            <Lightbox
              images={natures}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClickThumbnail={this.gotoImage}
              onClose={this.closeLightbox}
            />

            {portrait && portraits.map((img, index) => {
              return (
                <a href={img.src} key={index} onClick={e => this.openLightbox(index, e)}>
                  <img src={img.src} alt={index} />
                </a>
              )
            })}
            <Lightbox
              images={portraits}
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
