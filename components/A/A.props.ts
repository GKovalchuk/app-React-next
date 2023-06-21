import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface AProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	size?: 'S' | 'M' | 'L' | 'LWithMargin';
	children: ReactNode;
	href?: string;
}