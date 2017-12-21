import React from 'react'
import Footer from '../principal/Footer'
import Lightbox from 'react-images'
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
            <a
              href="https://placekitten.com/334/234"
              onClick={e => this.openLightbox(0, e)}
            >
              <img src="https://placekitten.com/334/234" />
            </a>

            <a
              href="https://placekitten.com/294/232"
              onClick={e => this.openLightbox(1, e)}
            >
              <img src="https://placekitten.com/294/232" />
            </a>

            <a
              href="https://placekitten.com/534/132"
              onClick={e => this.openLightbox(2, e)}
            >
              <img src="https://placekitten.com/534/132" />
            </a>

            <a
              href="https://placekitten.com/334/234"
              onClick={e => this.openLightbox(3, e)}
            >
              <img src="https://placekitten.com/334/234" />
            </a>

            <a
              href="https://placekitten.com/294/232"
              onClick={e => this.openLightbox(4, e)}
            >
              <img src="https://placekitten.com/294/232" />
            </a>

            <a
              href="https://placekitten.com/534/132"
              onClick={e => this.openLightbox(5, e)}
            >
              <img src="https://placekitten.com/534/132" />
            </a>

            <Lightbox
              images={[
                { src: 'https://placekitten.com/334/234' },
                { src: 'https://placekitten.com/294/232' },
                { src: 'https://placekitten.com/534/132' },
                { src: 'https://placekitten.com/334/234' },
                { src: 'https://placekitten.com/294/232' },
                { src: 'https://placekitten.com/534/132' }
              ]}
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
