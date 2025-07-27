"use client";

import dynamic from 'next/dynamic';

const HomeCarouselComponent = dynamic(() => import('./HomeCarouselComponent'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function HomeCarouselPage() {
  return <HomeCarouselComponent />;
}
