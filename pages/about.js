import useStoreon from 'storeon/react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import { initialisation } from '../store/init';
import Footer from '../components/Footer/Footer';
import Description from '../components/Description/Description';
import Description__Header from '../components/Description/Description__Header';


const About = () => {
  const aboutPage = useStoreon('about-page')['about-page'];

  return (
    <Layout>
      <Header/>
      <Description
        header={<Description__Header />}
        property="description"
        data={aboutPage && aboutPage}
      />
      <Footer/>
    </Layout>
  )
}

About.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default About;