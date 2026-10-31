import { useEffect } from 'react';

export interface PageSEOProps {
  title: string;
  description?: string;
}

export const usePageSEO = ({ title, description }: PageSEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description if provided
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
};
