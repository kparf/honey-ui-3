import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import ProductSection from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import Products__Header from '../components/Products/Products__Header';
import OrderForm from '../components/OrderForm/OrderForm';
import OrderForm__Header from '../components/OrderForm/OrderForm__Header';


const Products = () => {
  const productPage = useStoreon('products-page')['products-page'];

  return (
    <Layout>
      <Header/>
      <ProductSection
        header={<Products__Header />}
        property="product"
        data={productPage && productPage.product}
      />
      <OrderForm
        header={<OrderForm__Header />}
      />
      <Footer property="footer"/>
    </Layout>
  );
}

Products.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Products;