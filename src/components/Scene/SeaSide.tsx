import styled from 'styled-components';
import HEX_COLORS from '../../constants/colors';

const Sea = styled.div`
	height: 75%;
	background: ${HEX_COLORS.blue.sea_dark};
	background: linear-gradient(
		0deg,
		${HEX_COLORS.blue.sea_dark} 0%,
		${HEX_COLORS.blue.sea_light} 50%,
		${HEX_COLORS.purple} 70%,
		${HEX_COLORS.orange} 97%,
		${HEX_COLORS.orange} 100%
	);
`;

const SeaSide = () => {
	return <Sea></Sea>;
};

export default SeaSide;
