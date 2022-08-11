import styled from 'styled-components';

const Sea = styled.div`
	height: 75%;
	background: rgb(12, 65, 173);
	background: linear-gradient(
		0deg,
		rgba(12, 65, 173, 1) 0%,
		rgba(19, 66, 169, 1) 50%,
		rgba(79, 72, 139, 1) 70%,
		rgba(231, 87, 64, 1) 97%,
		rgba(235, 87, 62, 1) 100%
	);
`;

const SeaSide = () => {
	return <Sea>SeaSide</Sea>;
};

export default SeaSide;
