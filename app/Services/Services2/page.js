"use client";

import dynamic from 'next/dynamic';

const Services2Component = dynamic(() => import('./Services2Component'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Services2Page() {
  return <Services2Component />;
}
