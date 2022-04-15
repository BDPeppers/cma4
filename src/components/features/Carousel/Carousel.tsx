import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Debi from "../../../../public/imgs/Testimonials/Debi.png";
import justinBefore from "../../../../public/imgs/Testimonials/justinBefore.png";
import justinAfter from "../../../../public/imgs/Testimonials/justinAfter.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export class Testimonial {
  constructor(public quote: string, public before: any, public after?: any) {}
}

const slideList: Array<Testimonial> = [];

const T1 = new Testimonial(
  `Over 15lbs down in 3 months and best of all - blood pressure no longer high!! 
Nurse said my blood pressure is better than hers!! Sugar levels were back to normal! 
So happy because I’ve been dealing with this my entire adult life!!`,
  Debi
);
slideList.push(T1);

const T2 = new Testimonial(
  `Coach Chanda changed my life. 
Doctors told me it would be impossible to be where I am today and that I needed to be realistic in my overall goals. 
Well, thanks to her I just competed in my 4th men’s physique competition and it’s only up from here. 
She’s constantly teaching me how to improve as an athlete and in doing so has helped me improve in life. 
Over 100 pounds of fat lost!!!! No surgery!!!! Just a great coach and some work. Love her to death and can’t wait to see what the future holds.`,
  justinBefore,
  justinAfter
);
slideList.push(T2);

export default class Carousel extends React.Component {
  public render() {
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slideList.map((slide, x) => {
            return (
              <SwiperSlide>
                <Image src={slide.before} alt="CMA Fitness Testimonials" />
                {slide.after ? (
                  <Image src={slide.after} alt="CMA Fitness Testimonials" />
                ) : null}
                {slide.quote}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
}
