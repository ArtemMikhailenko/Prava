'use client'
import styles from './ProcessSteps.module.css';

// Define prop types for process steps
type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image?: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  isVisible?: boolean;
};

export const ProcessSteps = ({ steps, isVisible = true }: ProcessStepsProps) => {
  return (
    <div className={styles.processStepsContainer}>
      <div className={styles.processTimeline}>
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`${styles.processStep} ${isVisible ? styles.fadeIn : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.stepNumberContainer}>
              <div className={styles.stepNumber}>{step.number}</div>
              {index < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {step.image && (
                <div className={styles.stepImageContainer}>
                  <img src={step.image} alt={step.title} className={styles.stepImage} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};