import { Carousel } from 'antd';
import {IMAGE_CAROUSEL_OPTIONS} from "../../core/constants/constants";


const {CONTENT_STYLE_ONE,CONTENT_STYLE_TWO,CONTENT_STYLE_THREE } = IMAGE_CAROUSEL_OPTIONS






const ImageCarousel = () => {
    return (
        <Carousel autoplay>
            <div>
                <div style={CONTENT_STYLE_ONE}><h1>Looks for Men</h1></div>
            </div>
            <div>
                <h3 style={CONTENT_STYLE_TWO}><h1>Looks for Women</h1></h3>
            </div>
            <div>
                <h3 style={CONTENT_STYLE_THREE}><h1>Looks for Kids</h1></h3>
            </div>
        </Carousel>
    )
}

export default ImageCarousel