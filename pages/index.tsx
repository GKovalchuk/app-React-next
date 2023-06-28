import { GetStaticProps } from 'next';
import { Htag, P } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import Link from 'next/link';
import { A } from '../components/A/A';
function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>
				Приложение на TypeScript + Next.JS.
			</Htag>
			<Htag tag='h2'>Использованные библиотеки:</Htag>
			<ul>
				<li>axios</li>
				<li>classnames</li>
				<li>date-fns</li>
				<li>framer-motion</li>
				<li>react-hook-form</li>
			</ul>
			<Htag tag='h2'>
				В проекте работает меню "Курсы". Выберите категорию в меню "Курсы".
			</Htag>
			<P size={'LWithMargin'}>
				Ознакомится с подробностями можно&nbsp;
				<A size={'LWithMargin'} href={'https://github.com/GKovalchuk/app-React-next'}>
					на моем GitHub
				</A>
			</P>
			<P size={'LWithMargin'} >
				Docker контейнер&nbsp;
				<A size={'LWithMargin'} href={'https://github.com/GKovalchuk/app-React-next/pkgs/container/app-react-next%2Ftop-app-demo'}>
					GitHub Packages
				</A>
			</P>
			<P size={'LWithMargin'} >
				Установка через командную строку:
			</P>
			<P size={'LWithMargin'} >
				% docker pull ghcr.io/gkovalchuk/app-react-next/top-app-demo:develop
			</P >

		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
