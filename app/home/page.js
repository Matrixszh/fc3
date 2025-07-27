"use client";

import dynamic from 'next/dynamic';

const HomeComponent = dynamic(() => import('./HomeComponent'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function HomePage() {
  return <HomeComponent />;
}
