import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

function Error500(): JSX.Element {
	return (
		<>
			<Htag tag={'h1'}>Эта страничка болеет. Навестите ее попозже</Htag>
		</>
	);
}


export default withLayout(Error500);