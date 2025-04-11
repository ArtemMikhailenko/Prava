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
    image: '/images/zayavka.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'Оформляем ваши права',
    description: 'Без предоплаты. Быстро и официально оформим документы, и внесём информацию в базы ГИБДД.',
    image: '/images/oformlenee.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'Доставка ваших прав',
    description: 'Мы отправляем ваши права на проверку по email, а оригиналы доставляем туда, где и когда вам удобно.',
    image: '/images/dostavka.jpg',
  },
  {
    id: 4,
    number: '04',
    title: 'Оплата документов',
    description: 'Вы проверяете документы и оплачиваете удобным для вас способом. Мы делаем всё для вашего комфорта.',
    image: '/images/oplata.jpg',
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
                  </p>
                  
                  {index === 0 && (
                   <div className={styles.stepActions}>
                   {/* Ссылка на Telegram */}
                   <a
                     href="https://t.me/Aleksandr24th"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.primaryButton}
                   >
                     Оставить заявку
                   </a>
                 
                   {/* WhatsApp звонок/чат */}
                   <a
                     href="https://wa.me/79002781851"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.callButton}
                   >
                     <svg
                       width="16"
                       height="16"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.05 4.91C18.1 4.2 16.9 3.85 15.28 3.85H8.73C7.05 3.85 5.82 4.22 4.87 4.95C3.93 5.7 3.45 6.76 3.45 8.14V15.86C3.45 17.23 3.93 18.31 4.87 19.05C5.82 19.78 7.05 20.15 8.73 20.15H15.28C16.93 20.15 18.15 19.78 19.04 19.05C19.96 18.31 20.42 17.23 20.42 15.86V8.14C20.45 6.79 19.98 5.71 19.05 4.91ZM12 15.52C10.07 15.52 8.5 13.94 8.5 12C8.5 10.06 10.07 8.48 12 8.48C13.93 8.48 15.5 10.06 15.5 12C15.5 13.94 13.93 15.52 12 15.52Z"
                         fill="#25D366"
                       />
                     </svg>
                     WhatsApp
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
              <a
                  href="https://t.me/Aleksandr24th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  Связаться с нами
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};