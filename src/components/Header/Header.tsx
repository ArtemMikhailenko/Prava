'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('avtoprava');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarInfo}>
            <div className={styles.topBarContact}>
              <div className={styles.contactItem}>
                <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="currentColor"/>
                </svg>
                <span>Работаем 24/7</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06 13.63 6.62 10.79L8.47 8.94C8.9 8.51 9.11 7.91 9.04 7.3L8.75 4.78C8.63 3.77 7.78 3.01 6.76 3.01H5.03C3.9 3.01 2.96 3.95 3.03 5.08C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="currentColor"/>
                </svg>
                <span>8 (800) 111-22-33</span>
              </div>
            </div>
            <div className={styles.topBarSocial}>
              <a href="#" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM16.2 4H7.8C5.7 4 4 5.7 4 7.8V16.2C4 18.3 5.7 20 7.8 20H16.2C18.3 20 20 18.3 20 16.2V7.8C20 5.7 18.3 4 16.2 4ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8ZM12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.05 4.91C18.1 4.2 16.9 3.85 15.28 3.85H8.73C7.05 3.85 5.82 4.22 4.87 4.95C3.93 5.7 3.45 6.76 3.45 8.14V15.86C3.45 17.23 3.93 18.31 4.87 19.05C5.82 19.78 7.05 20.15 8.73 20.15H15.28C16.93 20.15 18.15 19.78 19.04 19.05C19.96 18.31 20.42 17.23 20.42 15.86V8.14C20.45 6.79 19.98 5.71 19.05 4.91ZM12 15.52C10.07 15.52 8.5 13.94 8.5 12C8.5 10.06 10.07 8.48 12 8.48C13.93 8.48 15.5 10.06 15.5 12C15.5 13.94 13.93 15.52 12 15.52ZM16.17 8.86C15.62 8.86 15.17 8.4 15.17 7.84C15.17 7.29 15.62 6.82 16.17 6.82C16.72 6.82 17.17 7.28 17.17 7.84C17.17 8.4 16.72 8.86 16.17 8.86Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4268 6.73236C20.0283 6.93236 19.6008 7.07361 19.1533 7.14736C19.6108 6.85861 19.9593 6.41361 20.1263 5.84986C19.6988 6.12611 19.2308 6.32611 18.7368 6.43736C18.3433 6.00111 17.7883 5.72486 17.1848 5.72486C16.0218 5.72486 15.0783 6.66986 15.0783 7.83111C15.0783 7.99361 15.0963 8.15486 15.1313 8.31111C13.3678 8.21361 11.7973 7.38111 10.7563 6.12486C10.5788 6.42486 10.4798 6.85861 10.4798 7.31111C10.4798 8.16361 10.9073 8.91361 11.5423 9.35611C11.1863 9.35611 10.8528 9.24486 10.5618 9.08236V9.09861C10.5618 10.1261 11.2878 10.9804 12.2458 11.1601C12.0698 11.2136 11.8848 11.2436 11.6953 11.2436C11.5563 11.2436 11.4233 11.2261 11.2903 11.2036C11.5638 12.0486 12.3413 12.6661 13.2668 12.6661C12.5458 13.2591 11.6323 13.6121 10.6378 13.6121C10.4678 13.6121 10.2978 13.6056 10.1338 13.5846C11.0688 14.2051 12.1698 14.5596 13.3588 14.5596C17.1818 14.5596 19.2668 11.2896 19.2668 8.42111C19.2668 8.31736 19.2668 8.21236 19.2608 8.10861C19.6883 7.77736 20.0573 7.36486 20.3588 6.90111L20.4268 6.73236Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`${styles.mainHeader} ${scrolled ? styles.compact : ''}`}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoText}>
                <span className={styles.logoTextPrava}>PRAVA</span>
                <span className={styles.logoTextVod}>VOD</span>
              </div>
              <span className={styles.slogan}>Заказать ВУ по всей России</span>
            </Link>
          </div>
          
          <div className={styles.contactInfo}>
            <Link href="https://wa.me/yourphonenumber" className={styles.whatsappLink}>
              <div className={styles.whatsappContainer}>
                <svg className={styles.whatsappIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.05 4.91C18.1 4.2 16.9 3.85 15.28 3.85H8.73C7.05 3.85 5.82 4.22 4.87 4.95C3.93 5.7 3.45 6.76 3.45 8.14V15.86C3.45 17.23 3.93 18.31 4.87 19.05C5.82 19.78 7.05 20.15 8.73 20.15H15.28C16.93 20.15 18.15 19.78 19.04 19.05C19.96 18.31 20.42 17.23 20.42 15.86V8.14C20.45 6.79 19.98 5.71 19.05 4.91ZM12 15.52C10.07 15.52 8.5 13.94 8.5 12C8.5 10.06 10.07 8.48 12 8.48C13.93 8.48 15.5 10.06 15.5 12C15.5 13.94 13.93 15.52 12 15.52Z" fill="#25D366"/>
                </svg>
                <span>Пишите нам в WhatsApp</span>
              </div>
            </Link>
            <button className={styles.callbackButton}>
              <svg className={styles.phoneIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06 13.63 6.62 10.79L8.47 8.94C8.9 8.51 9.11 7.91 9.04 7.3L8.75 4.78C8.63 3.77 7.78 3.01 6.76 3.01H5.03C3.9 3.01 2.96 3.95 3.03 5.08C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="currentColor"/>
              </svg>
              <span>Обратный звонок</span>
            </button>
          </div>
          
          <button
            className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>
      
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.container}>
          <ul className={styles.navList}>
            {[
              { id: 'avtoprava', label: 'Автоправа' },
              { id: 'spectehnika', label: 'Спецтехника' },
              { id: 'gims', label: 'ГИМС' },
              { id: 'uslugi', label: 'Услуги' },
              { id: 'voprosy', label: 'Вопросы' },
              { id: 'garantii', label: 'Гарантии' },
              { id: 'oplata', label: 'Оплата и доставка' }
            ].map(item => (
              <li 
                key={item.id} 
                className={`${styles.navItem} ${activeNavItem === item.id ? styles.active : ''}`}
                onClick={() => setActiveNavItem(item.id)}
              >
                <Link href={`/${item.id}`}>
                  {item.label}
                </Link>
                {activeNavItem === item.id && <div className={styles.activeIndicator} />}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};