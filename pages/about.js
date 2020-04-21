import useStoreon from 'storeon/react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { initialisation } from '../store/init';
import Footer from '../components/Footer/Footer';
import Description from '../components/Description/Description';
import SectionHeader from '../components/SectionHeader/SectionHeader';


const About = () => {
  const aboutPage = useStoreon('about-page')['about-page'];
  const header = <SectionHeader className="SectionHeader_left">Пасека</SectionHeader>

  return (
    <Layout>
      <Header/>
      <Main property="about-page">
        <Description
          header={header}
          property="description"
          data={aboutPage}
        />
      </Main>
      <Footer/>
    </Layout>
  )
}

About.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default About;