import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Parts/Header/Header'
import NavBar from '../../Parts/NavBar/NavBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import SwiperBaner from '../../Components/IndexPage/SwiperBaner/SwiperBaner';

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
            <div className='border-b'>
              <div className='container font-Dana'>
                <Header />
                <NavBar />
              </div>
            </div>
            {/* page */}
            <div>
              <SwiperBaner />
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}
