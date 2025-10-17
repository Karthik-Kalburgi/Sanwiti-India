import React, { Suspense } from 'react';
import { Carousel, Spin } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRightOutlined } from '@ant-design/icons';

const Home = () => {
  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
  };

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920&q=80',
      title: 'Your Mental Health Matters',
      subtitle: 'Professional care with compassion and understanding',
    },
    {
      url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80',
      title: 'Expert Psychiatric Care',
      subtitle: 'Evidence-based treatment tailored to your needs',
    },
    {
      url: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=1920&q=80',
      title: 'A Safe Space to Heal',
      subtitle: 'Confidential therapy in a supportive environment',
    },
    {
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80',
      title: 'Begin Your Journey Today',
      subtitle: 'Taking the first step towards better mental wellness',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<Spin size="large" className="flex justify-center items-center h-screen" />}>
        <Carousel {...carouselSettings} className="w-full">
          {carouselImages.map((slide, index) => (
            <div key={index} className="relative h-[80vh] overflow-hidden">
              <LazyLoadImage
                src={slide.url}
                alt={slide.title}
                effect="blur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16">
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg lg:text-2xl text-blue-100 mb-6">{slide.subtitle}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                  Book Appointment
                  <ArrowRightOutlined />
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </Suspense>
    </div>
  );
};

export default Home;
