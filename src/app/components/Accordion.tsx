// components/Accordion.tsx
import React, { useState, ReactNode, FC, Children, cloneElement, isValidElement } from 'react';

// Types pour les props
interface AccordionProps {
  children: ReactNode[];
}

interface AccordionItemProps {
  children: ReactNode[];
  isOpen?: boolean;
  onToggle?: () => void;
  index?: number;
}

interface AccordionHeaderProps {
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

interface AccordionPanelProps {
  children: ReactNode;
  isOpen: boolean;
  index: number;
}

// Composant parent Accordion
const Accordion: FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div role="tablist" aria-multiselectable="false">
      {Children.map(children, (child, index) => 
        isValidElement<AccordionItemProps>(child) 
          ? cloneElement(child, {
              isOpen: openIndex === index,
              onToggle: () => handleToggle(index),
              index,
            })
          : child
      )}
    </div>
  );
};

// Composant enfant AccordionItem
const AccordionItem: FC<AccordionItemProps> = ({ children, isOpen, onToggle, index }) => (
  <div className="accordion-item">
    {Children.map(children, (child) => 
      isValidElement<AccordionItemProps>(child)
        ? cloneElement(child, {
            isOpen,
            onToggle,
            index,
          })
        : child
    )}
  </div>
);

// Composant pour l'en-tête de l'accordion
const AccordionHeader: FC<AccordionHeaderProps> = ({ children, isOpen, onToggle, index }) => (
  <button
    id={`accordion-header-${index}`}
    aria-expanded={isOpen}
    aria-controls={`accordion-panel-${index}`}
    onClick={onToggle}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onToggle();
      }
    }}
    className="accordion-header"
  >
    {children}
    <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
  </button>
);

// Composant pour le panneau de contenu
const AccordionPanel: FC<AccordionPanelProps> = ({ children, isOpen, index }) => (
  <div
    id={`accordion-panel-${index}`}
    role="region"
    aria-labelledby={`accordion-header-${index}`}
    hidden={!isOpen}
    className="accordion-panel"
  >
    {children}
  </div>
);

// Export des composants pour réutilisation
export { Accordion, AccordionItem, AccordionHeader, AccordionPanel };
