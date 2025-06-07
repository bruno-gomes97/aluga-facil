import logo from '../../assets/logo.png';
import * as Styles from './Style';

const Header = () => {
	return (
		<Styles.Header>
			<Styles.Container>
				<img src={logo} alt="Imagem logo" />
				<Styles.Span>DriveNow</Styles.Span>
			</Styles.Container>
		</Styles.Header>
	)
}

export default Header;