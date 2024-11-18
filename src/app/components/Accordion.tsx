// components/Accordion.tsx
import React, { useState, ReactNode, FC, Children, cloneElement, isValidElement, useRef } from 'react';

// Types pour les props
interface AccordionProps {
  children: ReactNode[];
}

interface AccordionItemProps {
  children: ReactNode[];
  isOpen?: boolean;
  onToggle?: () => void;
  index?: number;
  headerRef?: (el: HTMLButtonElement | null) => void;
}

interface AccordionHeaderProps {
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  headerRef: (el: HTMLButtonElement | null) => void;
}

interface AccordionPanelProps {
  children: ReactNode;
  isOpen: boolean;
  index: number;
}

// Composant parent Accordion
const Accordion: FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headersRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % children.length;
      headersRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + children.length) % children.length;
      headersRefs.current[prevIndex]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      headersRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      headersRefs.current[children.length - 1]?.focus();
    }
  };

  return (
    <div role="tablist" aria-multiselectable="false">
      {Children.map(children, (child, index) =>
        isValidElement<AccordionItemProps>(child)
          ? cloneElement(child, {
              isOpen: openIndex === index,
              onToggle: () => handleToggle(index),
              index,
              headerRef: (el: HTMLButtonElement | null) => {
                headersRefs.current[index] = el;
              },
            })
          : child
      )}
    </div>
  );
};

// Composant enfant AccordionItem
const AccordionItem: FC<AccordionItemProps> = ({ children, isOpen, onToggle, index, headerRef }) => (
  <div className="accordion-item border border-gray-300 rounded-lg mb-2 overflow-hidden">
    {Children.map(children, (child) =>
      isValidElement<AccordionItemProps>(child)
        ? cloneElement(child, {
            isOpen,
            onToggle,
            index,
            headerRef,
          })
        : child
    )}
    {isOpen && (
      <div aria-live="polite" className="sr-only">
        {`Panneau ${index !== undefined ? index + 1 : ''} ${isOpen ? 'ouvert' : 'fermé'}`}
      </div>
    )}
  </div>
);

// Composant pour l'en-tête de l'accordion
const AccordionHeader: FC<AccordionHeaderProps> = ({ children, isOpen, onToggle, index, headerRef }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <button
      id={`accordion-header-${index}`}
      aria-expanded={isOpen}
      aria-controls={`accordion-panel-${index}`}
      onClick={onToggle}
      onKeyDown={(e) => handleKeyDown(e)}
      ref={headerRef}
      className="accordion-header w-full text-left p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
    >
      {children}
      <span className="float-right" aria-hidden="true">
        {isOpen ? '-' : '+'}
      </span>
    </button>
  );
};

// Composant pour le panneau de contenu
const AccordionPanel: FC<AccordionPanelProps> = ({ children, isOpen, index }) => (
  <div
    id={`accordion-panel-${index}`}
    role="region"
    aria-labelledby={`accordion-header-${index}`}
    hidden={!isOpen}
    className={`accordion-panel p-4 transition-all duration-300 ease-in-out ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    {children}
  </div>
);

// Export des composants pour réutilisation
export { Accordion, AccordionItem, AccordionHeader, AccordionPanel };
