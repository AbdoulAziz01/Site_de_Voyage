// Déclaration des types pour les modules Swiper
declare module 'swiper' {
  import { SwiperOptions } from 'swiper/types';
  import { Swiper as SwiperClass } from 'swiper/types';
  import { ReactNode } from 'react';

  export interface SwiperProps extends SwiperOptions {
    children?: ReactNode;
    onSwiper?: (swiper: SwiperClass) => void;
    onSlideChange?: (swiper: SwiperClass) => void;
  }

  export interface SwiperSlideProps {
    children?: ReactNode;
    className?: string;
    tag?: string;
    virtualIndex?: number;
  }

  export const Swiper: React.FC<SwiperProps>;
  export const SwiperSlide: React.FC<SwiperSlideProps>;
  
  // Export des modules nécessaires
  export { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
  export { Swiper as default } from 'swiper/react';
}
