'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './PaymentDelivery.module.css';

export default function PaymentDelivery(){
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
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Оплата и доставка</h1>
            <p className={styles.heroDescription}>
              Мы предлагаем вам быстрый и надежный способ получения водительских прав, 
              обеспечивая комфортный процесс оплаты и доставки.
            </p>
            <div className={styles.heroCta}>
              <button className={styles.primaryButton}>
                Оформить заявку
                <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </button>
              <a href="tel:88001112233" className={styles.secondaryButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                </svg>
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className={styles.section} ref={sectionRef}>
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
          
          {/* Payment Section */}
          <div className={styles.featuresContainer}>
            <div className={`${styles.featureCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className={styles.featureCardHeader}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className={styles.featureTitle}>Оплата после проверки</h2>
              </div>
              
              <p className={styles.featureDescription}>
                Мы понимаем, как важно для клиентов чувствовать уверенность в сделке. 
                Поэтому мы гарантируем прозрачность и честность на каждом этапе сотрудничества.
              </p>
              
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.benefitText}>
                    <strong>Предоплата отсутствует.</strong> Оплата производится только после того, как вы убедитесь в подлинности и легальности ваших водительских прав.
                  </p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.benefitText}>
                    <strong>Возможность проверки.</strong> Вы получаете возможность проверить документ до момента оплаты, что исключает любые риски.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${styles.featureCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.featureCardHeader}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className={styles.featureTitle}>Доставка по всей России</h2>
              </div>
              
              <p className={styles.featureDescription}>
                Ваши готовые водительские права будут доставлены в любой город Российской Федерации. 
                Независимо от региона проживания, мы организуем удобную и быструю доставку.
              </p>
              
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.benefitText}>
                    <strong>Срок доставки</strong> – минимальный, в зависимости от вашего местоположения.
                  </p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.benefitText}>
                    <strong>Выбор способа доставки</strong> по вашему желанию и удобству.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why choose us */}
          <div className={styles.whyUsSection}>
            <h2 className={styles.sectionTitle}>Почему именно мы?</h2>
            
            <div className={styles.advantagesGrid}>
              <div className={`${styles.advantageCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.advantageIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.advantageTitle}>Легальность гарантирована</h3>
                <p className={styles.advantageText}>
                  Мы работаем через официальный орган ГИБДД и вносим данные в реестр.
                </p>
              </div>
              
              <div className={`${styles.advantageCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.advantageIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.advantageTitle}>Оперативность</h3>
                <p className={styles.advantageText}>
                  Оформление прав занимает всего <strong>2 дня</strong>.
                </p>
              </div>
              
              <div className={`${styles.advantageCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className={styles.advantageIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.advantageTitle}>Удобство оплаты</h3>
                <p className={styles.advantageText}>
                  Никаких предоплат — оплата после проверки готового документа.
                </p>
              </div>
              
              <div className={`${styles.advantageCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.advantageIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.advantageTitle}>Широкая география</h3>
                <p className={styles.advantageText}>
                  Доставка доступна во всех городах России.
                </p>
              </div>
            </div>
          </div>
          
          {/* Process Steps */}
          <div className={styles.processSection}>
            <h2 className={styles.sectionTitle}>Как происходит процесс?</h2>
            
            <div className={styles.stepsContainer}>
              <div className={`${styles.stepCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Предоставление документов</h3>
                  <p className={styles.stepText}>
                    Вы предоставляете необходимые документы (паспорт, фото и подпись).
                  </p>
                </div>
              </div>
              
              <div className={`${styles.stepCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Оформление прав</h3>
                  <p className={styles.stepText}>
                    В течение 2 дней мы оформляем водительские права и вносим их в реестр ГИБДД.
                  </p>
                </div>
              </div>
              
              <div className={`${styles.stepCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Проверка и оплата</h3>
                  <p className={styles.stepText}>
                    После проверки качества и легальности документа вы оплачиваете услугу.
                  </p>
                </div>
              </div>
              
              <div className={`${styles.stepCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Доставка</h3>
                  <p className={styles.stepText}>
                    Мы доставляем готовый документ удобным для вас способом.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reliability Guarantee */}
          <div className={styles.reliabilitySection}>
            <div className={styles.reliabilityCard}>
              <div className={styles.reliabilityHeader}>
                <div className={styles.reliabilityIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className={styles.reliabilityTitle}>Гарантия надежности</h2>
              </div>
              
              <p className={styles.reliabilityText}>
                Ваши права будут изготовлены на официальных бланках, соответствующих всем стандартам. 
                Документ пройдет проверку в любой базе ГИБДД, а процесс его оформления и доставки будет 
                максимально простым и комфортным для вас.
              </p>
              
              <button className={styles.ctaButton}>
                Оформить заявку
                <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Связь с нами</h2>
            
            <div className={styles.contactMethods}>
              <div className={`${styles.contactCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.contactTitle}>Форма обратной связи</h3>
                <p className={styles.contactText}>
                  Оставьте свои данные, и мы свяжемся с вами в кратчайшие сроки.
                </p>
                <button className={styles.contactButton}>
                  Оставить заявку
                </button>
              </div>
              
              <div className={`${styles.contactCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.contactTitle}>Телефон</h3>
                <p className={styles.contactText}>
                  Звоните, и наши специалисты ответят на все ваши вопросы.
                </p>
                <a href="tel:88001112233" className={styles.contactButton}>
                  8 (800) 111-22-33
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};