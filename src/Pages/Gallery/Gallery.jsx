import React from 'react';
import { Row, Col, Card } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiOutlineDollarCircle, AiOutlineHeart, AiOutlineSmile, AiOutlineBulb } from 'react-icons/ai';

const { Meta } = Card;

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1580281657521-1f91bdf70c02?w=3840&q=80',
    title: 'Mindful Meditation',
    description: 'Practicing mindfulness to calm the mind and reduce stress',
    icon: <AiOutlineSmile className="text-3xl text-blue-500" />,
  },
  {
    url: 'https://images.unsplash.com/photo-1587502536263-3be6e16f1a07?w=3840&q=80',
    title: 'Therapy Session',
    description: 'One-on-one counseling sessions for personalized care',
    icon: <AiOutlineHeart className="text-3xl text-blue-500" />,
  },
  {
    url: 'https://images.unsplash.com/photo-1586281380426-5ec2b9f9441e?w=3840&q=80',
    title: 'Group Support',
    description: 'Connecting with others to share experiences and growth',
    icon: <AiOutlineBulb className="text-3xl text-blue-500" />,
  },
  {
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=3840&q=80',
    title: 'Outdoor Therapy',
    description: 'Healing through nature walks and fresh air sessions',
    icon: <AiOutlineDollarCircle className="text-3xl text-blue-500" />,
  },
];

const Gallery = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
      Our Gallery
    </h1>
    <Row gutter={[16, 16]}>
      {galleryItems.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={12} lg={6}>
          <Card
            hoverable
            cover={
              <LazyLoadImage
                src={item.url}
                alt={item.title}
                effect="blur"
                className="w-full h-64 object-cover"
              />
            }
            className="rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">{item.icon}<span className="ml-2 text-lg font-semibold">{item.title}</span></div>
            <Meta
              description={<p className="text-sm text-gray-700">{item.description}</p>}
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Gallery;
