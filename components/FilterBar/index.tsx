import React from 'react';
import { TabNav, TabNavItem } from 'vcc-ui';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  items: string[],
  onFilterChange?(index: string): void, 
}

export const FilterBar: React.FC<FilterBarProps> = ({ items, onFilterChange }) => {
    const DEFAULT_FILTER = 'all';
    const [active, setActive] = React.useState(DEFAULT_FILTER);

    const handleFilterClick = (index: string) => {
      setActive(index);
      if (onFilterChange) onFilterChange(index);
    };

    return (
      <TabNav enableLineTransition>
        {items.map((item, index) => (
            <TabNavItem
                key={index}
                isActive={active === item}
                onClick={() => handleFilterClick(item)}
            >
                <span className={styles.label}>{item}</span>
            </TabNavItem>
        ))}
      </TabNav>
    );
};
