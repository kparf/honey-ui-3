import useStoreon from 'storeon/react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import { initialisation } from '../store/init';
import Footer from '../components/Footer/Footer';
import Description from '../components/Description/Description';
import Description__Header from '../components/Description/Description__Header';


const Contacts = () => {
  const contactsPage = useStoreon('contacts-page')['contacts-page'];

  return (
    <Layout>
      <Header/>
      <Description
        header={<Description__Header />}
        property="description"
        data={contactsPage && contactsPage}
      />
      <Footer/>
    </Layout>
  )
}

Contacts.getInitialProps = async function(props) {
  const initData = await initialisation(props.store);
  return { initData }
}

export default Contacts;