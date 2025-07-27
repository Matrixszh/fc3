"use client";

import dynamic from 'next/dynamic';

const Services3Component = dynamic(() => import('./Services3Component'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Services3Page() {
  return <Services3Component />;
}
