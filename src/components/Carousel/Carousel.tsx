import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import './Carousel.css';
import { ArrowRightIcon } from '@components/Icons/ArrowRightIcon';
import { ArrowLeftIcon } from '@components/Icons/ArrowLeftIcon';

interface CarouselProps {
  children: React.ReactNode;
}

interface CarouselItemProps {
  children: React.ReactNode;
}

export const CarouselItem: FC<CarouselItemProps> = ({ children }: CarouselItemProps) => {
  return <div className="carousel-item">{children}</div>;
};

export const Carousel: FC<CarouselProps> = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselLength = React.Children.count(children);

  useEffect(() => {
    if (activeIndex === 1 || activeIndex === carouselLength - 2) {
      setTransitionEnabled(true);
    }
  }, [activeIndex, carouselLength]);

  const handleTransitionEnd = () => {
    if (activeIndex === 0) {
      setTransitionEnabled(false);
      setActiveIndex(carouselLength - 2);
    } else if (activeIndex === carouselLength - 1) {
      setTransitionEnabled(false);
      setActiveIndex(1);
    }
  };

  const prev = () => {
    setActiveIndex((prevState) => prevState - 1);
  };

  const next = () => {
    setActiveIndex((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: !transitionEnabled ? 'none' : undefined,
          }}
          onTransitionEnd={() => handleTransitionEnd()}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child as ReactComponentElement<any>);
          })}
        </div>
        <button className="carousel-control carousel-control-prev" onClick={prev}>
          <ArrowLeftIcon />
        </button>
        <button className="carousel-control carousel-control-next" onClick={next}>
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
};
