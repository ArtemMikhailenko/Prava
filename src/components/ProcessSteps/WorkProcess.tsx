'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './WorkProcess.module.css';

// Данные о шагах процесса
const stepsData = [
  {
    id: 1,
    number: '01',
    title: 'Оставляете заявку',
    description: 'Мы предлагаем два удобных варианта: вы можете оставить заявку на нашем сайте или связаться с нами по телефону',
    phone: '8-800-777-24-52',
    image: '/images/hero-2.png',
  },
  {
    id: 2,
    number: '02',
    title: 'Оформляем ваши права',
    description: 'Без предоплаты. Быстро и официально оформим документы, и внесём информацию в базы ГИБДД.',
    image: '/images/hero-2.png',
  },
  {
    id: 3,
    number: '03',
    title: 'Доставка ваших прав',
    description: 'Мы отправляем ваши права на проверку по email, а оригиналы доставляем туда, где и когда вам удобно.',
    image: '/images/hero-2.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Оплата документов',
    description: 'Вы проверяете документы и оплачиваете удобным для вас способом. Мы делаем всё для вашего комфорта.',
    image: '/images/hero-2.png',
  }
];

export const WorkProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Как мы работаем</h2>
          <p className={styles.subtitle}>Простой и удобный процесс получения водительского удостоверения</p>
        </div>
        
        <div className={styles.processSteps}>
          {stepsData.map((step, index) => (
            <div 
              key={step.id} 
              className={`${styles.stepBlock} ${isVisible ? styles.fadeIn : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>
                  <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <circle cx="100" cy="100" r="85" className={styles.numberCircle} />
                    <text x="100" y="100" dy=".35em" textAnchor="middle" className={styles.numberText}>{step.number}</text>
                  </svg>
                </div>
                
                <div className={styles.stepInfo}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>
                    {step.description}
                    {step.phone && (
                      <a href={`tel:${step.phone}`} className={styles.phoneLink}>
                        {step.phone}
                      </a>
                    )}
                  </p>
                  
                  {index === 0 && (
                    <div className={styles.stepActions}>
                      <button className={styles.primaryButton}>Оставить заявку</button>
                      <a href={`tel:${step.phone}`} className={styles.callButton}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                        </svg>
                        Позвонить
                      </a>
                    </div>
                  )}
                </div>
                
                <div className={styles.stepImageContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      layout="fill"
                      objectFit="cover"
                      className={styles.stepImage}
                    />
                    <div className={styles.imageBadge}>{step.number}</div>
                  </div>
                </div>
              </div>
              
              {index < stepsData.length - 1 && (
                <div className={styles.connector}>
                  <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0V80M20 80L5 65M20 80L35 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className={`${styles.ctaContainer} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Готовы начать?</h3>
              <p className={styles.ctaDescription}>
                Оставьте заявку прямо сейчас и получите бесплатную консультацию по вопросам получения водительского удостоверения
              </p>
              <button className={styles.ctaButton}>
                Оформить заявку
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};