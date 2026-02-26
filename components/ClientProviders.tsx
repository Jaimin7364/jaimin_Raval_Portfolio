'use client';

import { ReactNode } from 'react';
import { LoadingProvider } from '../contexts/LoadingContext';

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <LoadingProvider>
      {children}
    </LoadingProvider>
  );
}
