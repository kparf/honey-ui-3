import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import CaruselNew from '../components/Carusel/CaruselNew';
import MainProducts from '../components/MainProducts/MainProducts';
import Hello from '../components/Hello/Hello';
import Values from '../components/Values/Values';
import Footer from '../components/Footer/Footer';


const Index = () => {

  const {
    product,
    hello,
    valuesArticle,
    MainProduct,
  } = useStoreon('product', 'hello', 'valuesArticle', 'MainProduct');

  return (
    <Layout>
      <Header/>
      <CaruselNew property="slide" />
      <MainProducts property="MainProduct" data={MainProduct}/>
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