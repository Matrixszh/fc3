"use client";

import dynamic from 'next/dynamic';

const Services4Component = dynamic(() => import('./Services4Component'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Services4Page() {
  return <Services4Component />;
}
