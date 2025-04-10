'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Services.module.css';

// Информация об услугах
const servicesData = [
  {
    id: 'gibdd',
    title: 'Получение прав в ГИБДД',
    description: 'Оформление водительских удостоверений с регистрацией в базе ГИБДД',
    image: '/images/gibdd.png',
    icon: 'car-license',
    benefits: [
      'Официальная регистрация в базе',
      'Все категории транспортных средств',
      'Доставка по всей России',
    ],
    ctaText: 'Оформить права ГИБДД',
  },
  {
    id: 'spectehnika',
    title: 'Права на спецтехнику',
    description: 'Удостоверения для управления специальной техникой и транспортом',
    image: '/images/spec.jpg',
    icon: 'construction',
    benefits: [
      'Тракторы и самоходные машины',
      'Строительная техника',
      'Право на работу в промышленности',
    ],
    ctaText: 'Получить права на спецтехнику',
  },
  {
    id: 'gims',
    title: 'Получение прав в ГИМС',
    description: 'Оформление удостоверений для управления маломерными судами',
    image: '/images/gims.jpg',
    icon: 'boat',
    benefits: [
      'Катера и моторные лодки',
      'Гидроциклы и яхты',
      'Международное удостоверение',
    ],
    ctaText: 'Заказать права ГИМС',
  },
];

// Компонент иконок для услуг
const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'car-license':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4H6C4.9 4 4 4.9 4 6V8H0V10H4V13H0V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H24V13H20V10H24V8H20V6C20 4.9 19.1 4 18 4ZM18 18H6V6H18V18ZM10 7.5H8V9H10V7.5ZM16 7.5H14V9H16V7.5ZM16 15H14V16.5H16V15ZM10 15H8V16.5H10V15ZM12 11.25C13.24 11.25 14.25 10.24 14.25 9C14.25 7.76 13.24 6.75 12 6.75C10.76 6.75 9.75 7.76 9.75 9C9.75 10.24 10.76 11.25 12 11.25Z" fill="currentColor"/>
        </svg>
      );
    case 'construction':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.783 15.814C12.845 15.814 12.131 16.529 12.131 17.467C12.131 18.404 12.845 19.119 13.783 19.119C14.720 19.119 15.435 18.404 15.435 17.467C15.435 16.529 14.720 15.814 13.783 15.814Z" fill="currentColor"/>
          <path d="M21.348 15.501L19.737 15.121V13.967C19.737 13.889 19.723 13.812 19.697 13.738L18.738 11.243C18.479 10.594 17.861 10.176 17.167 10.176H15.932V8.175H17.168C17.478 8.175 17.731 7.922 17.731 7.612C17.731 7.303 17.478 7.049 17.168 7.049H15.932V6.486C15.932 6.176 15.679 5.923 15.369 5.923C15.059 5.923 14.806 6.176 14.806 6.486V7.049H10.845V2.936H13.798V4.236C13.798 4.545 14.051 4.799 14.361 4.799C14.671 4.799 14.924 4.545 14.924 4.236V2.936H18.715C19.025 2.936 19.278 2.683 19.278 2.373C19.278 2.063 19.025 1.809 18.715 1.809H13.798V0.563C13.798 0.253 13.545 0 13.235 0C12.925 0 12.671 0.253 12.671 0.563V1.809H9.719C9.409 1.809 9.155 2.063 9.155 2.373V8.175H5.481C5.481 8.175 5.481 8.175 5.48 8.175C2.459 8.176 0 10.636 0 13.656V15.346C0 15.656 0.253 15.909 0.563 15.909H9.719L8.76 16.868C8.541 17.087 8.541 17.44 8.76 17.659L11.826 20.725C12.045 20.944 12.399 20.944 12.618 20.725L13.783 19.56L14.947 20.725C15.167 20.945 15.52 20.945 15.739 20.725L18.805 17.66C19.024 17.44 19.024 17.087 17.659 16.868L16.894 16.104L17.872 16.306C17.946 16.324 18.023 16.333 18.099 16.333C18.704 16.333 19.234 15.875 19.327 15.267L19.359 15.065L20.862 15.421C21.039 15.464 21.224 15.485 21.406 15.485C22.563 15.485 23.56 14.617 23.675 13.458C23.798 12.205 22.799 11.09 21.548 10.964C20.295 10.838 19.18 11.836 19.053 13.088C19.026 13.303 19.034 13.513 19.073 13.715L17.167 13.244V11.303H18.129L18.611 12.587H16.196C15.886 12.587 15.633 12.84 15.633 13.15C15.633 13.46 15.886 13.713 16.196 13.713H18.61V14.039L14.947 13.204C14.727 13.159 14.502 13.223 14.342 13.372L13.783 13.893L13.223 13.372C13.064 13.223 12.839 13.158 12.618 13.204L8.955 14.039V13.713H11.37C11.68 13.713 11.933 13.46 11.933 13.15C11.933 12.84 11.68 12.587 11.37 12.587H8.954L9.437 11.303H10.398V12.024C10.398 12.334 10.651 12.587 10.961 12.587C11.271 12.587 11.524 12.334 11.524 12.024V11.303H17.167C17.389 11.303 17.586 11.445 17.659 11.654L17.893 12.239L13.783 11.323L9.672 12.239L9.907 11.654C9.979 11.445 10.176 11.303 10.398 11.303H11.524V10.176H6.044C5.735 10.176 5.481 10.429 5.481 10.739V12.428H1.126V13.656C1.126 11.257 3.082 9.302 5.481 9.302H15.932V10.176H11.524V9.302H18.715C19.025 9.302 19.278 9.049 19.278 8.739C19.278 8.429 19.025 8.175 18.715 8.175H17.168V10.176H17.167C17.389 10.176 17.586 10.317 17.659 10.526L18.276 12.024H18.129C17.819 12.024 17.566 12.277 17.566 12.587V13.808L12.618 12.655L7.67 13.808V12.587C7.67 12.277 7.417 12.024 7.107 12.024H6.607V10.739C6.607 10.429 6.354 10.176 6.044 10.176H1.126V13.656V14.783H9.155V14.22C9.155 14.069 9.231 13.927 9.358 13.842C9.484 13.757 9.642 13.733 9.788 13.779L13.302 14.592L9.988 17.905L8.482 16.398L12.618 12.261L16.753 16.397L15.247 17.904L14.106 16.764C14.315 16.947 14.458 17.195 14.512 17.467C14.567 17.738 14.531 18.019 14.409 18.27C14.288 18.52 14.088 18.726 13.841 18.853C13.593 18.981 13.313 19.024 13.041 18.976C12.769 18.927 12.516 18.79 12.329 18.586C12.142 18.382 12.03 18.121 12.011 17.846C11.993 17.571 12.068 17.297 12.225 17.071C12.383 16.845 12.614 16.679 12.877 16.599C13.14 16.519 13.419 16.53 13.674 16.631L10.619 13.577L10.282 13.713H1.126V14.783C1.126 14.783 1.126 14.783 1.126 14.782H8.044L12.618 19.356L17.191 14.782H20.347L20.332 14.883C20.309 14.993 20.213 15.072 20.1 15.049L17.783 14.517L13.783 18.517L9.783 14.517L12.618 13.781L15.453 14.517L11.452 18.517L12.618 19.683L13.783 18.517L14.948 19.683L16.114 18.517L13.783 16.186L15.783 14.186L19.186 14.904C19.186 14.904 19.186 14.904 19.186 14.904C19.158 15.073 19.001 15.197 18.832 15.174L17.074 14.795L19.978 11.89L20.332 12.883C20.378 13.02 20.386 13.166 20.355 13.307C20.325 13.448 20.257 13.578 20.159 13.683C20.061 13.789 19.936 13.866 19.797 13.907C19.659 13.949 19.511 13.952 19.371 13.918L16.502 13.305L18.947 15.75L21.149 16.246C21.354 16.292 21.488 16.491 21.443 16.696C21.41 16.846 21.289 16.958 21.138 16.974C21.103 16.978 21.068 16.978 21.033 16.972L19.066 16.604L21.348 18.886C21.567 19.105 21.567 19.459 21.348 19.678L18.282 22.744C18.063 22.963 17.71 22.963 17.491 22.744L13.783 19.036L10.075 22.744C9.856 22.963 9.502 22.963 9.283 22.744L5.674 19.135C5.455 18.916 5.455 18.562 5.674 18.343L9.383 14.634L5.936 13.917C5.795 13.886 5.67 13.813 5.578 13.707C5.487 13.602 5.435 13.471 5.431 13.334H0.563C0.253 13.334 0 13.081 0 12.771C0 12.462 0.253 12.208 0.563 12.208H5.481V11.303H1.126V13.656C1.126 13.656 1.126 13.656 1.126 13.656C1.126 13.656 1.126 13.656 1.126 13.656L1.127 10.739C1.127 10.429 1.38 10.176 1.69 10.176H4.355V8.739C4.355 8.429 4.608 8.175 4.918 8.175H8.029V6.486C8.029 6.176 8.282 5.923 8.592 5.923C8.902 5.923 9.155 6.176 9.155 6.486V7.049H14.806V6.486C14.806 6.176 15.059 5.923 15.369 5.923C15.679 5.923 15.932 6.176 15.932 6.486V7.049H17.168C17.478 7.049 17.731 7.303 17.731 7.612C17.731 7.922 17.478 8.175 17.168 8.175H15.932V6.486C15.932 6.176 15.679 5.923 15.369 5.923C15.059 5.923 14.806 6.176 14.806 6.486V7.049H12.204C12.204 7.049 12.618 6.486 12.618 5.923V1.127C12.618 0.817 12.365 0.563 12.055 0.563C11.745 0.563 11.491 0.817 11.491 1.127V5.923C11.491 6.486 11.905 7.049 11.905 7.049H9.155V2.936H10.845V4.236C10.845 4.545 11.098 4.799 11.408 4.799C11.718 4.799 11.971 4.545 11.971 4.236V2.373C11.971 2.063 11.718 1.809 11.408 1.809H8.592C8.282 1.809 8.029 2.063 8.029 2.373V7.049H6.044C6.044 7.049 6.044 7.049 6.044 7.049C5.735 7.049 5.481 7.303 5.481 7.612V8.176C2.459 8.176 0 10.635 0 13.656V14.782V15.346C0 15.656 0.253 15.909 0.563 15.909H7.481L10.075 18.503L11.24 17.337L8.171 14.267L11.005 13.532L12.171 14.697L13.336 13.532L16.17 14.267L13.1 17.337L14.266 18.503L16.86 15.909H20.347L20.332 16.008C20.309 16.118 20.213 16.197 20.1 16.174L17.783 15.642L14.947 18.477L13.783 17.312L12.618 18.477L11.453 17.312L14.289 14.476L11.974 13.944C11.861 13.921 11.782 13.825 11.803 13.715L11.818 13.609H21.548C21.858 13.609 22.111 13.355 22.111 13.045C22.111 12.736 21.858 12.482 21.548 12.482H21.138C21.078 12.482 21.018 12.491 20.962 12.51L20.446 10.964C20.426 10.908 20.4 10.856 20.369 10.808C20.47 10.795 20.572 10.789 20.675 10.789C21.617 10.789 22.421 11.514 22.509 12.452C22.604 13.461 21.857 14.353 20.848 14.448C20.739 14.458 20.63 14.455 20.523 14.442L19.359 14.16L19.335 14.31C19.307 14.463 19.178 14.578 19.022 14.578C19.003 14.578 18.982 14.577 18.963 14.573L17.561 14.304L19.782 16.526L21.032 16.723C21.448 16.804 21.723 17.2 21.641 17.615C21.57 17.979 21.249 18.244 20.876 18.244C20.828 18.244 20.78 18.24 20.732 18.232L20.009 18.106L20.726 18.822C21.166 19.262 21.166 19.975 20.726 20.415L17.659 23.48C17.22 23.92 16.507 23.92 16.067 23.48L14.903 22.317L13.738 23.481C13.299 23.92 12.586 23.92 12.146 23.481L9.08 20.415C8.64 19.975 8.64 19.262 9.08 18.822L9.797 18.106L9.075 18.232C9.027 18.24 8.978 18.244 8.93 18.244C8.558 18.244 8.236 17.979 8.166 17.615C8.084 17.2 8.359 16.803 8.775 16.723L10.024 16.526L12.246 14.304L10.843 14.573C10.824 14.577 10.804 14.578 10.784 14.578C10.628 14.578 10.5 14.463 10.471 14.31L10.448 14.16L9.284 14.441C9.177 14.455 9.068 14.458 8.958 14.448C7.95 14.353 7.202 13.461 7.297 12.452C7.386 11.514 8.19 10.789 9.131 10.789C9.234 10.789 9.335 10.795 9.438 10.808C9.406 10.856 9.38 10.909 9.36 10.964L8.845 12.51C8.788 12.491 8.728 12.482 8.669 12.482H8.259C7.949 12.482 7.696 12.736 7.696 13.045C7.696 13.355 7.949 13.609 8.259 13.609H8.478L5.642 14.476L8.477 17.312L6.958 18.832L7.481 15.909C7.481 15.909 7.481 15.909 7.481 15.909H1.126V15.346V14.783H9.155V14.602C9.155 14.45 9.231 14.309 9.358 14.223C9.484 14.138 9.642 14.115 9.787 14.161L12.618 14.788L15.448 14.161C15.594 14.115 15.751 14.138 15.878 14.223C16.004 14.309 16.081 14.45 16.081 14.602V14.783H17.191L13.783 18.19L10.374 14.783H16.081V14.22C16.081 14.069 16.157 13.927 16.284 13.842C16.41 13.757 16.568 13.733 16.714 13.779L20.227 14.592L20.01 15.327C19.953 15.347 19.894 15.356 19.834 15.356C19.758 15.356 19.681 15.347 19.607 15.329L17.461 14.917C17.316 14.887 17.164 14.922 17.049 15.012C16.934 15.102 16.865 15.239 16.865 15.386V15.75L19.052 16.043C19.052 16.043 19.052 16.043 19.052 16.043C19.052 16.043 19.052 16.043 19.052 16.043L17.191 14.181L21.548 12.482C21.858 12.482 22.111 12.736 22.111 13.045C22.111 13.355 21.858 13.609 21.548 13.609H20.394L20.207 14.429L21.348 14.629C22.301 14.819 22.899 15.766 22.709 16.718C22.553 17.488 21.932 18.058 21.149 18.118L19.978 17.89L20.726 18.637C20.945 18.857 20.945 19.21 20.726 19.429L17.659 22.498C17.44 22.718 17.087 22.717 16.868 22.498L13.783 19.414L10.698 22.498C10.478 22.717 10.125 22.717 9.906 22.498L6.84 19.429C6.62 19.21 6.62 18.857 6.84 18.637L9.924 15.553L6.839 14.979C6.044 14.846 5.5 14.1 5.634 13.305C5.748 12.629 6.308 12.13 6.983 12.13H7.67V11.303H4.355V12.482C4.355 12.792 4.102 13.045 3.792 13.045C3.482 13.045 3.229 12.792 3.229 12.482V11.303H1.69C1.38 11.303 1.127 11.556 1.127 11.866V13.656C1.127 13.656 1.127 13.656 1.127 13.656L1.126 13.656V14.783H0.563C0.253 14.783 0 14.53 0 14.22C0 13.91 0.253 13.657 0.563 13.657H5.644C5.644 13.657 5.643 13.657 5.643 13.657C5.643 13.656 5.644 13.656 5.644 13.656H10.398V13.967C10.398 13.989 10.399 14.01 10.402 14.031L6.983 13.256C6.872 13.23 6.779 13.327 6.806 13.437L6.839 13.566H0.563C0.253 13.566 0 13.314 0 13.004C0 12.694 0.253 12.441 0.563 12.441H6.789L6.806 12.373C6.832 12.264 6.739 12.167 6.628 12.193L3.792 12.801C3.482 12.872 3.178 12.665 3.107 12.354C3.036 12.044 3.243 11.741 3.553 11.67L6.983 10.939C7.178 10.892 7.383 10.869 7.588 10.869C8.699 10.869 9.644 11.731 9.749 12.839C9.797 13.399 9.621 13.955 9.251 14.394C8.882 14.833 8.358 15.099 7.797 15.147L6.958 15.233L8.805 17.081L11.87 14.015L13.783 15.927L15.695 14.015L18.76 17.081L20.608 15.233L19.767 15.147C19.206 15.099 18.682 14.834 18.313 14.394C17.944 13.955 17.767 13.399 17.816 12.839C17.921 11.731 18.865 10.869 19.977 10.869C20.182 10.869 20.387 10.892 20.585 10.939L20.801 10.981C20.81 10.982 20.818 10.984 20.827 10.985C21.933 11.133 22.724 12.121 22.576 13.227C22.515 13.708 22.26 14.134 21.881 14.423L21.348 15.501L21.348 15.501ZM13.215 15.814C13.133 15.814 13.051 15.822 12.97 15.838C12.571 15.906 12.22 16.13 11.984 16.466C11.748 16.803 11.647 17.22 11.699 17.635C11.75 18.049 11.951 18.417 12.264 18.682C12.577 18.947 12.975 19.07 13.391 19.035C13.804 19 14.174 18.81 14.445 18.501C14.717 18.192 14.847 17.797 14.818 17.388C14.789 16.975 14.606 16.601 14.303 16.335C14.004 16.01 13.616 15.814 13.215 15.814Z" fill="currentColor"/>
        </svg>
      );
    case 'boat':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21C18.61 21 17.22 20.53 16 19.67C13.56 21.38 10.44 21.38 8 19.67C6.78 20.53 5.39 21 4 21H2V23H4C5.37 23 6.74 22.65 8 22C10.5 23.3 13.5 23.3 16 22C17.26 22.65 18.62 23 20 23H22V21H20ZM20 18C18.61 18 17.22 17.53 16 16.67C13.56 18.38 10.44 18.38 8 16.67C6.78 17.53 5.39 18 4 18H2V20H4C5.37 20 6.74 19.65 8 19C10.5 20.3 13.5 20.3 16 19C17.26 19.65 18.62 20 20 20H22V18H20ZM22 3.25L20 1.25V4.25H18.75V1H17.25V4.25H16V1.25L14 3.25V4.25H10.5C9.03 4.25 7.8 5.26 7.5 6.67L6.5 10.41V10.5H7.41L8.47 6.67C8.66 5.83 9.52 5.25 10.47 5.25H14V10.19L9.84 11.94L9.75 12H15.5V17.67C15.83 17.47 16.17 17.25 16.5 17C16.83 17.25 17.16 17.47 17.5 17.67V12H19V11.5H11.72L15.59 9.93L15.5 9.84V5.25H19V11.25L21 9.25V3.25H22Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

export const Services = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
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
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Наши услуги</h2>
          <p className={styles.sectionDescription}>
            Мы предлагаем комплексные услуги по оформлению всех типов водительских удостоверений
            с официальной регистрацией в государственных базах данных.
          </p>
        </div>
        
        <div className={styles.servicesContainer}>
          {servicesData.map((service, index) => (
            <Link 
              href={`/services/${service.id}`} 
              className={styles.serviceLink}
              key={service.id}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div 
                className={`${styles.serviceCard} ${isVisible ? styles.fadeIn : ''}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: hoverIndex === index ? 'scale(1.03)' : 'scale(1)'
                }}
              >
                <div className={styles.serviceImageContainer}>
                  <div className={styles.serviceImageOverlay}></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.serviceImage}
                  />
                  
                  <div className={styles.serviceIcon}>
                    <ServiceIcon type={service.icon} />
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.benefitsList}>
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className={styles.benefitItem}>
                        <span className={styles.bulletPoint}></span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.ctaButton}>
                    <span>{service.ctaText}</span>
                    <svg 
                      className={`${styles.arrowIcon} ${hoverIndex === index ? styles.arrowActive : ''}`} 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};