"use client";

import dynamic from 'next/dynamic';

const ContactComponent = dynamic(() => import('./ContactComponent'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ContactPage() {
  return <ContactComponent />;
}
