import styled from 'styled-components';
import HEX_COLORS from '../constants/colors';

const Wrapper = styled.div`
	position: relative;
	width: 250px;
	display: flex;
	justify-content: space-between;
`;

const Big = styled.div`
	position: relative;
	bottom: 0px;
	left: 0px;
	width: 100px;
	height: 30px;
	background: ${HEX_COLORS.blue.dark};
	border-top-right-radius: 30px;
	&:after {
		content: '';
		position: absolute;
		bottom: 0px;
		width: 40px;
		height: 0px;
		left: 90px;
		border-bottom: 15px solid ${HEX_COLORS.blue.dark};
		border-right: 35px solid transparent;
	}
`;

const Small = styled.div`
	position: absolute;
	right: 20px;
	bottom: 0px;
	height: 7px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	width: 30px;
	background: ${HEX_COLORS.blue.dark};
`;

const Islands = () => {
	return (
		<Wrapper>
			<Big />
			<Small />
		</Wrapper>
	);
};

export default Islands;
