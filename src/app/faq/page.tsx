'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './FAQPage.module.css';
import { RegionsGrid } from '@/components/FAQPage/RegionsGrid/RegionsGrid';
import { ProcessSteps } from '@/components/FAQPage/ProcessSteps/ProcessSteps';
import { FAQAccordion } from '@/components/FAQPage/FAQAccordion/FAQAccordion';

export default function FAQPage () {
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

  // FAQ data
  const faqItems = [
    {
      question: 'Когда и как оплачивать права?',
      answer: 'Оплата производится только после получения и проверки документов. Мы не требуем предоплаты. Вы можете оплатить удобным для вас способом: наличными при получении или безналичным переводом после проверки документов.',
    },
    {
      question: 'Меня лишили водительского, Можно ли как то мне его вернуть?',
      answer: 'Да, мы можем помочь с восстановлением водительских прав после лишения. Наши специалисты проконсультируют вас по процедуре восстановления и помогут оформить все необходимые документы. Свяжитесь с нами для получения детальной информации по вашему случаю.',
    },
    {
      question: 'Вы точно делаете легальные официальные водительские права?',
      answer: 'Да, все оформляемые нами водительские удостоверения являются официальными документами с внесением в базу данных ГИБДД. Документы проходят любые проверки и имеют все необходимые элементы защиты.',
    },
    {
      question: 'Выдаёте ли вы свидетельство об окончании автошколы?',
      answer: 'Да, при необходимости мы оформляем полный комплект документов, включая свидетельство об окончании автошколы. Все документы оформляются официально и вносятся в соответствующие базы данных.',
    },
    {
      question: 'В каких городах вы работаете?',
      answer: 'Мы работаем по всей России. Наша компания осуществляет доставку водительских удостоверений во все регионы Российской Федерации: от Калининграда до Владивостока. Полный список регионов вы можете увидеть ниже.',
    },
  ];

  // Process steps data
  const processSteps = [
    {
      number: '01',
      title: 'Оставляете заявку',
      description: 'Мы предлагаем два удобных варианта: вы можете оставить заявку на нашем сайте или связаться с нами по телефону 8-800-777-06-53',
      image: '/images/hero-2.png',
    },
    {
      number: '02',
      title: 'Оформляем ваши права',
      description: 'Без предоплаты. Быстро и официально оформим документы, и внесём информацию в базы ГИБДД.',
      image: '/images/hero-2.png',
    },
    {
      number: '03',
      title: 'Доставка ваших прав',
      description: 'Мы отправляем ваши права на проверку по email, а оригиналы доставляем туда, где и когда вам удобно.',
      image: '/images/hero-2.png',
    },
    {
      number: '04',
      title: 'Оплата документов',
      description: 'Вы проверяете документы и оплачиваете удобным для вас способом. Мы делаем всё для вашего комфорта.',
      image: '/images/hero-2.png',
    },
  ];

  // Regions data - first half
  const regionsFirstHalf = [
    'Россия', 'Республика Хакасия', 'Тюменская область', 'Республика Чувашия',
    'Республика Марий Эл', 'Республика Башкортостан', 'Московская область', 'Краснодарский край',
    'Калужская область', 'Рязанская область', 'Республика Татарстан', 'Республика Адыгея',
    'Республика Калмыкия', 'Алтайский край', 'Ростовская область', 'Оренбургская область',
    'Астраханская область', 'Республика Алтай', 'Ленинградская область', 'Самарская область',
    'Свердловская область', 'Владимирская область', 'Омская область', 'Орловская область',
    'Республика Крым', 'Ставропольский край', 'Белгородская область', 'Волгоградская область',
    'Тульская область', 'Брянская область', 'Республика Удмуртия', 'Псковская область',
    'Нижегородская область', 'Иркутская область', 'Вологодская область', 'Воронежская область',
    'Костромская область', 'Ивановская область', 'Мурманская область', 'Республика Чечня',
    'Тамбовская область', 'Челябинская область', 'Ульяновская область', 'Архангельская область',
    'Ярославская область', 'Республика Карачаево-Черкесия', 'Республика Бурятия', 'Саратовская область',
  ];

  // Regions data - second half
  const regionsSecondHalf = [
    'Республика Кабардино-Балкария', 'Кировская область', 'Пензенская область', 'Красноярский край',
    'Калининградская область', 'Республика Мордовия', 'Тверская область', 'Липецкая область',
    'Новосибирская область', 'Смоленская область', 'Томская область', 'Новгородская область',
    'Пермский край', 'Республика Карелия', 'Курганская область', 'Курская область',
    'Еврейская автономная область', 'Республика Ингушетия', 'Сахалинская область', 'Республика Северная Осетия-Алания',
    'Приморский край', 'Кемеровская область', 'Республика Дагестан', 'Камчатский край',
    'Ханты-Мансийский автономный округ', 'Хабаровский край', 'Республика Тыва', 'Магаданская область',
    'Ямало-Ненецкий автономный округ', 'Республика Коми', 'Амурская область', 'Забайкальский край',
    'Якутия'
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Часто задаваемые вопросы</h1>
            <p className={styles.heroDescription}>
              Здесь вы найдете ответы на самые популярные вопросы о получении водительских прав. 
              Если у вас останутся вопросы, вы всегда можете связаться с нами.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.section} ref={sectionRef}>
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
          
          {/* FAQ Accordion Component */}
          <div className={styles.faqSection}>
            <FAQAccordion items={faqItems} isVisible={isVisible} />
          </div>
          
          {/* Process Steps Component */}
          <div className={styles.processSection}>
            <h2 className={styles.sectionTitle}>Как мы работаем</h2>
            <ProcessSteps steps={processSteps} isVisible={isVisible} />
          </div>
          
          {/* Regions Grid Component */}
          <div className={styles.regionsSection}>
            <h2 className={styles.sectionTitle}>Регионы доставки водительских удостоверений</h2>
            
            <div className={styles.regionsGridContainer}>
              <RegionsGrid regions={regionsFirstHalf} isVisible={isVisible} columnsCount={4} />
              <RegionsGrid regions={regionsSecondHalf} isVisible={isVisible} columnsCount={4} />
            </div>
          </div>
          
          {/* Contact CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>Остались вопросы?</h2>
              <p className={styles.ctaDescription}>
                Свяжитесь с нами, и наши специалисты ответят на все ваши вопросы и помогут оформить 
                водительские права максимально быстро и удобно для вас.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>
                  Оставить заявку
                  <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                  </svg>
                </button>
                <a href="tel:88007770653" className={styles.secondaryButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                  </svg>
                  8-800-777-06-53
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};