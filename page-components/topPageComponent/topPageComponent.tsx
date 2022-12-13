import { TopPageComponentProps } from './topPageComponent.props';
import styles from './topPageComponent.module.css';
import cn from 'classnames';
import { HhData, Htag, Tag } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='M'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={styles.title}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				{products && <Tag color='red' size='M'>hh.ru</Tag>}
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
		</div>
	);
};