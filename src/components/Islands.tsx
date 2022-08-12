import styled from 'styled-components';
import HEX_COLORS from '../constants/colors';

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
`;

const Big = styled.div`
	width: 100px;
	height: 30px;
	background: ${HEX_COLORS.blue.dark};
	border-top-right-radius: 70% 20px;
`;

const BigCoast = styled.div`
	position: relative;
	left: -5px;
	width: 60px;
	height: 15px;
	border-top-right-radius: 40px 100%;
	background: ${HEX_COLORS.blue.dark};
`;

const Small = styled.div`
	margin-left: 25px;
	right: 20px;
	bottom: 0px;
	height: 6px;
	border-top-left-radius: 100% 10px;
	border-top-right-radius: 100% 10px;
	width: 30px;
	background: ${HEX_COLORS.blue.dark};
`;

const Islands = () => {
	return (
		<Wrapper>
			<Big />
			<BigCoast />
			<Small />
		</Wrapper>
	);
};

export default Islands;
