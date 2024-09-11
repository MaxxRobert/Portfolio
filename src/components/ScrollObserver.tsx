import { useEffect, useRef, useState } from 'react';

const ScrollSection = ({ title, items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col pd-8">
      <h3
        className={`text-sky-400 text-3xl transition-transform duration-700 ease-in-out ${
          isVisible ? '-translate-x-0 opacity-100' : '-translate-x-64 opacity-0'
        }`}
      >
        {title}
      </h3>

      <div className="flex flex-col gap-3 pt-6 text-xl">
        {items.map((item, index) => (
          <p
            key={index}
            className={`transition-transform duration-1000 ease-in-out delay-${index * 100} ${
              isVisible ? '-translate-x-0 opacity-100' : '-translate-x-60 opacity-0'
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollSection;
