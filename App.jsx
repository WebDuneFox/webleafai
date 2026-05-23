import React from 'react';
import { clsx } from 'clsx';

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      className={clsx(
        'flex h-10 w-full rounded-md border border-gray-600 bg-gray-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#1EAE79] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = 'Select';

export { Select };
