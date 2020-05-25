import Head from 'next/head';
import useStoreon from 'storeon/react';
import { initialisation } from '../../store/init';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MdContent from '../../components/MdComponent/MdComponent';
import Main from '../../components/Main/Main';
import SectionHeader from '../../components/SectionHeader/SectionHeader';


const Products = () => {
  const router = useRouter();
  const { slug } = router.query;
  const products = useStoreon('MainProduct')['MainProduct'];
  const currentProduct = products.filter(product => product.slug === slug)[0]
  return (
    <Layout>
      {
        (slug === 'natural') && (
          <Head>
            <title>Купить натуральный мед в Гомеле - Семейная пасека </title>,
            <meta name="description" content="Купить натуральный мёд в Гомеле можно на нашей семейной пасеке по выгодным ценам. Наша команда принимает участие в различных ярмарках, вывозим пчёл на медосбор, заботимся об их здоровье. "></meta>
          </Head>
        )
      }
      {
        (slug === 'crem') && (
          <Head>
                <title>Купить крем-мёд в Гомеле с доставкой</title>,
                <meta name="description" content="Купить крем-мёд в Гомеле можно у нас на сайте с доставкой и по выгодным ценам! Фото, цены меда. Спешите заказать нежное лакомство! "></meta>
          </Head>
        )
      }
      <Header/>
      <Main>
        {
          currentProduct && (
            <MdContent
              header={(
                <SectionHeader
                  className="SectionHeader_left"
                  imgSrc={currentProduct['product-image']}
                >
                  {currentProduct.name}
                </SectionHeader>
              )}
              data={currentProduct.text}
            />
          )
        }
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