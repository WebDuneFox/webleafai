import React from 'react';
import { clsx } from 'clsx';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={clsx(
        'flex min-h-[80px] w-full rounded-md border border-gray-600 bg-gray-800/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1EAE79] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
