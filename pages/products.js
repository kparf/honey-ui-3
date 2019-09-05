import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';

const Products = () => (
  <Layout>
    <Header/>
    Продукты
  </Layout>
)

Products.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Products;