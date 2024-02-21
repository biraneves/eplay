// Styled Components
import { Container, FooterSection, Link, Links, SectionTitle } from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link title="Jogos de RPG" to="/categorias#rpg">
              RPG
            </Link>
          </li>
          <li>
            <Link title="Jogos de ação" to="/categorias#action">
              Ação
            </Link>
          </li>
          <li>
            <Link title="Jogos de esportes" to="/categorias#sport">
              Esportes
            </Link>
          </li>
          <li>
            <Link title="Jogos de simulação" to="/categorias#simulation">
              Simulação
            </Link>
          </li>
          <li>
            <Link title="Jogos de luta" to="/categorias#fighting">
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title="Link para a seção de promoções" to="/#on-sale">
              Promoções
            </Link>
          </li>
          <li>
            <Link title="Link para a seção em breve" to="/#coming-soon">
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>&copy; {currentYear} E-PLAY. Todos os direitos reservados.</p>
    </div>
  </Container>
);

export default Footer;
