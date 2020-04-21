import useStoreon from 'storeon/react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { initialisation } from '../store/init';
import Footer from '../components/Footer/Footer';
import Description from '../components/Description/Description';
import SectionHeader from '../components/SectionHeader/SectionHeader';


const Contacts = () => {

  const contactsPage = useStoreon('contacts-page')['contacts-page'];
  const header = <SectionHeader className="SectionHeader_left">Контакты</SectionHeader>

  return (
    <>
      <Layout>
        <Header/>
        <Main property="contacts-page">
          <Description
            header={header}
            property="description"
            data={contactsPage}
          />
        </Main>
        <div className="mapWrapper">
          <iframe
            className="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afb1cdb0b9acfb40ca4aa65daa33e4533d7d554eb61f4bb2a6c92c2987593de3b&amp;source=constructor"
            width="1060"
            height="400"
            frameborder="0">
          </iframe>
        </div>
        <Footer/>
      </Layout>
      <style jsx>{`
        .mapWrapper {
          display: flex;
          justify-content: center;
          margin-top: 2em;
        }

        .mapWrapper .map {
          border: 4px solid var(--accent-color);
        }
      `}</style>
    </>
  )
}

Contacts.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Contacts;