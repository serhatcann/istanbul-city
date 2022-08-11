import styled from 'styled-components';
import SeaSide from './SeaSide';
import SkySide from './SkySide';

const Container = styled.div`
	margin: 100px auto;
	width: 1280px;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Frame = styled.div`
	width: 100%;
	height: 100%;
`;

const Scene = () => {
	return (
		<Container>
			<Frame>
				<SkySide />
				<SeaSide />
			</Frame>
		</Container>
	);
};

export default Scene;
