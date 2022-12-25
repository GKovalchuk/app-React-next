import IconMenuBooks from './icons/iconMenuBooks.svg';
import IconMenuCourses from './icons/iconMenuCourses.svg';
import IconMenuServices from './icons/iconMenuServices.svg';
import IconMenuProducts from './icons/iconMenuProducts.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <IconMenuCourses />, id: TopLevelCategory.Courses, },
	{ route: 'services', name: 'Сервисы', icon: <IconMenuServices />, id: TopLevelCategory.Services, },
	{ route: 'books', name: 'Книги', icon: <IconMenuBooks />, id: TopLevelCategory.Books, },
	{ route: 'products', name: 'Товары', icon: <IconMenuProducts />, id: TopLevelCategory.Products, },
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};