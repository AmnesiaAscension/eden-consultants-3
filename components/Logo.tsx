
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-emerald-800 flex items-center justify-center rotate-45">
        <div className="w-4 h-4 bg-white/20"></div>
      </div>
      <div className="flex text-2xl leading-none">
        <span className="font-bold text-slate-900">Eden</span>
        <span className="font-light text-slate-500 ml-1">Consultants</span>
      </div>
    </div>
  );
};

export default Logo;
