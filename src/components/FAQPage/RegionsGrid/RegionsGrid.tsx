'use client'
import { useState } from 'react';
import styles from './RegionsGrid.module.css';

type RegionsGridProps = {
  regions: string[];
  isVisible?: boolean;
  columnsCount?: number;
  searchable?: boolean;
};

export const RegionsGrid = ({ 
  regions, 
  isVisible = true,
  columnsCount = 4,
  searchable = false
}: RegionsGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRegions = searchTerm 
    ? regions.filter(region => 
        region.toLowerCase().includes(searchTerm.toLowerCase()))
    : regions;

  return (
    <div className={styles.regionsWrapper}>
      {searchable && (
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Поиск по регионам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )}
      
      {filteredRegions.length === 0 ? (
        <div className={styles.noResults}>
          <p>По вашему запросу "{searchTerm}" ничего не найдено</p>
        </div>
      ) : (
        <div 
          className={styles.regionsContainer}
          style={{ 
            gridTemplateColumns: `repeat(${columnsCount}, 1fr)` 
          }}
        >
          {filteredRegions.map((region, index) => (
            <div 
              key={index} 
              className={`${styles.regionItem} ${isVisible ? styles.fadeIn : ''}`}
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              <span className={styles.regionName}>{region}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};