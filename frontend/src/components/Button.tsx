import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={clsx(
                'w-full py-2 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-600 to-teal-500 hover:opacity-90 transition',
                className
            )}
        >
            {children}
        </button>
    );
}