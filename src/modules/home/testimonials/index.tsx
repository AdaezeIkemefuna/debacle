import { Testimonial } from "assets";
import { useMobile } from "hooks";
import React, { useEffect, useRef, useState } from "react";

interface TestimonialsTypes {
  content: string;
  name: string;
  image: string;
}

const testimonials = [
  {
    content:
      "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Jesse",
    image: Testimonial,
  },
  {
    content:
      "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
    name: "Raye",
    image: Testimonial,
  },
  {
    content:
      "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Ladoja",
    image: Testimonial,
  },
  {
    content:
      "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Amman",
    image: Testimonial,
  },
  {
    content:
      "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Doe",
    image: Testimonial,
  },
  {
    content:
      "I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    name: "Kaisy",
    image: Testimonial,
  },
];
const Testimonials = () => {
  const { isMobile } = useMobile({ size: 768 });
  return (
    <div className="flex flex-col items-center justify-start my-16 ">
      <div className="text-center space-y-3 mb-10 px-4">
        <h2 className="text-[32px] leading-7 tracking-tight lg:text-[40px] lg:leading-[48px] text-risePrimary2">
          {isMobile
            ? "What our customers are saying"
            : "From The People Who Use Rise"}
        </h2>
        <p className="max-w-[560px] text-lg">
          {isMobile
            ? "We serve over 80,000 amazing users."
            : " Our mission at Risevest is to empower more people just like you to achieve your personal financial goals."}
        </p>
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export { Testimonials };

const TestimonialSlider: React.FC<{ testimonials: TestimonialsTypes[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Adjust time as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * 429
      }px)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex md:py-10 px-1"
        ref={sliderRef}
        style={{ transition: "transform 0.5s ease" }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.content}</p>
            <div className="flex items-center absolute bottom-6 left-4 gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="font-semibold">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
