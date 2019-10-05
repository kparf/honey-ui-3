import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Carusel from '../components/Carusel/Carusel';
import Products from '../components/Products/Products';
import Hello from '../components/Hello/Hello';
import Values from '../components/Values/Values';
import Footer from '../components/Footer/Footer';


const Index = () => (
  <Layout>
    <Header/>
    <Carusel property="slide"/>
    <Products property="product"/>
    <Hello property="hello"/>
    <Values property="valuesArticle"/>
    <Footer property="footer"/>
  </Layout>
)

Index.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Index;