import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'M', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.S]: size == 'S',
				[styles.M]: size == 'M',
				[styles.MWithMargin]: size == 'MWithMargin',
				[styles.L]: size == 'L',
				[styles.LWithMargin]: size == 'LWithMargin'
			})}
			{...props}
		>
			{children}
		</p>
	);
};