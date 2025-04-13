// components/Footer/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.companyInfo}>
              <h2 className={styles.logo}>PRAVA24</h2>
              <p className={styles.description}>
                PRAVAVOD - это надежный путь к официальному оформлению водительских удостоверений, прав на спецтехнику и водные виды техники. Мы делаем процесс получения прав простым и доступным, предоставляя услуги оформления в России с возможностью доставки по всей России. Доверьтесь нам, и купите права быстро и удобно.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.workHours}>Работаем 24/7</div>
                
                <a
                  href="https://wa.me/79002781851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  <svg
                    className={styles.whatsappIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.937C0 5.347 5.347 0 11.937 0c3.188 0 6.176 1.244 8.426 3.498A11.866 11.866 0 0 1 23.86 11.937c0 6.59-5.347 11.937-11.937 11.937-2.004 0-3.98-.5-5.731-1.45L.057 24zm6.503-3.011l.356.213c1.577 1.011 3.384 1.548 5.235 1.548 5.454 0 9.891-4.437 9.891-9.891 0-2.645-1.03-5.127-2.897-6.994a9.808 9.808 0 0 0-6.994-2.897c-5.454 0-9.891 4.436-9.891 9.891 0 1.964.571 3.872 1.657 5.516l.258.388-1.1 4.016 3.485-.79zm14.017-6.22c-.072-.118-.26-.19-.546-.332-.285-.143-1.686-.83-1.944-.926-.26-.094-.45-.142-.641.143-.19.286-.737.926-.9 1.116-.166.19-.325.214-.61.071-.287-.142-1.2-.44-2.284-1.405-.845-.753-1.407-1.673-1.572-1.959-.166-.285-.017-.44.124-.582.128-.128.285-.332.427-.499.143-.166.19-.285.285-.475.095-.19.048-.357-.024-.499-.071-.143-.64-1.545-.88-2.12-.232-.558-.466-.481-.64-.481-.166 0-.356-.024-.546-.024a1.071 1.071 0 0 0-.784.357c-.261.285-.998.976-.998 2.378 0 1.401 1.021 2.755 1.165 2.945.14.19 2.006 3.066 4.863 4.297 2.857 1.23 2.857.821 3.374.772.516-.05 1.665-.68 1.899-1.34.234-.66.234-1.21.166-1.33v.002z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Написать в WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className={styles.linksColumns}>
              <div className={styles.linksColumn}>
                <h3 className={styles.columnTitle}>ОСНОВНОЕ МЕНЮ</h3>
                <ul className={styles.linksList}>
                  <li><Link href="/">Получение прав в ГИБДД</Link></li>
                  <li><Link href="/">Права на спецтехнику</Link></li>
                  <li><Link href="/">Получение прав в ГИМС</Link></li>
                  <li><Link href="/prava/dublikaty">Дубликат прав</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/reviews">Отзывы</Link></li>
                </ul>
              </div>
              
              <div className={styles.linksColumn}>
                <h3 className={styles.columnTitle}>НАШИ УСЛУГИ</h3>
                <ul className={styles.linksList}>
                  <li><Link href="/prava/d">Права категории D</Link></li>
                  <li><Link href="/prava/c">Права категории CE</Link></li>
                  <li><Link href="/prava/d">Права категории DE</Link></li>
                  <li><Link href="/prava/c">Права категории C1</Link></li>
                  <li><Link href="/prava/a">Права категории A</Link></li>
                  <li><Link href="/prava/b">Права категории B1</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.copyright}>
            © Copyright 2024 Все права защищены.
          </div>  
          <div className={styles.socialLinks}>
        {/* Telegram */}
        <Link
          href="https://t.me/Aleksandr24th"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Telegram"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.05 1.577L1.95 10.625C1.65 10.747 1.2 11.064 1.25 11.66C1.3 12.254 1.75 12.513 2 12.625L6.05 14.098L8.3 21.033C8.442 21.478 8.7 22 9.25 22C9.7 22 10 21.735 10.2 21.535L12.5 19.198L16.65 22.497C17 22.748 17.352 23 17.9 23C18.65 23 19.042 22.314 19.15 21.915L22.95 2.542C23.15 1.747 22.5 1.172 22.05 1.577ZM9.25 15.145L8.6 19.383L6.75 13.898L18.45 6.875L9.25 15.145Z" />
          </svg>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/79002781851"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="WhatsApp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.937C0 5.347 5.347 0 11.937 0c3.188 0 6.176 1.244 8.426 3.498A11.866 11.866 0 0 1 23.86 11.937c0 6.59-5.347 11.937-11.937 11.937-2.004 0-3.98-.5-5.731-1.45L.057 24zm6.503-3.011l.356.213c1.577 1.011 3.384 1.548 5.235 1.548 5.454 0 9.891-4.437 9.891-9.891 0-2.645-1.03-5.127-2.897-6.994a9.808 9.808 0 0 0-6.994-2.897c-5.454 0-9.891 4.436-9.891 9.891 0 1.964.571 3.872 1.657 5.516l.258.388-1.1 4.016 3.485-.79zm14.017-6.22c-.072-.118-.26-.19-.546-.332-.285-.143-1.686-.83-1.944-.926-.26-.094-.45-.142-.641.143-.19.286-.737.926-.9 1.116-.166.19-.325.214-.61.071-.287-.142-1.2-.44-2.284-1.405-.845-.753-1.407-1.673-1.572-1.959-.166-.285-.017-.44.124-.582.128-.128.285-.332.427-.499.143-.166.19-.285.285-.475.095-.19.048-.357-.024-.499-.071-.143-.64-1.545-.88-2.12-.232-.558-.466-.481-.64-.481-.166 0-.356-.024-.546-.024a1.071 1.071 0 0 0-.784.357c-.261.285-.998.976-.998 2.378 0 1.401 1.021 2.755 1.165 2.945.14.19 2.006 3.066 4.863 4.297 2.857 1.23 2.857.821 3.374.772.516-.05 1.665-.68 1.899-1.34.234-.66.234-1.21.166-1.33v.002z" />
          </svg>
        </Link>
      </div>
        </div>
      </div>
    </footer>
  );
};