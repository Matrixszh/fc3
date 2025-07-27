"use client";

import dynamic from 'next/dynamic';

const GalleryComponent = dynamic(() => import('./GalleryComponent'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function GalleryPage() {
  return <GalleryComponent />;
}
