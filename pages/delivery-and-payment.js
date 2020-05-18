import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MdContent from '../components/MdComponent/MdComponent';
import Main from '../components/Main/Main';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import OrderForm from '../components/OrderForm/OrderForm';


const DeliveryAndPayment = () => {
  const deliveryAndPaymentPage = useStoreon('delivery-and-payment-page')['delivery-and-payment-page'];
  const header = <SectionHeader className="SectionHeader_left">Доставка и оплата</SectionHeader>
  return (
    <Layout>
      <Header/>
      <Main property="delivery-and-payment-page">
        <MdContent
          header={header}
          property="content"
          data={deliveryAndPaymentPage.content}
        />
      </Main>
      <OrderForm />
      <Footer property="footer"/>
    </Layout>
  );
}

DeliveryAndPayment.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default DeliveryAndPayment;