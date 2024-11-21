import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../TestCard";


const ProductCarousel = ({ products }) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4, // Default number of slides
        slidesToScroll: 2,
        infinite: false, // Prevent infinite looping (optional)
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            {
                breakpoint: 768, // Mobile landscape
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 480, // Mobile portrait
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {products.map((prod) => (
                    <div key={prod.productId} className="carousel-item">
                        <ProductCard product={prod} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
