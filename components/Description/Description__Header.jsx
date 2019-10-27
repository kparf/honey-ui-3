import SectionHeader from '../SectionHeader/SectionHeader'


const Description__Header = ({ children }) => (
  <>
    <SectionHeader className="Description__Header SectionHeader_left">
      О нас<img className="Description__Header-logo" src="/images/products-logo.svg" />
    </SectionHeader>
    <style jsx>{`
      .Description__Header-logo {
        height: 50px;
        margin-left: 10px;
      }
    `}</style>
  </>
)

export default Description__Header;