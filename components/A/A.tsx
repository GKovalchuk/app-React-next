import { AProps } from './A.props';
import styles from './A.module.css';
import cn from 'classnames';

export const A = ({ size = 'M', href = "#", children, className, ...props }: AProps): JSX.Element => {
	return (
		<a
			className={cn(styles.a, className, {
				[styles.S]: size == 'S',
				[styles.M]: size == 'M',
				[styles.L]: size == 'L',
				[styles.LWithMargin]: size == 'LWithMargin'
			})}
			href={href}
			target="blank"
			{...props}
		>
			{children}
		</a>
	);
};