import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  HeartOutlined,
  SafetyOutlined,
  TeamOutlined,
  TrophyOutlined,
  StarOutlined,
  RocketOutlined,
} from '@ant-design/icons';

const About = () => {
  // Doctor information
  const doctorInfo = {
    name: 'Dr. Sanwiti Sharma',
    credentials: 'MD, Psychiatry | Board Certified',
    specialization: 'Adult & Child Psychiatry, Anxiety & Depression Management',
    experience: '15+ Years',
    education: [
      'MD in Psychiatry - All India Institute of Medical Sciences (AIIMS), New Delhi',
      'MBBS - King George Medical University, Lucknow',
      'Fellowship in Child & Adolescent Psychiatry',
    ],
    description:
      'Dr. Sanwiti Sharma is a compassionate and experienced psychiatrist dedicated to helping individuals overcome mental health challenges. With over 15 years of clinical experience, she specializes in treating anxiety, depression, trauma, and stress-related disorders using evidence-based therapeutic approaches.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80',
    expertise: [
      'Cognitive Behavioral Therapy (CBT)',
      'Mindfulness-Based Stress Reduction',
      'Medication Management',
      'Trauma-Informed Care',
      'Family & Couples Counseling',
      'Crisis Intervention',
    ],
  };

  // Why Sanwiti reasons
  const whySanwiti = [
    {
      icon: <HeartOutlined className="text-4xl text-blue-500" />,
      title: 'Compassionate Care',
      description:
        'We believe in treating every patient with empathy, respect, and dignity. Your mental wellness is our priority.',
    },
    {
      icon: <SafetyOutlined className="text-4xl text-blue-500" />,
      title: 'Safe Environment',
      description:
        'A confidential, judgment-free space where you can share your thoughts and feelings openly without fear.',
    },
    {
      icon: <TeamOutlined className="text-4xl text-blue-500" />,
      title: 'Personalized Approach',
      description:
        'Every individual is unique. We create customized treatment plans tailored to your specific needs and goals.',
    },
    {
      icon: <TrophyOutlined className="text-4xl text-blue-500" />,
      title: 'Proven Results',
      description:
        'Evidence-based treatments combined with years of clinical expertise deliver lasting positive outcomes.',
    },
  ];

  // Our story
  const ourStory = {
    title: 'Why We Started Sanwiti',
    subtitle: 'A Journey Rooted in Compassion',
    content: [
      'Sanwiti was founded with a simple yet powerful vision: to make quality mental health care accessible, affordable, and stigma-free for everyone.',
      'The inspiration came from witnessing countless individuals struggle silently with mental health issues due to societal stigma, lack of awareness, and limited access to professional help. We realized that mental health is just as important as physical health, yet it often goes neglected.',
      'Our founder, Dr. Sanwiti Sharma, experienced firsthand how proper psychiatric care transformed lives during her medical training. She saw patients regain hope, rebuild relationships, and rediscover joy after receiving compassionate, evidence-based treatment.',
      'This motivated the creation of a practice where people feel safe, heard, and supported—a place where healing begins with understanding and ends with empowerment.',
    ],
  };

  // Mission section
  const mission = {
    title: 'Our Mission',
    mainGoal:
      'To provide holistic, patient-centered psychiatric care that promotes mental wellness, resilience, and lasting positive change in our community.',
    objectives: [
      {
        icon: <StarOutlined className="text-3xl text-blue-500" />,
        title: 'Break the Stigma',
        description:
          'Normalize conversations around mental health and encourage people to seek help without shame or judgment.',
      },
      {
        icon: <HeartOutlined className="text-3xl text-blue-500" />,
        title: 'Accessible Care',
        description:
          'Make high-quality psychiatric services available to all, regardless of background or financial status.',
      },
      {
        icon: <RocketOutlined className="text-3xl text-blue-500" />,
        title: 'Empower Lives',
        description:
          'Equip individuals with tools, strategies, and support to take control of their mental health journey.',
      },
    ],
  };

  // Values
  const values = [
    'Compassion & Empathy',
    'Confidentiality & Trust',
    'Evidence-Based Treatment',
    'Patient-Centered Care',
    'Continuous Learning',
    'Community Support',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Sanwiti
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
              Dedicated to transforming lives through compassionate psychiatric care and mental wellness support
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Doctor Image */}
              <Suspense fallback={<Spin size="large" />}>
                <div className="order-1 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <LazyLoadImage
                      src={doctorInfo.image}
                      alt={doctorInfo.name}
                      effect="blur"
                      className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                      wrapperClassName="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {doctorInfo.name}
                      </h3>
                      <p className="text-blue-100 text-sm sm:text-base">{doctorInfo.credentials}</p>
                    </div>
                  </div>
                </div>
              </Suspense>

              {/* Doctor Details */}
              <div className="order-2 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Meet Your Psychiatrist
                </h2>
                <div className="w-20 h-1 bg-blue-500 mb-6"></div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Specialization:</p>
                      <p className="text-gray-700 text-sm sm:text-base">{doctorInfo.specialization}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Experience:</p>
                      <p className="text-gray-700 text-sm sm:text-base">{doctorInfo.experience}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  {doctorInfo.description}
                </p>

                <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Education & Training</h4>
                  <ul className="space-y-2">
                    {doctorInfo.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">Areas of Expertise</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctorInfo.expertise.map((exp, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                        <span className="text-blue-500">✓</span>
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sanwiti Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Sanwiti?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional mental health care that makes a real difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whySanwiti.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {ourStory.title}
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-xl sm:text-2xl text-blue-600 font-semibold italic">
                {ourStory.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {ourStory.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 bg-blue-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
              <p className="text-lg sm:text-xl text-gray-800 italic leading-relaxed">
                "Mental health is not a destination, but a journey. At Sanwiti, we walk alongside you every step of the way, providing the support and care you deserve."
              </p>
              <p className="text-base sm:text-lg text-blue-600 font-semibold mt-4">
                - Dr. Sanwiti Sharma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {mission.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                {mission.mainGoal}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {mission.objectives.map((objective, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-4">{objective.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-base sm:text-lg font-semibold text-blue-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Sanwiti today and take the first step toward better mental health
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
