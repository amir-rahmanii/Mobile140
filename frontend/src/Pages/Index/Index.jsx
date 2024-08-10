import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Parts/Header/Header'
import NavBar from '../../Parts/NavBar/NavBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import SwiperBaner from '../../Components/IndexPage/SwiperBaner/SwiperBaner';
import TitleProducts from '../../Components/IndexPage/TitleProducts/TitleProducts';
import SwiperProductOffer from '../../Components/IndexPage/SwiperProductOffer/SwiperProductOffer';
import Footer from '../../Parts/Footer/Footer'
import SwiperProduct from '../../Components/IndexPage/SwiperProduct/SwiperProduct';
import SvgItem from '../../Components/SvgItem/SvgItem';
import Info140 from '../../Components/IndexPage/Info140/Info140';
import Articles from '../../Components/IndexPage/Articles/Articles';
import BestBrands from '../../Components/IndexPage/BestBrands/BestBrands';

export default function Index() {

  const [loading, setLoading] = useState(true); //show react spinner

  useEffect(() => {

    //change title
    document.title = 'صفحه اصلی | فروشگاه موبایل 140 ';

    //react spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // loading
  const loaderRef = useRef(null);
  const contentRef = useRef(null);
  return (
    <TransitionGroup>
      {loading ? (
        <CSSTransition key="loader" nodeRef={loaderRef} timeout={500} classNames="fade">
          <div ref={loaderRef}>
            <LoadingSpinner loading={loading} />
          </div>
        </CSSTransition>
      ) : (
        <CSSTransition key="content" nodeRef={contentRef} timeout={500} classNames="fade">
          <div>
            <div className='border-b fixed top-0 w-full bg-white z-50'>
              <div className='container font-DanaMedium '>
                <Header />
                <NavBar />
              </div>
            </div>
            {/* page */}
            <div className='font-DanaMedium mt-[122px]'>
              {/* Swiper */}
              <div className='hidden lg:block'>
                <SwiperBaner />
              </div>
              {/* titleProduct */}
              {/* <div className='mt-8 flex justify-center gap-6'>
                <TitleProducts />
                <TitleProducts />
                <TitleProducts />
                <TitleProducts />
                <TitleProducts />
                <TitleProducts />
              </div> */}

              {/* swiper offer product */}
              {/* <div className='px-[24px] mt-12 flex flex-col md:flex-row items-center justify-center gap-6'>
                <SwiperProductOffer
                  bgColor="bg-mainRed"
                  title="شگفت‌انگیز موبایل‌ و تبلت"
                  img="/src/assets/images/offerProduct/1.png"
                />
                <SwiperProductOffer
                  bgColor="bg-[#192F7C]"
                  title="شگفت‌انگیز سایر کالاها"
                  img="/src/assets/images/offerProduct/3.png"
                />
              </div> */}

              {/* images */}
              {/* <div className='flex justify-center items-center gap-5 my-12'>
                <img loading='lazy' className='w-[275px] h-[172px]' src="/src/assets/images/index/1.jpg" alt="1" />
                <img loading='lazy' className='w-[275px] h-[172px]' src="/src/assets/images/index/2.jpg" alt="2" />
                <img loading='lazy' className='w-[275px] h-[172px]' src="/src/assets/images/index/3.jpg" alt="3" />
                <img loading='lazy' className='w-[275px] h-[172px]' src="/src/assets/images/index/4.jpg" alt="4" />
              </div> */}

              {/* products */}
              {/* <div>
                <SwiperProduct />
                <SwiperProduct />
                <SwiperProduct />
                <SwiperProduct />
              </div> */}

              {/* infos */}
              {/* <div className='flex justify-center items-center '>
                <div dir='ltr' className=' border rounded-[10px] w-[1150px] '>
                  <div className='flex divide-x-2 py-3'>
                    <Info140
                      title='تضمین قیمت'
                      svgName="priceIcon"
                    />
                    <Info140
                      title='پشتیبانی تلفنی'
                      svgName="telephonIcon"
                    />
                    <Info140
                      title='ضمانت 7 روز موبایل 140'
                      svgName="7daysIcon"
                    />
                    <Info140
                      title='ضمانت اصالت کالا'
                      svgName="originalIcon"
                    />
                    <Info140
                      title='تحویل اکسپرس'
                      svgName="experesIcon"
                    />
                  </div>
                </div>
              </div> */}

              {/* articles */}
              {/* <div className='flex justify-center'>
                <Articles />
              </div> */}

              {/* best brands */}
              {/* <div>
                  <BestBrands />
              </div> */}
            </div>
            {/* footer */}
            <div>
              <Footer />
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}
