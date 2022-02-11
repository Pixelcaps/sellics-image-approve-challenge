import { useSelector } from 'react-redux';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { selectApprovedImages } from '../../reducers/imageReducer';
import { Carousel, CarouselImage } from './ImageCarouselStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { device } from '../../styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageCarousel = () => {
    const approvedImages = useSelector(selectApprovedImages);
    const matchesMobile = useMediaQuery(device.mobile);
    const matchesTablet = useMediaQuery(device.tablet);
    const matchesLaptop = useMediaQuery(device.laptop);
    const matchesDesktop = useMediaQuery(device.desktop);

    return (
        <Carousel>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={25}
                slidesPerView={
                    (matchesMobile && 3) || 
                    (matchesTablet && 5) ||
                    (matchesLaptop && 7) ||
                    (matchesDesktop && 10)
                }
                navigation
            >
                {approvedImages.map(image => {
                        return (
                            <SwiperSlide key={image.id}>
                                <CarouselImage
                                    alt={image.id}
                                    draggable={false}
                                    src={image.urls.thumb}
                                />
                            </SwiperSlide>
                        );
                })}
            </Swiper>
        </Carousel>
    )
}

export default ImageCarousel;