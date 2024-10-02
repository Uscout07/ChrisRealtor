// pages/construction.js
import React from 'react';
import { IconBuilding } from '@tabler/icons-react'; // Import the construction sign icon
import Head from 'next/head';

export default function ConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffdfa]" id='Under_Construction'>
      <Head>
        <title>Page Under Construction</title>
      </Head>
      <IconBuilding size={64} className="text-yellow-500 mb-4" /> {/* Construction Icon */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Page Under Construction</h1>
      <p className="text-lg text-gray-600">
        This page will be made as per the client's requirements.
      </p>
    </div>
  );
}
