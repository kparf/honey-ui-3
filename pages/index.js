import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Carusel from '../components/Carusel/Carusel';
import Products from '../components/Products/Products';
import Hello from '../components/Hello/Hello';
import Values from '../components/Values/Values';
import Footer from '../components/Footer/Footer';


const Index = () => {

  const {
    product,
    hello,
    valuesArticle,
  } = useStoreon('product', 'hello', 'valuesArticle');

  return (
    <Layout>
      <Header/>
      <Carusel property="slide"/>
      <Products property="product" data={product}/>
      <Hello property="hello" data={hello}/>
      <Values property="valuesArticle" data={valuesArticle}/>
      <Footer property="footer"/>
    </Layout>
  )
}

Index.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Index;