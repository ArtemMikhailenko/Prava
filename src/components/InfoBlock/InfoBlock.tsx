'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './InfoBlock.module.css';

// Данные о категориях прав и ценах
const categoryData = [
  { name: 'Категория B', description: 'Легковые автомобили', price: 'от 25 000 ₽', icon: 'car' },
  { name: 'Категория A', description: 'Мотоциклы и квадроциклы', price: 'от 20 000 ₽', icon: 'motorcycle' },
  { name: 'Категория C', description: 'Грузовые автомобили', price: 'от 15 000 ₽', icon: 'truck' },
  { name: 'Спецтехника', description: 'Тракторы и другая техника', price: 'от 22 000 ₽', icon: 'tractor' },
  { name: 'Категория M', description: 'Мопеды и скутеры', price: 'от 18 000 ₽', icon: 'scooter' }
];

// Данные о часто задаваемых вопросах
const faqData = [
  {
    question: 'Можно ли быстро оформить права категории B по всей России?',
    answer: 'Да, это самая популярная категория, и мы гарантируем её официальное оформление в кратчайшие сроки.'
  },
  {
    question: 'В чём преимущество обращения к вам?',
    answer: 'Обычное обучение в автошколе может занять месяцы и обойтись в сумму от 40 000 рублей. С нами вы получите права уже через несколько дней и по более доступной цене.'
  },
  {
    question: 'Какие документы нужны для оформления?',
    answer: 'Достаточно только паспортных данных. Мы позаботимся обо всём остальном.'
  },
  {
    question: 'Можно ли получить права на мотоцикл?',
    answer: 'Да, права категории A и на квадроциклы также доступны для оформления.'
  }
];

// Данные о процессе оформления
const processSteps = [
  {
    step: 1,
    title: 'Подача заявки',
    description: 'Вы оставляете заявку, указывая паспортные данные и нужную категорию прав.',
    icon: 'form'
  },
  {
    step: 2,
    title: 'Проверка и регистрация',
    description: 'Мы проверяем введённую информацию и начинаем процесс регистрации в ГИБДД.',
    icon: 'verification'
  },
  {
    step: 3,
    title: 'Получение прав',
    description: 'Через 5–6 дней готовые права доставляются вам. Оплачиваете только после получения документа.',
    icon: 'delivery'
  }
];

// Компонент иконок
const CategoryIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'car':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="currentColor"/>
        </svg>
      );
    case 'motorcycle':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.44 9.03L15.41 5H11V7H14.59L16.59 9H8.54C7.53 9 6.59 9.33 5.83 9.88L8.91 13H15.29L16.97 10.96C17.61 10.35 18.62 10.35 19.26 10.96C19.5 11.2 19.63 11.53 19.63 11.87C19.63 12.21 19.5 12.54 19.26 12.78L17.41 15H5.12C4.5 15 4 15.5 4 16.13V16.21C4 17.19 4.39 18.13 5.08 18.83L9 23H15L17.31 20.41C17.72 19.94 18.2 19.54 18.72 19.24L20.74 17.97C21.43 17.55 21.59 16.63 21.15 15.98C20.71 15.33 19.77 15.16 19.13 15.58L17.85 16.36C17.42 16.61 17.06 17 16.8 17.41L15.91 19H14.5L19.25 14.25C19.66 13.84 19.92 13.32 20 12.78C20.08 12.24 20 11.69 19.75 11.19C19.4 10.5 18.96 9.93 18.43 9.44C18.76 9.21 19.13 9.1 19.5 9.1C19.76 9.1 20.04 9.16 20.24 9.29C20.44 9.42 20.72 9.38 20.88 9.22C21.04 9.06 21.08 8.78 20.95 8.58C20.82 8.38 20.76 8.1 20.76 7.84C20.76 7.14 21.31 6.59 22 6.59C22.28 6.59 22.5 6.37 22.5 6.09C22.5 5.81 22.28 5.59 22 5.59C20.76 5.59 19.76 6.59 19.76 7.83C19.76 8.2 19.87 8.57 20.09 8.89C19.68 8.75 19.27 8.67 18.85 8.67C18.41 8.67 17.98 8.76 17.58 8.93L15.59 7H18V5H15C14.7348 5 14.4804 5.10536 14.2929 5.29289C14.1054 5.48043 14 5.73478 14 6H13.5V2H11.5V6H10.9C10.9 5.73478 10.7946 5.48043 10.6071 5.29289C10.4196 5.10536 10.1652 5 9.9 5H8V7H9.9L13.5 10.62V13H10.5V11H3.5V13H8.5V15H9.75L7.5 12.62V11H2V15.12C2 17.37 3.88 19.25 6.13 19.25C7.71 19.25 9.09 18.28 9.72 16.91L11.5 19H13V16H8.01C8.01 16.55 7.56 17 7.01 17C6.46 17 6.01 16.55 6.01 16C6.01 15.45 6.46 15 7.01 15H8.01L10.89 11H10.5V9.5H13.4L11.5 7.63V6H12.5V9.5H15.8L14.23 11H12V14.5H14.21L13.6 15.5H10.5V19H14V23H16V19.5H14.5L17.85 15.53C18.18 15.28 18.54 15.07 18.92 14.85L21.11 13.67C21.95 13.19 22.11 12.62 22.5 12C22.87 11.2 22.89 11.2 22.5 10.5C22.1 9.77 21.5 9.3 20.62 9.13C20.24 9.04 19.85 9 19.44 9.03Z" fill="currentColor"/>
        </svg>
      );
    case 'truck':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4V3C18 2.45 17.55 2 17 2H3C2.45 2 2 2.45 2 3V15C2 15.55 2.45 16 3 16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14C14 17.66 15.34 19 17 19C18.66 19 20 17.66 20 16H21C21.55 16 22 15.55 22 15V8L18 4ZM7 17C6.45 17 6 16.55 6 16C6 15.45 6.45 15 7 15C7.55 15 8 15.45 8 16C8 16.55 7.55 17 7 17ZM17 17C16.45 17 16 16.55 16 16C16 15.45 16.45 15 17 15C17.55 15 18 15.45 18 16C18 16.55 17.55 17 17 17ZM4 14V4H16V8H17.5L20 10.5V14H4Z" fill="currentColor"/>
        </svg>
      );
    case 'tractor':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 15C17.57 15 16 16.57 16 18.5C16 20.43 17.57 22 19.5 22C21.43 22 23 20.43 23 18.5C23 16.57 21.43 15 19.5 15ZM19.5 20C18.67 20 18 19.33 18 18.5C18 17.67 18.67 17 19.5 17C20.33 17 21 17.67 21 18.5C21 19.33 20.33 20 19.5 20ZM17 4.5H14V9H17C17.83 9 18.5 8.33 18.5 7.5V6C18.5 5.17 17.83 4.5 17 4.5ZM20 8H19V10H20C20.83 10 21.5 9.33 21.5 8.5C21.5 8.22 21 8 20 8ZM8 15C6.07 15 4.5 16.57 4.5 18.5C4.5 20.43 6.07 22 8 22C9.93 22 11.5 20.43 11.5 18.5C11.5 16.57 9.93 15 8 15ZM8 20C7.17 20 6.5 19.33 6.5 18.5C6.5 17.67 7.17 17 8 17C8.83 17 9.5 17.67 9.5 18.5C9.5 19.33 8.83 20 8 20ZM15 10.11V7.5C15 5.57 13.43 4 11.5 4H6.83L2.95 14H0.92C0.4 14 0 14.4 0 14.92V15.5C0 16.33 0.67 17 1.5 17H8.08C8.03 17.16 8 17.33 8 17.5C8 17.67 8.03 17.84 8.08 18H12.5V16.5C12.5 15.67 13.17 15 14 15H18.5V14H15C14.45 14 14 13.55 14 13V11C15.1 11 16 10.1 16 9V8.5C16 8.22 15.5 8 15 8V10.11ZM13 9C13 9.55 12.55 10 12 10H10V6H12C12.55 6 13 6.45 13 7V9Z" fill="currentColor"/>
        </svg>
      );
    case 'scooter':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 14.5L5.5 13L3 15L5.5 19L8 17V14.5H7.5ZM9 6H5.82C5.4 6 5.01 6.21 4.79 6.56L4.05 7.67C3.88 7.93 4.05 8.25 4.36 8.25H6L9 8.75V17H11V14H14C14.55 14 15 13.55 15 13V10C15 9.45 14.55 9 14 9H11V6H9ZM19 15C17.34 15 16 16.34 16 18C16 19.66 17.34 21 19 21C20.66 21 22 19.66 22 18C22 16.34 20.66 15 19 15ZM19 19C18.45 19 18 18.55 18 18C18 17.45 18.45 17 19 17C19.55 17 20 17.45 20 18C20 18.55 19.55 19 19 19ZM7 15C5.34 15 4 16.34 4 18C4 19.66 5.34 21 7 21C8.66 21 10 19.66 10 18C10 16.34 8.66 15 7 15ZM7 19C6.45 19 6 18.55 6 18C6 17.45 6.45 17 7 17C7.55 17 8 17.45 8 18C8 18.55 7.55 19 7 19Z" fill="currentColor"/>
        </svg>
      );
    case 'form':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
        </svg>
      );
    case 'verification':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
        </svg>
      );
    case 'delivery':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z" fill="currentColor"/>
          <path d="M5 6H12V8H5V6Z" fill="currentColor"/>
          <path d="M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

export const InfoBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Получите водительские права по всей России 
              <span className={styles.accent}> быстро и без лишних хлопот!</span>
            </h1>
            <p className={styles.heroDescription}>
              Хотите оформить водительские права без долгих очередей и экзаменов? Мы предлагаем быстрый, официальный и удобный способ получения водительского удостоверения прямо в вашем городе. Все документы оформляются с обязательным внесением в реестр ГИБДД и полностью соответствуют законодательству РФ.
            </p>
            <div className={styles.heroCta}>
                {/* Telegram CTA */}
              <a
                href="https://t.me/Aleksandr24th"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
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

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/79002781851"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <svg
                  width="20"
                  height="20"
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
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              {/* <div className={styles.imagePlaceholder}> */}
                <img src="/images/prava.jpeg" alt="" />
              {/* </div> */}
            </div>
            <div className={styles.imageBadge}>
              <div className={styles.badgeIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.badgeText}>
                <span>Официальные</span>
                <span>документы</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Как происходит процесс оформления прав?</h2>
          <p className={styles.sectionDescription}>Мы сделали процесс максимально простым:</p>
          
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`${styles.processCard} ${isVisible ? styles.fadeIn : ''}`} 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepIcon}>
                  <CategoryIcon type={step.icon} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.processNote}>
            <p>
              Неважно, хотите ли вы получить права на авто, мотоцикл или заменить повреждённое удостоверение — наша команда сделает всё быстро и без лишних вопросов.
            </p>
          </div>
        </div>
        

        
        <div className={styles.medicalSection}>
          <div className={styles.medicalCard}>
            <div className={styles.medicalContent}>
              <h2>Нужно ли оформлять медицинскую справку?</h2>
              <p>
                Для стандартного оформления водительских прав медицинская справка — обязательное условие. Однако, обращаясь к нам, вы экономите время: мы берём на себя решение этого вопроса. Вам не придётся проходить медкомиссию и собирать дополнительные документы.
              </p>
            </div>
            <div className={styles.medicalIcon}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
          
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaq === index ? styles.open : ''} ${isVisible ? styles.fadeIn : ''}`}
                style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <div className={styles.faqToggle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.advantagesSection}>
          <h2 className={styles.sectionTitle}>Почему жители России выбирают нас?</h2>
          
          <div className={styles.advantagesList}>
            <div className={`${styles.advantageItem} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.advantageIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.advantageText}>
                <h3>Быстрое оформление прав на все категории</h3>
              </div>
            </div>
            
            <div className={`${styles.advantageItem} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.advantageIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.advantageText}>
                <h3>Замены старых удостоверений без лишних проволочек</h3>
              </div>
            </div>
            
            <div className={`${styles.advantageItem} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.5s' }}>
              <div className={styles.advantageIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.advantageText}>
                <h3>Официальные документы с гарантией внесения в реестр ГИБДД</h3>
              </div>
            </div>
            
            <div className={`${styles.advantageItem} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className={styles.advantageIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.advantageText}>
                <h3>Выгодные условия для жителей России</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.finalCta}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Как оформить права?</h2>
            <p className={styles.ctaDescription}>
              Чтобы получить водительское удостоверение, просто оставьте заявку на нашем сайте или свяжитесь с менеджером. Мы гарантируем официальное оформление, качество документов и быструю доставку.
            </p>
            <div className={styles.ctaActions}>
              {/* Telegram CTA */}
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

              <div className={styles.orText}>или</div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/79002781851"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.phoneLink}
              >
                <svg
                  width="20"
                  height="20"
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
          </div>
          
          <div className={styles.closingStatement}>
            <p>
              С нашей помощью получение водительских прав по всей России станет лёгким, безопасным и доступным процессом!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};