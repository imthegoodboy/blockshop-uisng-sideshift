import React from 'react';

export default function SideShiftBanner() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <span className="flex items-center">
            <span className="flex items-center text-sm font-medium">
              <span className="hidden md:inline">🚀 Powered by </span>
              <img
                src="https://images.ctfassets.net/23fkqdsgbpuj/1cKwj8jvGmJz9aErPUs4aA/ad0fad2afe07885fff48158975bc0dde/sideshift-mini.png"
                alt="SideShift"
                className="h-5 mx-2"
              />
              <span className="hidden sm:inline"> - Accept </span>
              <span className="font-bold mx-1">50+ cryptocurrencies</span>
              <span className="hidden sm:inline">instantly</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}