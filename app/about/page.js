"use client";

import dynamic from 'next/dynamic';

const AboutComponent = dynamic(() => import('./AboutComponent'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function AboutPage() {
  return <AboutComponent />;
}
