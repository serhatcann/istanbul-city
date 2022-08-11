import styled from 'styled-components';
import HEX_COLORS from '../../constants/colors';
import Islands from '../Islands';

const Sky = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	height: 25%;
	width: 100%;
	background: ${HEX_COLORS.white};
	background: linear-gradient(
		180deg,
		${HEX_COLORS.white} 0%,
		${HEX_COLORS.rose.light} 40%,
		${HEX_COLORS.rose.dark} 100%
	);
`;

const Wrapper = styled.div`
	display: flex;
`;

const SkySide = () => {
	return (
		<Sky>
			<Wrapper>
				<Islands />
			</Wrapper>
		</Sky>
	);
};

export default SkySide;
