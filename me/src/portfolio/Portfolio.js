import React, { Component } from 'react'
import Footer from '../principal/Footer'
import Lightbox from 'react-images'
import './portfolio.css'

class Portfolio extends Component {
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
            <Lightbox
              images={[
                { src: 'https://placekitten.com/334/234' },
                { src: 'https://placekitten.com/434/334' },
                { src: 'https://placekitten.com/234/334' },
                { src: 'https://placekitten.com/334/434' },
                { src: 'https://placekitten.com/434/334' }
              ]}
              isOpen={this.state.lightboxIsOpen}
              onClickPrev={this.gotoPrevLightboxImage}
              onClickNext={this.gotoNextLightboxImage}
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
