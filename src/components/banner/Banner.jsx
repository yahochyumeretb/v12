import { useEffect, useState } from 'react';
import uaz1 from '../../assets/image.png';
import uaz2 from '../../assets/image2.png';
import uaz3 from '../../assets/image3.png';
import './Banner.css';

const Banner = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [uaz1, uaz2, uaz3];
    const getBannerClass = (index) => {
        return currentBanner === index ? 'banner-show' : 'banner-hide';
    };
    useEffect(() => {
        const bannerInterval = setInterval(
            () => {
                console.info('Banner changed');
                let current = currentBanner + 1;
                if (current === banners.length) {
                    current = 0;
                }
                setCurrentBanner(current);
            },
            5000,
        );
        return () => clearInterval(bannerInterval);
    });
    return (
        <div id="banner" >
            {
                banners.map((banner, index) =>
                    <img key={index} className={getBannerClass(index)} src={banner} alt={`banner${index}`} />)
            }
        </div >
    );
};

export default Banner;
