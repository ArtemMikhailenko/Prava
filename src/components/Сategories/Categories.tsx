'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Categories.module.css';

// Информация о категориях прав
const categoryData = [
  {
    id: 'a',
    title: 'Права категории A',
    description: 'Мотоциклы и мототранспортные средства',
    icon: 'motorcycle',
    image: '/images/a1.webp',
    benefits: ['Быстрое оформление', 'Официальная регистрация', 'Внесение в базу ГИБДД'],
    price: 'от 20 000 ₽',
  },
  {
    id: 'b',
    title: 'Права категории B',
    description: 'Легковые автомобили и малотоннажные грузовики',
    icon: 'car',
    image: '/images/b1.jpeg',
    benefits: ['Доставка по всей России', 'Оплата при получении', 'Проверка через сервисы ГИБДД'],
    price: 'от 22 000 ₽',
  },
  {
    id: 'c',
    title: 'Права категории C',
    description: 'Грузовые автомобили свыше 3.5 тонн',
    icon: 'truck',
    image: '/images/c1.webp',
    benefits: ['Все необходимые допуски', 'Возможность трудоустройства', 'Быстрое изготовление'],
    price: 'от 25 000 ₽',
  },
  {
    id: 'd',
    title: 'Права категории D',
    description: 'Автобусы для перевозки пассажиров',
    icon: 'bus',
    image: '/images/d1.png',
    benefits: ['Комплект необходимых документов', 'Индивидуальный подход', 'Юридическая поддержка'],
    price: 'от 27 000 ₽',
  },
  {
    id: 'e',
    title: 'Права категории E',
    description: 'Транспортные средства с прицепом',
    icon: 'truck-trailer',
    image: '/images/e1.webp',
    benefits: ['Для профессиональных водителей', 'Полностью легальный документ', 'Занесение в реестр'],
    price: 'от 26 000 ₽',
  },
  {
    id: 'm',
    title: 'Права категории M',
    description: 'Мопеды и легкие квадрициклы',
    icon: 'scooter',
    image: '/images/m1.webp',
    benefits: ['Ускоренная процедура', 'Гарантия подлинности', 'Помощь в оформлении'],
    price: 'от 18 000 ₽',
  },
];

// Компонент иконок для категорий
const CategoryIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'motorcycle':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.44 9.03L15.41 5H11V7H14.59L16.59 9H8.54C7.53 9 6.59 9.33 5.83 9.88L8.91 13H15.29L16.97 10.96C17.61 10.35 18.62 10.35 19.26 10.96C19.5 11.2 19.63 11.53 19.63 11.87C19.63 12.21 19.5 12.54 19.26 12.78L17.41 15H5.12C4.5 15 4 15.5 4 16.13V16.21C4 17.19 4.39 18.13 5.08 18.83L9 23H15L17.31 20.41C17.72 19.94 18.2 19.54 18.72 19.24L20.74 17.97C21.43 17.55 21.59 16.63 21.15 15.98C20.71 15.33 19.77 15.16 19.13 15.58L17.85 16.36C17.42 16.61 17.06 17 16.8 17.41L15.91 19H14.5L19.25 14.25C19.66 13.84 19.92 13.32 20 12.78C20.08 12.24 20 11.69 19.75 11.19C19.4 10.5 18.96 9.93 18.43 9.44C18.76 9.21 19.13 9.1 19.5 9.1C19.76 9.1 20.04 9.16 20.24 9.29C20.44 9.42 20.72 9.38 20.88 9.22C21.04 9.06 21.08 8.78 20.95 8.58C20.82 8.38 20.76 8.1 20.76 7.84C20.76 7.14 21.31 6.59 22 6.59C22.28 6.59 22.5 6.37 22.5 6.09C22.5 5.81 22.28 5.59 22 5.59C20.76 5.59 19.76 6.59 19.76 7.83C19.76 8.2 19.87 8.57 20.09 8.89C19.68 8.75 19.27 8.67 18.85 8.67C18.41 8.67 17.98 8.76 17.58 8.93L15.59 7H18V5H15C14.7348 5 14.4804 5.10536 14.2929 5.29289C14.1054 5.48043 14 5.73478 14 6H13.5V2H11.5V6H10.9C10.9 5.73478 10.7946 5.48043 10.6071 5.29289C10.4196 5.10536 10.1652 5 9.9 5H8V7H9.9L13.5 10.62V13H10.5V11H3.5V13H8.5V15H9.75L7.5 12.62V11H2V15.12C2 17.37 3.88 19.25 6.13 19.25C7.71 19.25 9.09 18.28 9.72 16.91L11.5 19H13V16H8.01C8.01 16.55 7.56 17 7.01 17C6.46 17 6.01 16.55 6.01 16C6.01 15.45 6.46 15 7.01 15H8.01L10.89 11H10.5V9.5H13.4L11.5 7.63V6H12.5V9.5H15.8L14.23 11H12V14.5H14.21L13.6 15.5H10.5V19H14V23H16V19.5H14.5L17.85 15.53C18.18 15.28 18.54 15.07 18.92 14.85L21.11 13.67C21.95 13.19 22.11 12.62 22.5 12C22.87 11.2 22.89 11.2 22.5 10.5C22.1 9.77 21.5 9.3 20.62 9.13C20.24 9.04 19.85 9 19.44 9.03Z" fill="currentColor"/>
        </svg>
      );
    case 'car':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="currentColor"/>
        </svg>
      );
    case 'truck':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4V3C18 2.45 17.55 2 17 2H3C2.45 2 2 2.45 2 3V15C2 15.55 2.45 16 3 16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14C14 17.66 15.34 19 17 19C18.66 19 20 17.66 20 16H21C21.55 16 22 15.55 22 15V8L18 4ZM7 17C6.45 17 6 16.55 6 16C6 15.45 6.45 15 7 15C7.55 15 8 15.45 8 16C8 16.55 7.55 17 7 17ZM17 17C16.45 17 16 16.55 16 16C16 15.45 16.45 15 17 15C17.55 15 18 15.45 18 16C18 16.55 17.55 17 17 17ZM4 14V4H16V8H17.5L20 10.5V14H4Z" fill="currentColor"/>
        </svg>
      );
    case 'bus':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16C4 16.88 4.39 17.67 5 18.22V20C5 20.55 5.45 21 6 21H7C7.55 21 8 20.55 8 20V19H16V20C16 20.55 16.45 21 17 21H18C18.55 21 19 20.55 19 20V18.22C19.61 17.67 20 16.88 20 16V6C20 2.5 16.42 2 12 2C7.58 2 4 2.5 4 6V16ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17ZM18 11H6V6H18V11Z" fill="currentColor"/>
        </svg>
      );
    case 'truck-trailer':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8H17V4H1V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" fill="currentColor"/>
        </svg>
      );
    case 'scooter':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 14.5L5.5 13L3 15L5.5 19L8 17V14.5H7.5ZM9 6H5.82C5.4 6 5.01 6.21 4.79 6.56L4.05 7.67C3.88 7.93 4.05 8.25 4.36 8.25H6L9 8.75V17H11V14H14C14.55 14 15 13.55 15 13V10C15 9.45 14.55 9 14 9H11V6H9ZM19 15C17.34 15 16 16.34 16 18C16 19.66 17.34 21 19 21C20.66 21 22 19.66 22 18C22 16.34 20.66 15 19 15ZM19 19C18.45 19 18 18.55 18 18C18 17.45 18.45 17 19 17C19.55 17 20 17.45 20 18C20 18.55 19.55 19 19 19ZM7 15C5.34 15 4 16.34 4 18C4 19.66 5.34 21 7 21C8.66 21 10 19.66 10 18C10 16.34 8.66 15 7 15ZM7 19C6.45 19 6 18.55 6 18C6 17.45 6.45 17 7 17C7.55 17 8 17.45 8 18C8 18.55 7.55 19 7 19Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

export const Categories = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
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

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <div className={styles.decorationLine}></div>
          <h2 className={styles.title}>Права на авто по всей России</h2>
          <div className={styles.decorationLine}></div>
        </div>
        
        <p className={styles.description}>
          Выберите необходимую категорию водительских прав. Мы оформляем все типы удостоверений
          с официальной регистрацией в базе ГИБДД и гарантией подлинности.
        </p>
        
        <div className={styles.tabs}>
          {categoryData.map((category) => (
            <button
              key={category.id}
              className={`${styles.tabButton} ${activeTab === category.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(category.id === activeTab ? null : category.id)}
            >
              <div className={styles.tabContent}>
                <div className={styles.tabIcon}>
                  <CategoryIcon type={category.icon} />
                </div>
                <span>Категория {category.title.toUpperCase()}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className={styles.cardsContainer}>
          {categoryData.map((category, index) => (
            <div 
              key={category.id}
              className={`${styles.card} ${isVisible ? styles.fadeIn : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`${styles.cardInner} ${activeTab === category.id ? styles.activeCard : ''}`}
              >
                <div className={styles.cardImageContainer}>
                  <div className={styles.cardImageOverlay}></div>
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardCategory}>
                    <span className={styles.categoryLabel}>Категория</span>
                    <span className={styles.categoryName}>{category.title.toUpperCase()}</span>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>
                  
                  <div className={styles.cardBenefits}>
                    {category.benefits.map((benefit, i) => (
                      <div key={i} className={styles.benefitItem}>
                        <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.priceTag}>
                      <span className={styles.priceLabel}>Стоимость</span>
                      <span className={styles.price}>{category.price}</span>
                    </div>
                    
                    <Link href={`/prava/${category.id}`} className={styles.detailsButton}>
                      <span>Подробнее</span>
                      <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};