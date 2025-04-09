'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './OtherServices.module.css';

// Данные об услугах
const servicesData = [
  {
    id: 1,
    title: 'Дубликаты прав',
    price: '15 000 руб.',
    description: 'Восстановление утерянных или поврежденных водительских удостоверений с сохранением всех данных и срока действия.',
    icon: 'copy',
  },
  {
    id: 2,
    title: 'Лишенным прав',
    price: 'от 5 000 руб.',
    description: 'Помощь в восстановлении водительских прав после лишения. Юридическая консультация и сопровождение.',
    icon: 'restore',
  },
  {
    id: 3,
    title: 'Медсправка для прав',
    price: '3 000 руб.',
    description: 'Оформление медицинской справки для получения или продления водительского удостоверения всех категорий.',
    icon: 'medical',
  },
  {
    id: 4,
    title: 'Права для иностранцев',
    price: '30 000 руб.',
    description: 'Оформление российских и международных водительских удостоверений для иностранных граждан.',
    icon: 'international',
  },
  {
    id: 5,
    title: 'Без обучения и экзаменов',
    price: 'от 30 000 руб.',
    description: 'Получение водительского удостоверения без необходимости прохождения обучения в автошколе и сдачи экзаменов.',
    icon: 'fast',
  },
];

// Компонент иконок для услуг
const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'copy':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
        </svg>
      );
    case 'restore':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" fill="currentColor"/>
        </svg>
      );
    case 'medical':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z" fill="currentColor"/>
        </svg>
      );
    case 'international':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" fill="currentColor"/>
        </svg>
      );
    case 'fast':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.38 8.57L19.15 10.42C19.68 11.24 20 12.18 20 13.22C20 14.95 19.22 16.46 17.96 17.5L16.5 15.5L15.04 15.84C14.68 15.94 14.37 16.15 14.16 16.45C13.95 16.75 13.85 17.11 13.89 17.5H11.11C11.13 17.34 11.16 17.18 11.21 17C11.58 16 12.47 15.44 13.5 15.5L15.08 15.18L18.5 9.5L12.82 4.84C12.27 4.33 11.55 4 10.8 4H8V2H10.8C12.06 2 13.26 2.5 14.15 3.36L20.28 9.22C20.35 9.29 20.42 9.36 20.5 9.44C20.45 9.13 20.38 8.84 20.28 8.57C20.25 8.56 20.38 8.57 20.38 8.57ZM15 10L14 8L7 12L10 16L13.5 13.5L15 10ZM3.33 16.37C3.12 15.61 3 14.83 3 14C3 9.58 6.58 6 11 6C11.58 6 12.14 6.08 12.69 6.21L11.09 8.05C10.1 8.22 9.17 8.59 8.34 9.11L2.56 13.84C2.69 14.7 2.96 15.5 3.33 16.37ZM4.01 18.9C5.11 20.17 6.63 21.08 8.35 21.57L8.32 20.12C7.85 19.73 7.41 19.3 7 18.83L4.01 18.9ZM11 22C10.42 22 9.85 21.93 9.3 21.8L8.96 21.73L9.05 20.14C10.33 20.43 11.68 20.46 13 20.23V21.75C12.35 21.91 11.69 22 11 22ZM15.07 20.33L14.7 18.88C15.56 18.26 16.28 17.44 16.79 16.5H18.35C17.72 17.95 16.54 19.13 15.07 20.33Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

export const OtherServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
  
  // Функция для обработки клика по строке таблицы
  const handleRowClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>Другие услуги</h2>
        
        <div className={styles.tableWrapper}>
          <div className={styles.tableHeader}>
            <div className={styles.tableCol1}>#</div>
            <div className={styles.tableCol2}>Услуга</div>
            <div className={styles.tableCol3}>Цена</div>
            <div className={styles.tableCol4}>Подробнее</div>
          </div>
          
          <div className={styles.tableBody}>
            {servicesData.map((service, index) => (
              <div key={service.id} className={styles.serviceRowContainer}>
                <div 
                  className={`${styles.serviceRow} ${expandedIndex === index ? styles.expanded : ''} ${isVisible ? styles.fadeIn : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleRowClick(index)}
                  tabIndex={0}
                >
                  <div className={styles.tableCol1}>
                    <div className={styles.serviceNumber}>{service.id}</div>
                  </div>
                  <div className={styles.tableCol2}>
                    <div className={styles.serviceTitleContainer}>
                      <div className={styles.serviceIcon}>
                        <ServiceIcon type={service.icon} />
                      </div>
                      <span className={styles.serviceTitle}>{service.title}</span>
                    </div>
                  </div>
                  <div className={styles.tableCol3}>
                    <div className={styles.servicePrice}>{service.price}</div>
                  </div>
                  <div className={styles.tableCol4}>
                    <button className={styles.detailsButton}>
                      Подробнее
                      <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Развернутая информация об услуге */}
                <div 
                  className={`${styles.expandedInfo} ${expandedIndex === index ? styles.showInfo : ''}`}
                >
                  <div className={styles.expandedContent}>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <div className={styles.serviceActions}>
                      <button className={styles.primaryButton}>
                        Оформить заявку
                      </button>
                      <button className={styles.secondaryButton}>
                        Получить консультацию
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};