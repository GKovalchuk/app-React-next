import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, TextArea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	type numberOrNull = number | null;
	const [counter, setCounter] = useState<number>(0);
	const arr: Array<numberOrNull> = [];
	useEffect(() => {
		console.log('counter:' + counter);
		arr.push(1);
	});

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>{counter}</Htag>
			<Button appearance='primary' arrow='right' onClick={() => setCounter(counter => counter + 1)}>Button</Button>
			<Button appearance='ghost' arrow='right' onClick={() => setCounter(0)}>Button</Button>
			<P size='L'>Большой</P>
			<P size='M'>Средний</P>
			<P size='S'>Маленький</P>
			<Tag size='S'>Мал</Tag>
			<Tag size='M' color='grey'>СредСер</Tag>
			<Tag size='M' color='primary'>СредПрайм</Tag>
			<Tag size='S' color='green'>МалЗел</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating} />
			<Input placeholder='test' />
			<TextArea placeholder='test test test' />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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
