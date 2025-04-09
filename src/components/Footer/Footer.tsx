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
              <h2 className={styles.logo}>PRAVAVOD</h2>
              <p className={styles.description}>
                PRAVAVOD - это надежный путь к официальному оформлению водительских удостоверений, прав на спецтехнику и водные виды техники. Мы делаем процесс получения прав простым и доступным, предоставляя услуги оформления в России с возможностью доставки по всей России. Доверьтесь нам, и купите права быстро и удобно.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.workHours}>Работаем 24/7</div>
                <a href="https://wa.me/70000000000" className={styles.whatsappLink}>
                  <div className={styles.whatsappButton}>
                    <svg className={styles.whatsappIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.937C0 5.347 5.347 0 11.937 0c3.188 0 6.176 1.244 8.426 3.498A11.866 11.866 0 0 1 23.86 11.937c0 6.59-5.347 11.937-11.937 11.937-2.004 0-3.98-.5-5.731-1.45L.057 24zm6.503-3.011l.356.213c1.577 1.011 3.384 1.548 5.235 1.548 5.454 0 9.891-4.437 9.891-9.891 0-2.645-1.03-5.127-2.897-6.994a9.808 9.808 0 0 0-6.994-2.897c-5.454 0-9.891 4.436-9.891 9.891 0 1.964.571 3.872 1.657 5.516l.258.388-1.1 4.016 3.485-.79zm14.017-6.22c-.072-.118-.26-.19-.546-.332-.285-.143-1.686-.83-1.944-.926-.26-.094-.45-.142-.641.143-.19.286-.737.926-.9 1.116-.166.19-.325.214-.61.071-.287-.142-1.2-.44-2.284-1.405-.845-.753-1.407-1.673-1.572-1.959-.166-.285-.017-.44.124-.582.128-.128.285-.332.427-.499.143-.166.19-.285.285-.475.095-.19.048-.357-.024-.499-.071-.143-.64-1.545-.88-2.12-.232-.558-.466-.481-.64-.481-.166 0-.356-.024-.546-.024a1.071 1.071 0 0 0-.784.357c-.261.285-.998.976-.998 2.378 0 1.401 1.021 2.755 1.165 2.945.14.19 2.006 3.066 4.863 4.297 2.857 1.23 2.857.821 3.374.772.516-.05 1.665-.68 1.899-1.34.234-.66.234-1.21.166-1.33v.002z" fill="currentColor"/>
                    </svg>
                    <span>Пишите нам в WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className={styles.linksColumns}>
              <div className={styles.linksColumn}>
                <h3 className={styles.columnTitle}>ОСНОВНОЕ МЕНЮ</h3>
                <ul className={styles.linksList}>
                  <li><Link href="/gibdd">Получение прав в ГИБДД</Link></li>
                  <li><Link href="/spectehnika">Права на спецтехнику</Link></li>
                  <li><Link href="/gims">Получение прав в ГИМС</Link></li>
                  <li><Link href="/duplicate">Дубликат прав</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/reviews">Отзывы</Link></li>
                </ul>
              </div>
              
              <div className={styles.linksColumn}>
                <h3 className={styles.columnTitle}>НАШИ УСЛУГИ</h3>
                <ul className={styles.linksList}>
                  <li><Link href="/categories/d1e">Права категории D1E</Link></li>
                  <li><Link href="/categories/d">Права категории D</Link></li>
                  <li><Link href="/categories/ce">Права категории CE</Link></li>
                  <li><Link href="/categories/de">Права категории DE</Link></li>
                  <li><Link href="/categories/c1">Права категории C1</Link></li>
                  <li><Link href="/categories/a">Права категории A</Link></li>
                  <li><Link href="/categories/b1">Права категории B1</Link></li>
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
          
          <div className={styles.additionalLinks}>
            <Link href="/privacy-policy">Политика конфиденциальности</Link>
            <Link href="/terms">Условия использования</Link>
            <Link href="/sitemap">Карта сайта</Link>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://vk.com/" className={styles.socialLink} aria-label="VKontakte">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452H18.618V15.841C18.618 14.541 18.117 13.668 16.997 13.668C16.121 13.668 15.608 14.255 15.372 14.822C15.283 15.032 15.262 15.322 15.262 15.615V20.451H13.433C13.433 20.451 13.456 12.89 13.433 12.324H15.262V13.125C15.258 13.132 15.252 13.14 15.247 13.147H15.262V13.125C15.695 12.482 16.427 11.556 18.095 11.556C20.181 11.556 21.447 12.944 21.447 15.493V20.452H20.447Z" fill="currentColor"/>
                <path d="M7.324 9.353C6.364 9.353 5.754 8.72 5.754 7.896C5.754 7.051 6.385 6.44 7.365 6.44C8.345 6.44 8.933 7.051 8.954 7.896C8.954 8.72 8.344 9.353 7.324 9.353ZM6.393 20.452H8.22V12.324H6.395V20.452H6.393Z" fill="currentColor"/>
                <path d="M3 20.452H4.829V12.324H3V20.452Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://t.me/" className={styles.socialLink} aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.05 1.577L1.95 10.625C1.65 10.747 1.2 11.064 1.25 11.66C1.3 12.254 1.75 12.513 2 12.625L6.05 14.098L8.3 21.033C8.442 21.478 8.7 22 9.25 22C9.7 22 10 21.735 10.2 21.535L12.5 19.198L16.65 22.497C17 22.748 17.352 23 17.9 23C18.65 23 19.042 22.314 19.15 21.915L22.95 2.542C23.15 1.747 22.5 1.172 22.05 1.577ZM9.25 15.145L8.6 19.383L6.75 13.898L18.45 6.875L9.25 15.145Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://youtube.com/" className={styles.socialLink} aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.062 5.506C21.971 5.1395 21.7902 4.80222 21.5368 4.52975C21.2834 4.25727 20.966 4.06017 20.613 3.964C18.88 3.5 12 3.5 12 3.5C12 3.5 5.12 3.5 3.387 3.964C3.03396 4.06017 2.71663 4.25727 2.46318 4.52975C2.20972 4.80222 2.02902 5.1395 1.938 5.506C1.48 7.343 1.25 9.229 1.252 11.123C1.25 13.018 1.48 14.904 1.938 16.741C2.02902 17.1075 2.20972 17.4448 2.46318 17.7173C2.71663 17.9897 3.03396 18.1868 3.387 18.283C5.12 18.747 12 18.747 12 18.747C12 18.747 18.88 18.747 20.613 18.283C20.966 18.1868 21.2834 17.9897 21.5368 17.7173C21.7902 17.4448 21.971 17.1075 22.062 16.741C22.52 14.904 22.75 13.018 22.748 11.123C22.75 9.229 22.52 7.343 22.062 5.506ZM9.815 14.323V7.923L15.557 11.123L9.815 14.323Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};