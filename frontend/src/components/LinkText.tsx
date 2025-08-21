import type { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

export function LinkText({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            {...props}
            className={clsx('text-sm text-blue-600 hover:underline', className)}
        />
    );
}
