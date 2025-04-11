'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryTemplate.module.css';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface CategoryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  price: string;
  benefits: Benefit[];
  faqs: Faq[];
  steps: Step[];
}

export const CategoryTemplate = ({ 
  data 
}: { 
  data: CategoryData 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('info');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Выбор иконки для преимуществ
  const getBenefitIcon = (icon: string) => {
    switch (icon) {
      case 'check':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
          </svg>
        );
      case 'time':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
          </svg>
        );
      case 'security':
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

  return (
    <div className={styles.pageContainer} ref={sectionRef}>
      {/* Хедер страницы */}
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <div className={`${styles.headerContent} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.headerInfo}>
              <h1 className={styles.pageTitle}>{data.title}</h1>
              <p className={styles.pageSubtitle}>{data.subtitle}</p>
              
              <div className={styles.headerFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <span>Стоимость</span>
                    <strong>{data.price}</strong>
                  </div>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <span>Срок изготовления</span>
                    <strong>2-3 дня</strong>
                  </div>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.91 10.08L6.5 11.5L11 16L17.5 9.5L16.09 8.08L11 13.17L7.91 10.08Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <span>Гарантия</span>
                    <strong>Официально</strong>
                  </div>
                </div>
              </div>
              
              <div className={styles.headerButtons}>
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
                      className={styles.whatsappButtonIcon}
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
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
            
            <div className={styles.headerImageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={data.imagePath}
                  alt={data.title}
                  width={500}
                  height={350}
                  className={styles.headerImage}
                />
                <div className={styles.imageBadge}>
                  Категория<br/>
                  <span>{data.title.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Навигация по контенту */}
      <div className={styles.contentNav}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'info' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Информация
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'process' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('process')}
            >
              Процесс получения
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'faq' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              Вопрос-ответ
            </button>
          </div>
        </div>
      </div>
      
      {/* Содержимое */}
      <div className={styles.contentSection}>
        <div className={styles.container}>
          {/* Инфо вкладка */}
          {activeTab === 'info' && (
            <div className={styles.infoContent}>
              <div className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>О категории {data.title.toUpperCase()}</h2>
                <div className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
              
              <div className={styles.benefitsSection}>
                <h2 className={styles.sectionTitle}>Преимущества оформления у нас</h2>
                <div className={styles.benefitsGrid}>
                  {data.benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`${styles.benefitCard} ${isVisible ? styles.fadeIn : ''}`}
                      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                    >
                      <div className={styles.benefitIcon}>
                        {getBenefitIcon(benefit.icon)}
                      </div>
                      <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                      <p className={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                  <h3 className={styles.ctaTitle}>Получите права категории {data.title.toUpperCase()} прямо сейчас</h3>
                  <p className={styles.ctaText}>
                    Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации и оформления.
                  </p>
                  <button className={styles.ctaButton}>
                    Оформить права
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Процесс вкладка */}
          {activeTab === 'process' && (
            <div className={styles.processContent}>
              <h2 className={styles.sectionTitle}>Как получить права категории {data.title.toUpperCase()}</h2>
              <div className={styles.processSteps}>
                {data.steps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`${styles.processStep} ${isVisible ? styles.fadeIn : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={styles.stepNumber}>{step.number}</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                    {index < data.steps.length - 1 && (
                      <div className={styles.stepConnector}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className={styles.processNote}>
                <p>Мы оформляем права категории {data.id.toUpperCase()} в кратчайшие сроки с внесением в базу ГИБДД. Вам не придется сдавать экзамены или проходить обучение в автошколе.</p>
              </div>
            </div>
          )}
          
          {/* FAQ вкладка */}
          {activeTab === 'faq' && (
            <div className={styles.faqContent}>
              <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
              <div className={styles.faqList}>
                {data.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''} ${isVisible ? styles.fadeIn : ''}`}
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className={styles.faqQuestion}>
                      <h3>{faq.question}</h3>
                      <div className={styles.faqToggle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
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
          )}
        </div>
      </div>
    </div>
  );
};