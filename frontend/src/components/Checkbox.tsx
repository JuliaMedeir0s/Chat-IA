import type { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
    return (
        <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500"
                {...props}
            />
            {label}
        </label>
    );
}
