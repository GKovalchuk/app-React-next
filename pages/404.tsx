import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

export function Error404(): JSX.Element {
	return (
		<Htag tag={'h1'}>
			Кажется, такой страницы не существует
		</Htag>
	);
}

export default withLayout(Error404);