import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white text-gray-900">
      <div className="w-14 h-14 border-4 border-[#00A2C9] border-t-transparent rounded-full animate-spin mb-4" />
      <span className="text-sm font-bold tracking-wider text-gray-600">
        Loading Zendel Services...
      </span>
    </div>
  );
}
