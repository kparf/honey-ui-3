import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const Products = () => {
  const deliveryAndPaymentPage = useStoreon('delivery-and-payment-page')['delivery-and-payment-page'];

  return (
    <Layout>
      <Header/>
      <Footer property="footer"/>
    </Layout>
  );
}

Products.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Products;