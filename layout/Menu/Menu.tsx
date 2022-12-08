import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import IconMenuBooks from './icons/iconMenuBooks.svg';
import IconMenuCourses from './icons/iconMenuCourses.svg';
import IconMenuServices from './icons/iconMenuServices.svg';
import IconMenuProducts from './icons/iconMenuProducts.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <IconMenuCourses />, id: TopLevelCategory.Courses, },
	{ route: 'services', name: 'Сервисы', icon: <IconMenuServices />, id: TopLevelCategory.Services, },
	{ route: 'books', name: 'Книги', icon: <IconMenuBooks />, id: TopLevelCategory.Books, },
	{ route: 'products', name: 'Товары', icon: <IconMenuProducts />, id: TopLevelCategory.Products, },
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menu.id == firstCategory
							})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>
							{m._id.secondCategory}
						</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{/*m.isOpened &&*/ buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
			))
		);
	};

	return (
		<div>
			{buildFirstLevel()}
		</div>
	);
};