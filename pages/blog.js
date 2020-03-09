import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Posts from '../components/Posts/Posts';
import Main from '../components/Main/Main';


const Products = () => {
  const blogPage = useStoreon('blog-page')['blog-page'];

  return (
    <Layout>
      <Header/>
      <Main property="blog-page">
        <Posts property="posts" data={blogPage && blogPage.posts}/>
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