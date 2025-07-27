"use client";

import dynamic from 'next/dynamic';

// Import the actual page component with SSR disabled
const Services1Component = dynamic(() => import('./Services1Component'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Services1Page() {
  return <Services1Component />;
}
