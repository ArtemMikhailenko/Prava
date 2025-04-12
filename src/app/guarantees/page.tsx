'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './Guarantees.module.css';

export default function Guarantees (){
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
            <h1 className={styles.heroTitle}>Наши гарантии</h1>
            <p className={styles.heroDescription}>
              Мы понимаем, насколько важно для вас получить водительское удостоверение, которое полностью 
              соответствует всем требованиям законодательства. Поэтому наша компания предлагает только легальные 
              и проверенные решения.
            </p>
            <div className={styles.heroCta}>
                {/* Кнопка «Связаться в Telegram» */}
                <a
                  href="https://t.me/Aleksandr24th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  Связаться с нами
                  <svg
                    className={styles.buttonIcon}
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

                {/* Кнопка «Написать в WhatsApp» */}
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
                  Написать в WhatsApp
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className={styles.section} ref={sectionRef}>
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
          
          {/* Official documents section */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Легальность и официальность</h2>
            </div>
            
            <p className={styles.cardText}>
              У нас вы можете купить права с официальным внесением в реестр ГИБДД, 
              что позволяет нам гарантировать 100% законность предоставляемых услуг. Все водительские удостоверения,
              оформленные через нас, полностью соответствуют требованиям законодательства.
            </p>
            
            <div className={styles.featureBox}>
              <h3 className={styles.featureBoxTitle}>Все водительские удостоверения:</h3>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.featureText}>
                    <strong>Имеют официальные бланки</strong> с необходимыми элементами защиты
                  </p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.featureText}>
                    <strong>Вносятся в реестр ГИБДД</strong> и проходят любые проверки
                  </p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.featureText}>
                    <strong>Соответствуют всем стандартам</strong> и имеют необходимые подписи и печати
                  </p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.featureText}>
                    <strong>Обладают полной юридической силой</strong> на территории РФ
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guarantees grid */}
          <h2 className={styles.sectionTitle}>Почему стоит выбрать нас</h2>
          
          <div className={styles.guaranteesGrid}>
            <div className={`${styles.guaranteeCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className={styles.guaranteeIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className={styles.guaranteeTitle}>Легальность</h3>
              <p className={styles.guaranteeText}>100% официальное внесение в реестр ГИБДД. Наши документы проходят любые проверки.</p>
            </div>
            
            <div className={`${styles.guaranteeCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.guaranteeIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className={styles.guaranteeTitle}>Скорость</h3>
              <p className={styles.guaranteeText}>Оформление водительских прав занимает всего 2 дня без лишней волокиты.</p>
            </div>
            
            <div className={`${styles.guaranteeCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.guaranteeIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className={styles.guaranteeTitle}>Без предоплаты</h3>
              <p className={styles.guaranteeText}>Оплата только после получения и проверки готовых документов.</p>
            </div>
            
            <div className={`${styles.guaranteeCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.guaranteeIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className={styles.guaranteeTitle}>Доставка по России</h3>
              <p className={styles.guaranteeText}>Доставляем права в любую точку России удобным для вас способом.</p>
            </div>
            
            <div className={`${styles.guaranteeCard} ${isVisible ? styles.fadeIn : ''}`} style={{ animationDelay: '0.5s' }}>
              <div className={styles.guaranteeIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className={styles.guaranteeTitle}>Конфиденциальность</h3>
              <p className={styles.guaranteeText}>Полная защита ваших персональных данных. Никакой утечки информации.</p>
            </div>
          </div>
          
          {/* Process steps */}
          <div className={styles.processSection}>
            <h2 className={styles.processTitle}>Как мы работаем</h2>
            
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Оформление заявки</h3>
                  <p className={styles.timelineText}>
                    Вы оставляете заявку на сайте или связываетесь с нами по телефону. 
                    Наш специалист уточняет все необходимые детали.
                  </p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Подготовка документов</h3>
                  <p className={styles.timelineText}>
                    Мы оформляем ваши документы и вносим все необходимые данные в реестр ГИБДД. 
                    Весь процесс занимает всего 2 дня.
                  </p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Доставка и оплата</h3>
                  <p className={styles.timelineText}>
                    Готовые документы доставляются в удобное для вас место. Вы проверяете качество и 
                    только потом оплачиваете услуги.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact section */}
          <div className={styles.contactSection}>
            <div className={styles.contactCard}>
              <h2 className={styles.contactTitle}>Связаться с нами</h2>
              <p className={styles.contactText}>
                Для получения дополнительной информации или оформления заявки 
                свяжитесь с нами удобным способом
              </p>
              
              <div className={styles.contactMethods}>
  {/* Telegram */}
  <a
    href="https://t.me/Aleksandr24th"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactMethod}
  >
    <div className={styles.contactIcon}>
      {/* Иконка Telegram */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10
                 s10-4.48 10-10S17.52 2 12 2zm4.14 7.3l-1.4 6.6c-.1.45-.36.56-.73.35l-2.03-1.5
                 -.98.94c-.1.1-.18.18-.36.18l.13-1.86 3.38-3.06c.15-.13-.03-.2-.23-.07l-4.18 2.62
                 -1.8-.56c-.39-.12-.4-.39.08-.58l7.05-2.72c.33-.12.62.07.51.57z"
              fill="currentColor"/>
      </svg>
    </div>
    <div className={styles.contactInfo}>
      <span className={styles.contactLabel}>Telegram</span>
      <span className={styles.contactValue}>@Aleksandr24th</span>
    </div>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/79002781851"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactMethod}
  >
    <div className={styles.contactIcon}>
      {/* Иконка WhatsApp */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.937C0 5.347
                 5.347 0 11.937 0c3.188 0 6.176 1.244 8.426 3.498A11.866
                 11.866 0 0 1 23.86 11.937c0 6.59-5.347 11.937-11.937
                 11.937-2.004 0-3.98-.5-5.731-1.45L.057 24zm6.503-3.011l.356.213
                 c1.577 1.011 3.384 1.548 5.235 1.548 5.454 0 9.891-4.437
                 9.891-9.891 0-2.645-1.03-5.127-2.897-6.994a9.808 9.808
                 0 0 0-6.994-2.897c-5.454 0-9.891 4.436-9.891
                 9.891 0 1.964.571 3.872 1.657 5.516l.258.388-1.1
                 4.016 3.485-.79zm14.017-6.22c-.072-.118-.26-.19-.546-.332
                 -.285-.143-1.686-.83-1.944-.926-.26-.094-.45-.142-.641.143
                 -.19.286-.737.926-.9 1.116-.166.19-.325.214-.61.071
                 -.287-.142-1.2-.44-2.284-1.405-.845-.753-1.407-1.673
                 -1.572-1.959-.166-.285-.017-.44.124-.582.128-.128.285
                 -.332.427-.499.143-.166.19-.285.285-.475.095-.19.048
                 -.357-.024-.499-.071-.143-.64-1.545-.88-2.12
                 -.232-.558-.466-.481-.64-.481-.166 0-.356-.024
                 -.546-.024a1.071 1.071 0 0 0-.784.357c-.261.285
                 -.998.976-.998 2.378 0 1.401 1.021 2.755 1.165
                 2.945.14.19 2.006 3.066 4.863 4.297 2.857
                 1.23 2.857.821 3.374.772.516-.05 1.665-.68
                 1.899-1.34.234-.66.234-1.21.166-1.33v.002z"
              fill="currentColor"/>
      </svg>
    </div>
    <div className={styles.contactInfo}>
      <span className={styles.contactLabel}>WhatsApp</span>
      <span className={styles.contactValue}>+7 900 278‑18‑51</span>
    </div>
  </a>

  {/* Адрес */}
  <div className={styles.contactMethod}>
    <div className={styles.contactIcon}>
      {/* Иконка адреса */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12
                 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12
                 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5
                 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62
                 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill="currentColor"/>
      </svg>
    </div>
    <div className={styles.contactInfo}>
      <span className={styles.contactLabel}>Адрес</span>
      <span className={styles.contactValue}>Работаем по всей России</span>
    </div>
  </div>
</div>

{/* Кнопка «Связаться в Telegram» */}
<a
  href="https://t.me/Aleksandr24th"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaButton}
>
  Связаться в Telegram
  <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59
             18.59L12 20L20 12L12 4Z" fill="currentColor"/>
  </svg>
</a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};