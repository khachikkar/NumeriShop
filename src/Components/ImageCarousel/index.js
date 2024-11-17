import { Carousel, Button } from 'antd';
import {IMAGE_CAROUSEL_OPTIONS} from "../../core/constants/constants";
import {CAROUSEL_BUTTON_OPTIONS} from "../../core/constants/constants";

const {CONTENT_STYLE_ONE,CONTENT_STYLE_TWO,CONTENT_STYLE_THREE } = IMAGE_CAROUSEL_OPTIONS
const {MAN, WOMAN, KID} = CAROUSEL_BUTTON_OPTIONS


const style = {backgroundColor:"black", color:"white" }




const ImageCarousel = () => {
    return (
        <Carousel autoplay>

            <div>
                <div style={CONTENT_STYLE_ONE}>
                    <h1>Looks for Men</h1>
                    <div>
                        <Button size="large" type="primary" style={style} >{MAN.text}</Button>
                    </div>
                </div>
            </div>
            <div>
                <h3 style={CONTENT_STYLE_TWO}>
                    <h1>Looks for Women</h1>
                    <div>
                        <Button size="large" type="primary" style={style}>{WOMAN.text}</Button>
                    </div>
                </h3>
            </div>
            <div>
                <h3 style={CONTENT_STYLE_THREE}>
                    <h1>Looks for Kids</h1>
                    <div>
                        <Button size="large" type="primary" style={style}>{KID.text}</Button>
                    </div>
                </h3>
            </div>
        </Carousel>
    )
}

export default ImageCarousel