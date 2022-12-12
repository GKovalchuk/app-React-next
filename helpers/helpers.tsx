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