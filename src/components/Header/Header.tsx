'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

// Data for menu categories
const menuData = {
  avtoprava: [
    { id: 'a', title: 'Права категории A', path: '/prava/a', icon: 'motorcycle' },
    { id: 'b', title: 'Права категории B', path: '/prava/b', icon: 'car' },
    { id: 'c', title: 'Права категории C', path: '/prava/c', icon: 'truck' },
    { id: 'd', title: 'Права категории D', path: '/prava/d', icon: 'bus' },
    { id: 'e', title: 'Права категории E', path: '/prava/e', icon: 'truck-trailer' },
    { id: 'm', title: 'Права категории M', path: '/prava/m', icon: 'scooter' },
  ],
  spectehnika: [
    { id: 'pogruzchik', title: 'Права на погрузчик', path: '/prava/pogruzchik', icon: 'forklift' },
    { id: 'traktor', title: 'Права на трактор', path: '/prava/traktor', icon: 'tractor' },
    { id: 'katok', title: 'Права на каток', path: '/prava/katok', icon: 'construction' },
    { id: 'evakuator', title: 'Права на эвакуатор', path: '/prava/evakuator', icon: 'tow-truck' },
    { id: 'buldozer', title: 'Права на бульдозер', path: '/prava/buldozer', icon: 'bulldozer' },
    { id: 'kombain', title: 'Права на комбайн', path: '/prava/kombajn', icon: 'harvester' },
  ],
  gims: [
    { id: 'yahta', title: 'Права на яхту', path: '/prava/yahta', icon: 'yacht' },
    { id: 'kater', title: 'Права на катер', path: '/prava/kater', icon: 'speedboat' },
    { id: 'lodka', title: 'Права на лодку', path: '/prava/lodka', icon: 'boat' },
    { id: 'parusnoe_sudno', title: 'Права на парусное судно', path: '/prava/parusnoe_sudno', icon: 'sailboat' },
    { id: 'akvabike', title: 'Права на аквабайк', path: '/prava/akvabike', icon: 'jet-ski' },
    { id: 'motornaya-lodka', title: 'Права на моторную лодку', path: '/prava/motornaya_lodka', icon: 'motorboat' },
  ],
  uslugi: [
    { id: 'dublikaty', title: 'Дубликаты прав', path: '/prava/dublikaty', icon: 'copy' },
    { id: 'lishennym', title: 'Лишенным прав', path: '/prava/lishennym', icon: 'restore' },
    { id: 'medspravka', title: 'Медсправка для прав', path: '/prava/medspravka', icon: 'medical' },
    { id: 'foreigners', title: 'Права для иностранцев', path: '/prava/foreigners', icon: 'globe' },
    { id: 'bez_obucheniya', title: 'Без обучения и экзаменов', path: '/prava/bez_obucheniya', icon: 'fast' },
  ],
};

// SVG icons component for menu items
const MenuIcon = ({ type }: { type: string }) => {
  // Icons remain the same as in the previous implementation
  // (the entire SVG rendering logic from the previous code)
  switch (type) {
    case 'motorcycle':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.44 9.03L15.41 5H11V7H14.59L16.59 9H8.54C7.53 9 6.59 9.33 5.83 9.88L8.91 13H15.29L16.97 10.96C17.61 10.35 18.62 10.35 19.26 10.96C19.5 11.2 19.63 11.53 19.63 11.87C19.63 12.21 19.5 12.54 19.26 12.78L17.41 15H5.12C4.5 15 4 15.5 4 16.13V16.21C4 17.19 4.39 18.13 5.08 18.83L9 23H15L17.31 20.41C17.72 19.94 18.2 19.54 18.72 19.24L20.74 17.97C21.43 17.55 21.59 16.63 21.15 15.98C20.71 15.33 19.77 15.16 19.13 15.58L17.85 16.36C17.42 16.61 17.06 17 16.8 17.41L15.91 19H14.5L19.25 14.25C19.66 13.84 19.92 13.32 20 12.78C20.08 12.24 20 11.69 19.75 11.19C19.4 10.5 18.96 9.93 18.43 9.44C18.76 9.21 19.13 9.1 19.5 9.1C19.76 9.1 20.04 9.16 20.24 9.29C20.44 9.42 20.72 9.38 20.88 9.22C21.04 9.06 21.08 8.78 20.95 8.58C20.82 8.38 20.76 8.1 20.76 7.84C20.76 7.14 21.31 6.59 22 6.59C22.28 6.59 22.5 6.37 22.5 6.09C22.5 5.81 22.28 5.59 22 5.59C20.76 5.59 19.76 6.59 19.76 7.83C19.76 8.2 19.87 8.57 20.09 8.89C19.68 8.75 19.27 8.67 18.85 8.67C18.41 8.67 17.98 8.76 17.58 8.93L15.59 7H18V5H15C14.7348 5 14.4804 5.10536 14.2929 5.29289C14.1054 5.48043 14 5.73478 14 6H13.5V2H11.5V6H10.9C10.9 5.73478 10.7946 5.48043 10.6071 5.29289C10.4196 5.10536 10.1652 5 9.9 5H8V7H9.9L13.5 10.62V13H10.5V11H3.5V13H8.5V15H9.75L7.5 12.62V11H2V15.12C2 17.37 3.88 19.25 6.13 19.25C7.71 19.25 9.09 18.28 9.72 16.91L11.5 19H13V16H8.01C8.01 16.55 7.56 17 7.01 17C6.46 17 6.01 16.55 6.01 16C6.01 15.45 6.46 15 7.01 15H8.01L10.89 11H10.5V9.5H13.4L11.5 7.63V6H12.5V9.5H15.8L14.23 11H12V14.5H14.21L13.6 15.5H10.5V19H14V23H16V19.5H14.5L17.85 15.53C18.18 15.28 18.54 15.07 18.92 14.85L21.11 13.67C21.95 13.19 22.11 12.62 22.5 12C22.87 11.2 22.89 11.2 22.5 10.5C22.1 9.77 21.5 9.3 20.62 9.13C20.24 9.04 19.85 9 19.44 9.03Z" fill="currentColor"/>
        </svg>
      );
    // ... (other icon cases remain the same)
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
        </svg>
      );
  }
};

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const mainHeaderRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState('');

  // Determine active menu item based on URL
  useEffect(() => {
    const segment = pathname.split('/')[1];
    if (segment) {
      if (Object.keys(menuData).includes(segment)) {
        setActiveNavItem(segment);
      } else if (segment === 'prava') {
        setActiveNavItem('avtoprava');
      } else if (['faq', 'guarantees', 'payment'].includes(segment)) {
        setActiveNavItem(segment);
      }
    } else {
      setActiveNavItem('avtoprava');
    }
  }, [pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        setAnimationClass(isScrolled ? styles.scrollAnimation : styles.reverseScrollAnimation);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Logo hover effects
  const handleLogoHover = () => {
    if (mainHeaderRef.current) {
      mainHeaderRef.current.classList.add(styles.logoHoverEffect);
    }
  };

  const handleLogoLeave = () => {
    if (mainHeaderRef.current) {
      mainHeaderRef.current.classList.remove(styles.logoHoverEffect);
    }
  };

  // Navigation menu items
  const navItems = [
    { id: 'avtoprava', label: 'Автоправа', path: '/avtoprava', hasSubmenu: true },
    { id: 'spectehnika', label: 'Спецтехника', path: '/spectehnika', hasSubmenu: true },
    { id: 'gims', label: 'ГИМС', path: '/gims', hasSubmenu: true },
    { id: 'uslugi', label: 'Услуги', path: '/uslugi', hasSubmenu: true },
    { id: 'faq', label: 'Вопросы', path: '/faq', hasSubmenu: false },
    { id: 'guarantees', label: 'Гарантии', path: '/guarantees', hasSubmenu: false },
    { id: 'payment', label: 'Оплата и доставка', path: '/payment', hasSubmenu: false }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${animationClass}`}>
      <div 
        className={`${styles.mainHeader} ${scrolled ? styles.compact : ''}`} 
        ref={mainHeaderRef}
      >
        <div className={styles.container}>
          {/* Logo Section */}
          <div className={styles.logoContainer}>
            <Link 
              href="/" 
              className={styles.logoLink} 
              onMouseEnter={handleLogoHover} 
              onMouseLeave={handleLogoLeave}
            >
              <div className={styles.logoText}>
                <span className={styles.logoTextPrava}>PRAVA</span>
                <span className={styles.logoTextVod}>VOD</span>
                <span className={styles.logoDecoration}></span>
              </div>
              <span className={styles.slogan}>Заказать ВУ по всей России</span>
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className={styles.contactInfo}>
          <Link href="https://wa.me/79002781851" className={styles.whatsappLink}>
              <div className={styles.whatsappContainer}>
                <span>Пишите нам в WhatsApp</span>
              </div>
            </Link>
            <a
              href="https://t.me/Aleksandr24th"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.callbackButton}
            >
              <span>Связаться</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
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
      
      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.container}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li 
                key={item.id} 
                className={`${styles.navItem} ${activeNavItem === item.id ? styles.active : ''} ${item.hasSubmenu ? styles.hasSubmenu : ''}`}
                onMouseEnter={() => item.hasSubmenu && setHoveredSubmenu(item.id)}
                onMouseLeave={() => item.hasSubmenu && setHoveredSubmenu(null)}
              >
                {item.hasSubmenu ? (
                    <>
                      {/* Для пунктов с подменю — просто span */}
                      <span className={styles.navLabel}>
                        {item.label}
                        <svg className={styles.dropdownArrow} width="10" height="6" /* ... */>
                          <path d="M1 1L5 5L9 1" /* ... *//>
                        </svg>
                      </span>
                    </>
                  ) : (
                    /* Для пунктов без подменю — Link */
                    <Link href={item.path} className={styles.navLink}>
                      {item.label}
                    </Link>
                  )}
                {activeNavItem === item.id && <div className={styles.activeIndicator} />}
                
                {/* Dropdown Submenu */}
                {item.hasSubmenu && (
                  <div className={`${styles.submenu} ${hoveredSubmenu === item.id ? styles.submenuOpen : ''}`}>
                    <div className={styles.submenuContent}>
                      {menuData[item.id as keyof typeof menuData]?.map((subItem) => (
                        <Link 
                          key={subItem.id} 
                          href={subItem.path} 
                          className={styles.submenuItem}
                          onClick={() => {
                            setHoveredSubmenu(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.submenuItemText}>
                            {subItem.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className={styles.mobileMenuItems}>
          <div className={styles.mobileContact}>
            <a href="tel:88001112233" className={styles.mobilePhone}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06 13.63 6.62 10.79L8.47 8.94C8.9 8.51 9.11 7.91 9.04 7.3L8.75 4.78C8.63 3.77 7.78 3.01 6.76 3.01H5.03C3.9 3.01 2.96 3.95 3.03 5.08C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="currentColor"/>
              </svg>
              <span>8 (800) 111-22-33</span>
            </a>
            <a href="https://wa.me/your-number" className={styles.mobileWhatsapp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.05 4.91C18.1 4.2 16.9 3.85 15.28 3.85H8.73C7.05 3.85 5.82 4.22 4.87 4.95C3.93 5.7 3.45 6.76 3.45 8.14V15.86C3.45 17.23 3.93 18.31 4.87 19.05C5.82 19.78 7.05 20.15 8.73 20.15H15.28C16.93 20.15 18.15 19.78 19.04 19.05C19.96 18.31 20.42 17.23 20.42 15.86V8.14C20.45 6.79 19.98 5.71 19.05 4.91ZM12 15.52C10.07 15.52 8.5 13.94 8.5 12C8.5 10.06 10.07 8.48 12 8.48C13.93 8.48 15.5 10.06 15.5 12C15.5 13.94 13.93 15.52 12 15.52Z" fill="#25D366"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
          <button 
            className={styles.mobileCta}
          >
            <span>Обратный звонок</span>
          </button>
        </div>
      )}
    </header>
  );
};