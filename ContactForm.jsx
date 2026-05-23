import React from 'react';
import { useToast } from '@/hooks/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`rounded-lg p-4 shadow-lg text-white ${
            variant === 'destructive' ? 'bg-red-600' : 'bg-[#0A5C3E]'
          }`}
        >
          {title && <div className="font-semibold text-sm">{title}</div>}
          {description && <div className="text-sm opacity-90 mt-1">{description}</div>}
        </div>
      ))}
    </div>
  );
}
