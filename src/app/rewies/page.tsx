'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

// Моковые данные для отзывов
const videoReviews = [
  {
    id: 1,
    name: 'Александр П.',
    location: 'Москва',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744494464/video1_o17fk7.mp4',
    category: 'Категория B',
    date: '15.03.2025',
    text: 'Получил права категории B без лишних хлопот. Все быстро и качественно, буквально за неделю. Документы прошли все проверки, никаких проблем!'
  },
  {
    id: 2,
    name: 'Ирина К.',
    location: 'Санкт-Петербург',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744493167/video2_xsizcf.mp4',
    category: 'Категория A',
    date: '02.04.2025',
    text: 'Обратилась за оформлением прав категории А. Всё сделали оперативно, через 3 дня права были уже у меня. Очень довольна сервисом и отношением к клиентам!'
  },
  {
    id: 3,
    name: 'Михаил С.',
    location: 'Екатеринбург',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744493594/video3_vm10gg.mp4',
    category: 'Категория C',
    date: '10.02.2025',
    text: 'Нужны были права категории C срочно. Обратился сюда по совету друга и не пожалел. Сервис на высоте, консультация подробная, а главное - результат отличный!'
  },
  {
    id: 4,
    name: 'Елена В.',
    location: 'Казань',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744495141/video4_ozlni0.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  },
  {
    id: 5,
    name: 'Елена В.',
    location: 'Казань',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744493383/video5_fckbh9.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  },
  {
    id: 6,
    name: 'Елена В.',
    location: 'Казань',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744494201/video6_obpcur.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  },
  {
    id: 7,
    name: 'Елена В.',
    location: 'Казань',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744494157/video7_a0tlwj.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  },
  {
    id: 8,
    name: 'Елена В.',
    location: 'Казань',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744493208/video8_yosn6t.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  },
  {
    id: 9,
    name: 'Елена В.',
    location: 'Казань',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744492719/video9_fdmjsa.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  },
  {
    id: 10,
    name: 'Елена В.',
    location: 'Херсон',
    thumbnail: '/images/hero-2.png',
    videoUrl: 'https://res.cloudinary.com/db73uxuw6/video/upload/v1744493009/video10_fjltxk.mp4',
    category: 'Права на яхту',
    date: '05.03.2025',
    text: 'Оформила права на управление яхтой. Менеджеры были очень внимательны, объяснили все нюансы. Документы оформили быстро и качественно. Рекомендую всем!'
  }
  
];

const audioReviews = [
  {
    id: 1,
    name: 'Дмитрий Н.',
    location: 'Сочи',
    audioUrl: 'https://example.com/audio1.mp3',
    category: 'Права на погрузчик',
    date: '20.03.2025',
    text: 'Получил удостоверение на погрузчик всего за 4 дня. Очень доволен сервисом. Документы прошли все проверки на работе, руководство приняло без вопросов.',
    duration: 120 // длительность в секундах
  },
  {
    id: 2,
    name: 'Анна П.',
    location: 'Новосибирск',
    audioUrl: 'https://example.com/audio2.mp3',
    category: 'Категория B',
    date: '12.03.2025',
    text: 'Очень благодарна за помощь в оформлении прав категории B. Всё быстро, просто и без лишних вопросов. Теперь могу спокойно ездить за рулем!',
    duration: 90 // длительность в секундах
  },
  {
    id: 3,
    name: 'Сергей В.',
    location: 'Краснодар',
    audioUrl: 'https://example.com/audio3.mp3',
    category: 'Дубликат прав',
    date: '01.04.2025',
    text: 'Потерял водительское удостоверение и срочно понадобилась замена. Обратился сюда, и уже через 2 дня получил новые права. Сервис на высшем уровне!',
    duration: 150 // длительность в секундах
  }
];

const textReviews = [
  {
    id: 1,
    name: 'Ольга М.',
    location: 'Самара',
    category: 'Категория D',
    date: '15.02.2025',
    text: 'Всю жизнь мечтала водить автобус, но боялась длительного обучения. Благодаря вашей компании получила права категории D быстро и без стресса. Очень благодарна!',
    rating: 5
  },
  {
    id: 2,
    name: 'Антон К.',
    location: 'Нижний Новгород',
    category: 'Права на лодку',
    date: '10.03.2025',
    text: 'Оформил права на лодку. Очень понравился профессиональный подход. Менеджер подробно объяснил все нюансы, а курьер доставил документы прямо домой.',
    rating: 5
  },
  {
    id: 3,
    name: 'Мария Т.',
    location: 'Уфа',
    category: 'Категория А',
    date: '05.04.2025',
    text: 'Долго не решалась оформить права на мотоцикл, но подруга посоветовала вашу компанию. Все прошло гладко, документы оформили быстро. Очень довольна!',
    rating: 4
  },
  {
    id: 4,
    name: 'Павел Д.',
    location: 'Красноярск',
    category: 'Права на трактор',
    date: '01.03.2025',
    text: 'Переехал в деревню и понадобились права на трактор. Обратился в компанию и не пожалел. Сделали все очень быстро и качественно, никаких проблем!',
    rating: 5
  },
  {
    id: 5,
    name: 'Наталья С.',
    location: 'Воронеж',
    category: 'Категория B',
    date: '22.02.2025',
    text: 'Спасибо за оперативность! Обратилась к вам по рекомендации знакомых и получила права категории B всего за 3 дня. Очень удобно и без лишних хлопот.',
    rating: 5
  },
  {
    id: 6,
    name: 'Игорь Л.',
    location: 'Тюмень',
    category: 'Права на аквабайк',
    date: '18.03.2025',
    text: 'Оформил права на аквабайк перед отпуском. Все сделали в кратчайшие сроки, а главное - качественно. Документы прошли проверку на курорте без проблем.',
    rating: 5
  }
];

//@ts-ignore
const VideoReview = ({ review, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div 
      className={`${styles.videoCard} ${styles.fadeIn}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.videoPreview}>
        
          <video 
            src={review.videoUrl} 
            controls 
         
            width="100%" 
            height="100%"
            onEnded={() => setIsPlaying(false)}
          >
            Ваш браузер не поддерживает видео.
          </video>
        
      </div>
      
      <div className={styles.videoContent}>
        <div className={styles.reviewHeader}>
          <div className={styles.reviewerInfo}>
            {/* <h3 className={styles.reviewerName}>{review.name}</h3> */}
            <p className={styles.reviewerLocation}>{review.location}</p>
          </div>
          <div className={styles.reviewMeta}>
            {/* <div className={styles.reviewCategory}>{review.category}</div> */}
            <div className={styles.reviewDate}>{review.date}</div>
          </div>
        </div>
        {/* <p className={styles.reviewText}>{review.text}</p> */}
      </div>
    </div>
  );
};

//@ts-ignore
const AudioReview = ({ review, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  
  // Создаем фейковые столбцы для визуализации аудио
  const generateWaveform = () => {
    const waveform = [];
    const barCount = 40;
    
    for (let i = 0; i < barCount; i++) {
      // Генерируем случайную высоту для каждого столбца
      const height = Math.random() * 100;
      waveform.push(
        <div 
          key={i} 
          className={styles.waveBar} 
          style={{ 
            height: `${height}%`,
            backgroundColor: progress > (i / barCount) * 100 ? '#2563eb' : '#94a3b8'
          }}
        />
      );
    }
    
    return waveform;
  };
  
  const handlePlayPause = () => {
    if (isPlaying) {
        //@ts-ignore

      audioRef.current.pause();
    } else {
//@ts-ignore
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleTimeUpdate = () => {
    //@ts-ignore
    const current = audioRef.current.currentTime;
    //@ts-ignore
    const duration = audioRef.current.duration;
    setCurrentTime(current);
    setProgress((current / duration) * 100);
  };
  
  const formatTime = (seconds:any) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <div 
      className={`${styles.audioCard} ${styles.fadeIn}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <audio 
        ref={audioRef} 
        src={review.audioUrl} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className={styles.audioHeader}>
        <div className={styles.reviewHeader}>
          <div className={styles.reviewerInfo}>
            <h3 className={styles.reviewerName}>{review.name}</h3>
            <p className={styles.reviewerLocation}>{review.location}</p>
          </div>
          <div className={styles.reviewMeta}>
            <div className={styles.reviewCategory}>{review.category}</div>
            <div className={styles.reviewDate}>{review.date}</div>
          </div>
        </div>
        <p className={styles.reviewText}>{review.text}</p>
      </div>
      
      <div className={styles.audioContent}>
        <div className={styles.waveformContainer}>
          <div className={styles.waveform}>
            {generateWaveform()}
          </div>
          
          <div className={styles.audioControls}>
            <div 
              className={styles.audioPlayButton}
              onClick={handlePlayPause}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                {isPlaying ? (
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
            </div>
            
            <div className={styles.audioProgressContainer}>
              <div className={styles.audioProgress}>
                <div 
                  className={styles.audioProgressBar} 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className={styles.audioTime}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(review.duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//@ts-ignore
const TextReview = ({ review, index }) => {
  return (
    <div 
      className={`${styles.textCard} ${styles.fadeIn}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.reviewHeader}>
        <div className={styles.reviewerInfo}>
          <h3 className={styles.reviewerName}>{review.name}</h3>
          <p className={styles.reviewerLocation}>{review.location}</p>
        </div>
        <div className={styles.reviewMeta}>
          <div className={styles.reviewCategory}>{review.category}</div>
          <div className={styles.reviewDate}>{review.date}</div>
        </div>
      </div>
      
      <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
          <div 
            key={star} 
            className={`${styles.star} ${star <= review.rating ? styles.filledStar : ''}`}
          >
            ★
          </div>
        ))}
      </div>
      
      <p className={styles.reviewText}>{review.text}</p>
    </div>
  );
};

const Reviews = () => {
  const [activeTab, setActiveTab] = useState('video');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  
  // Собираем все уникальные категории из отзывов
  // Фильтрация отзывов по категории
  const filteredVideoReviews = activeCategory === 'all' 
    ? videoReviews 
    : videoReviews.filter(review => review.category === activeCategory);
    
  const filteredAudioReviews = activeCategory === 'all' 
    ? audioReviews 
    : audioReviews.filter(review => review.category === activeCategory);
    
  const filteredTextReviews = activeCategory === 'all' 
    ? textReviews 
    : textReviews.filter(review => review.category === activeCategory);
  
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
          <h2 className={styles.title}>Отзывы наших клиентов</h2>
          <p className={styles.description}>
            Узнайте, что говорят о нас клиенты, которые уже получили водительские права с нашей помощью. 
            Более 15 000 довольных клиентов по всей России доверились нашему сервису.
          </p>
        </div>
        
        {/* Статистика */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>15 000+</div>
            <div className={styles.statLabel}>Довольных клиентов</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>4.9</div>
            <div className={styles.statLabel}>Средний рейтинг</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Рекомендуют нас</div>
          </div>
        </div>
        
        {/* Табы с отзывами */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsNav}>
            <button
              className={`${styles.tabButton} ${activeTab === 'video' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('video')}
            >
              Видеоотзывы
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'audio' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('audio')}
            >
              Аудиоотзывы
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'text' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('text')}
            >
              Текстовые отзывы
            </button>
          </div>
          
          {/* Фильтр категорий */}
          {/* <div className={styles.filterContainer}>
            <button
              className={`${styles.filterButton} ${activeCategory === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Все категории
            </button>
            
            {allCategories.map(category => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div> */}
        </div>
        
        {/* Контент табов */}
        {activeTab === 'video' && (
          <div className={styles.videoGrid}>
            {filteredVideoReviews.map((review, index) => (
              <VideoReview key={review.id} review={review} index={index} />
            ))}
          </div>
        )}
        
        {activeTab === 'audio' && (
          <div className={styles.audioList}>
            {filteredAudioReviews.map((review, index) => (
              <AudioReview key={review.id} review={review} index={index} />
            ))}
          </div>
        )}
        
        {activeTab === 'text' && (
          <div className={styles.textGrid}>
            {filteredTextReviews.map((review, index) => (
              <TextReview key={review.id} review={review} index={index} />
            ))}
          </div>
        )}
        
        {/* Призыв к действию */}
        <div className={styles.ctaSection}>
  <h3 className={styles.ctaTitle}>Присоединяйтесь к нашим довольным клиентам!</h3>
  <div className={styles.ctaButtons}>
    <a
      href="https://t.me/Aleksandr24th"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaButton}
    >
      Связаться в Telegram
    </a>
    <a
      href="https://wa.me/79002781851"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaButton}
    >
      Написать в WhatsApp
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default Reviews;