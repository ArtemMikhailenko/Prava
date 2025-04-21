'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Slides data
  const slides = [
    {
      title: 'ЗАКАЗАТЬ ВОДИТЕЛЬСКИЕ ПРАВА ПО ВСЕЙ РОССИИ',
      subtitle: 'С внесением в реестр ГИБДД',
      background: '/images/hero-1.webp',
    },
    {
      title: 'ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ',
      subtitle: 'С гарантией и поддержкой на каждом этапе',
      background: '/images/hero-2.webp',
    },
    {
      title: 'БЫСТРАЯ ДОСТАВКА ПО ВСЕЙ РОССИИ',
      subtitle: 'Получите права в кратчайшие сроки',
      background: '/images/hero-3.webp',
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Helper for animated numbers
  const AnimatedNumber = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
      let startTime: number;
      const duration = 2000;
      
      const animateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setDisplayValue(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
    }, [value]);
    
    return <span>{displayValue.toLocaleString()}</span>;
  };

  return (
    <div className={styles.heroWrapper}>
      {/* Slides */}
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ''}`}
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className={styles.slideOverlay}></div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.titleContainer}>
            <h1 className={styles.heroTitle}>
              {slides[currentSlide].title}
            </h1>
            <div className={styles.subtitleContainer}>
              <p className={styles.heroSubtitle}>
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
          
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statValue}><AnimatedNumber value={15745} />+</div>
              <div className={styles.statLabel}>Довольных клиентов</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}><AnimatedNumber value={98} />%</div>
              <div className={styles.statLabel}>Успешных заказов</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}><AnimatedNumber value={5} /> лет</div>
              <div className={styles.statLabel}>На рынке</div>
            </div>
          </div>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Доставка прав от 2 дней</h3>
                <p className={styles.featureDescription}>Быстрая и надежная доставка по всей России</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Без предоплаты!</h3>
                <p className={styles.featureDescription}>Оплачиваете только после получения</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Официальные документы</h3>
                <p className={styles.featureDescription}>С возможностью проверки в реестре ГИБДД</p>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaContainer}>
            <a
              href="https://t.me/Aleksandr24th"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <span>Связаться с нами</span>
              <svg
                className={styles.ctaIcon}
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};