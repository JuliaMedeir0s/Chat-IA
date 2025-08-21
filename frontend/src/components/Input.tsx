import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
}

export function Input({ icon: Icon, className, ...props }: InputProps) {
    return (
        <div className="relative w-full">
            {Icon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Icon className="w-5 h-5" />
                </div>
            )}
            <input
                {...props}
                className={clsx(
                    'w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
                    className,
                )}
            />
        </div>
    );
}