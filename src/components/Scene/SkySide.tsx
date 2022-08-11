import styled from 'styled-components';

const Sky = styled.div`
	height: 25%;
	width: 100%;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 224, 219, 1) 40%,
		rgba(255, 180, 166, 1) 100%
	);
`;

const SkySide = () => {
	return <Sky>Sky</Sky>;
};

export default SkySide;
