import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import MainProducts from '../components/MainProducts/MainProducts';


const Products = () => {
  const { MainProduct } = useStoreon('MainProduct');
  return (
    <Layout>
      <Header/>
      <Main>
        <SectionHeader className="SectionHeader_left">Продукция</SectionHeader>
        <MainProducts property="MainProduct" data={MainProduct}/>
      </Main>
      <Footer property="footer"/>
    </Layout>
  );
}

Products.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Products;