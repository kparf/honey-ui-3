import Head from 'next/head';
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
    hello,
    valuesArticle,
    MainProduct,
  } = useStoreon('hello', 'valuesArticle', 'MainProduct');

  return (
    <Layout>
      <Head>
        <title>Купить мед в Гомеле - натуральный натуральный мёд</title>
        <meta name="description" content="Магазин натурального меда в Гомеле и с доставкой по всей Беларуси. У нас можно купить настоящий, чистый, здоровый мёд, собранный с любовью "></meta>
      </Head>
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