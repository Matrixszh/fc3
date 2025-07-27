"use client";

import dynamic from 'next/dynamic';

const ServicesComponent = dynamic(() => import('./ServicesComponent'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ServicesPage() {
  return <ServicesComponent />;
}
