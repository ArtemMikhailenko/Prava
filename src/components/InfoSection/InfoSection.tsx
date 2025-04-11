'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './InfoSection.module.css';

export const InfoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('process');
  
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

  const tabs = [
    { id: 'process', label: 'Процесс оформления' },
    { id: 'benefits', label: 'Преимущества' },
    { id: 'guarantees', label: 'Гарантии' },
  ];

  const tabContent = {
    process: [
      { 
        title: 'Заявка', 
        description: 'Оставьте заявку на сайте или свяжитесь с нами по телефону',
        icon: 'form',
      },
      { 
        title: 'Консультация', 
        description: 'Наш специалист свяжется с вами для уточнения деталей',
        icon: 'chat',
      },
      { 
        title: 'Оформление', 
        description: 'Мы оформляем документы и вносим данные в реестр ГИБДД',
        icon: 'document',
      },
      { 
        title: 'Доставка', 
        description: 'Доставляем права в любой регион России в кратчайшие сроки',
        icon: 'delivery',
      },
    ],
    benefits: [
      { 
        title: 'Официальные документы', 
        description: 'Все документы официально зарегистрированы в базе ГИБДД',
        icon: 'certificate',
      },
      { 
        title: 'Быстрое оформление', 
        description: 'Получение прав в течение 2-3 дней без лишних хлопот',
        icon: 'clock',
      },
      { 
        title: 'Все категории', 
        description: 'Оформляем права категорий "A", "B" и "C" с учетом ваших требований',
        icon: 'categories',
      },
      { 
        title: 'Конфиденциальность', 
        description: 'Гарантируем полную защиту ваших персональных данных',
        icon: 'security',
      },
    ],
    guarantees: [
      { 
        title: '100% легальность', 
        description: 'Все документы проходят проверку в базе данных ГИБДД',
        icon: 'shield',
      },
      { 
        title: 'Оплата при получении', 
        description: 'Вы оплачиваете услуги только после получения документов',
        icon: 'payment',
      },
      { 
        title: 'Поддержка клиентов', 
        description: 'Наши специалисты на связи 24/7 и готовы ответить на все вопросы',
        icon: 'support',
      },
      { 
        title: 'Успешный опыт', 
        description: 'Более 15,000 довольных клиентов по всей России',
        icon: 'users',
      },
    ],
  };

  // SVG icons for the tabs
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'form':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor"/>
          </svg>
        );
      case 'chat':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8 14H6V12H8V14ZM8 11H6V9H8V11ZM8 8H6V6H8V8ZM15 14H10V12H15V14ZM18 11H10V9H18V11ZM18 8H10V6H18V8Z" fill="currentColor"/>
          </svg>
        );
      case 'document':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
          </svg>
        );
      case 'delivery':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z" fill="currentColor"/>
            <path d="M10 6H5V8H10V6Z" fill="currentColor"/>
            <path d="M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z" fill="currentColor"/>
          </svg>
        );
      case 'certificate':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
          </svg>
        );
      case 'clock':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
          </svg>
        );
      case 'categories':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L6.5 11H17.5L12 2Z" fill="currentColor"/>
            <path d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z" fill="currentColor"/>
            <path d="M3 13.5H11V21.5H3V13.5Z" fill="currentColor"/>
          </svg>
        );
      case 'security':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"/>
          </svg>
        );
      case 'shield':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
          </svg>
        );
      case 'payment':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
          </svg>
        );
      case 'support':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12C23 5.93 18.07 1 12 1ZM12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21Z" fill="currentColor"/>
            <path d="M12 17C12.83 17 13.5 16.33 13.5 15.5C13.5 14.67 12.83 14 12 14C11.17 14 10.5 14.67 10.5 15.5C10.5 16.33 11.17 17 12 17Z" fill="currentColor"/>
            <path d="M9 10.5C9 8.57 10.57 7 12.5 7C13.38 7 14.19 7.35 14.77 7.93L16.18 6.52C15.21 5.54 13.91 5 12.5 5C9.46 5 7 7.46 7 10.5H9Z" fill="currentColor"/>
          </svg>
        );
      case 'users':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/prava.jpeg"
              alt="Водительское удостоверение"
              width={500}
              height={350}
              className={styles.image}
            />
            <div className={styles.imageBadge}>
              <span>ГИБДД</span>
              <span>Официально</span>
            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            Купите водительское удостоверение
            <span className={styles.highlight}> по всей России </span>
            без автошколы
          </h2>
          
          <p className={styles.description}>
            Мы предоставляем профессиональные услуги по оформлению водительских удостоверений
            категорий "A", "B" и "C". Гарантируем высокое качество документов и оперативную доставку в
            любой регион России.
          </p>
          
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className={styles.tabContent}>
            <div className={styles.grid}>
              {tabContent[activeTab as keyof typeof tabContent].map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.gridItem} ${isVisible ? styles.fadeIn : ''}`}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={styles.iconContainer}>
                    {getIcon(item.icon)}
                  </div>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.cta}>
            <a
              href="https://t.me/Aleksandr24th"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Связаться с нами в Telegram
              <svg
                className={styles.buttonArrow}
                width="16"
                height="16"
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
            <div className={styles.contacts}>
              <span>или свяжитесь с нами:</span>
              <a href="tel:+79002781851" className={styles.phone}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                    fill="currentColor"
                  />
                </svg>
                +7 900 278‑18‑51
              </a>
              <a href="https://wa.me/79002781851" className={styles.whatsapp}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
