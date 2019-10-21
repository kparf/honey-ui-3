import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import ProductSection from '../components/Products/Products';
import Footer from '../components/Footer/Footer';


const Products = () => {
  const { product } = useStoreon('product');
  return (
    <Layout>
      <Header/>
      <ProductSection property="product" data={product}/>
      <Footer property="footer"/>
    </Layout>
  );
}

Products.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Products;