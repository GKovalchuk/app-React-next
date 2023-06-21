import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 'S' | 'M' | 'MWithMargin' | 'L' | 'LWithMargin';
	children: ReactNode;
}