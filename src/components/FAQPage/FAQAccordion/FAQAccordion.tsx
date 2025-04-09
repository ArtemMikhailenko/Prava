'use client'
import { useState } from 'react';
import styles from './FAQAccordion.module.css';

// Define prop types for FAQ items
type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  isVisible?: boolean;
};

export const FAQAccordion = ({ items, isVisible = true }: FAQAccordionProps) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`${styles.faqItem} ${expandedItem === index ? styles.expanded : ''} ${isVisible ? styles.fadeIn : ''}`} 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div 
            className={styles.faqQuestion}
            onClick={() => toggleFAQ(index)}
          >
            <h3>{item.question}</h3>
            <div className={styles.faqToggle}>
              <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className={styles.faqAnswerWrapper} style={{ height: expandedItem === index ? 'auto' : '0px' }}>
            <div className={styles.faqAnswer}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};