import useStoreon from 'storeon/react';
import { initialisation } from '../store/init';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Posts from '../components/Posts/Posts';
import Main from '../components/Main/Main';
import Description from '../components/Description/Description';
import SectionHeader from '../components/SectionHeader/SectionHeader';


const Products = () => {
  const blogPage = useStoreon('blog-page')['blog-page'];
  const header = <SectionHeader className="SectionHeader_left">Блог</SectionHeader>

  return (
    <Layout>
      <Header/>
      <Main property="blog-page">
         <Description
            header={header}
            property="description"
            data={{ description: 'В разработке' }}
          />
        { /*<Posts property="posts" data={blogPage && blogPage.posts}/> */ }
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