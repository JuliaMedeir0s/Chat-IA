import type { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label
            {...props}
            className={clsx('text-sm font-medium text-gray-700 block mb-1', className)}
        />
    );
}
