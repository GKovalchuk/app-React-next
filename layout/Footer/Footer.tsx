import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { P } from '../../components';
import { A } from '../../components/A/A';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<P className={styles.copyright}>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</P>
			<A className={styles.agreement}>Пользовательское соглашение</A>
			<A className={styles.policy}>Политика кофиденциальности</A>
		</footer>
	);
};