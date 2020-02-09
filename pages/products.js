import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MdContent from '../components/MdComponent/MdComponent';
import Main from '../components/Main/Main';
import SectionHeader from '../components/SectionHeader/SectionHeader';


const Products = () => {
  const productPage = useStoreon('products-page')['products-page'];
  const header = <SectionHeader className="SectionHeader_left">Продукция</SectionHeader>
  return (
    <Layout>
      <Header/>
      <Main property="delivery-and-payment-page">
        <MdContent
          header={header}
          property="content"
          data={productPage.content}
        />
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