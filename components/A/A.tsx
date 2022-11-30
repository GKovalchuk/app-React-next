import { AProps } from './A.props';
import styles from './A.module.css';
import cn from 'classnames';

export const A = ({ size = 'M', children, className, ...props }: AProps): JSX.Element => {
	return (
		<a
			className={cn(styles.a, className, {
				[styles.S]: size == 'S',
				[styles.M]: size == 'M',
				[styles.L]: size == 'L',

			})}
			href="#"
			target="blank"
			{...props}
		>
			{children}
		</a>
	);
};