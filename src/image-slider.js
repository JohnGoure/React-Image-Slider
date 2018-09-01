import React from 'react';
import './style.scss';
import img1 from './images/githubphoto.png';
import img2 from './images/vega56.jpg';
import img3 from './images/civis-main-menu.png';

class ImageSlider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			images: [
				{
					source: img1,
					description: "Me"
                },
                {
                    source: img2,
                    description: "Vega56"
                },
                {
                    source: img3,
                    description: "CiviS"
                }
			],
			currentImage: '',
			currentDescription: '',
            count: 0,
            slidername: 'slider',
            style: {
            }
		}

		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
    }

	componentDidMount() {
		let image = this.state.images[this.state.count];
		this.setState({
			currentImage: image.source,
            currentDescription: image.description,
            style: {
                backgroundImage: image.source
            }
		})
	}

	prev(event) {
        let tempCount = this.state.count;
        let image = this.state.images[tempCount - 1];
        if (tempCount == 0) {
            return
        }
        this.setState({
            currentImage: image.source,
            currentDescription: image.description,
            count: this.state.count - 1,
            slidername: 'slider slideLeft'
        })
	}

	next(event) {
        let tempCount = this.state.count;
        let image = this.state.images[tempCount + 1];
        if (tempCount == this.state.images.length) {
            return
        }
        this.setState({
            currentImage: image.source,
            currentDescription: image.description,
            count: this.state.count + 1,
            slidername: 'slider slideRight'
        })
    }
    
    render() {
        return (
               <div className="slider" style={{backgroundImage: `url(${this.state.currentImage})`}}>
                   <button className='prev-btn' onClick={this.prev}>Prev</button>
                   <button className='next-btn' onClick={this.next}>Next</button>
                </div>
        )
    }
};

export default ImageSlider;