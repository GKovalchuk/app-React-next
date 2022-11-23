import React, { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {
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
		</>
	);
}
