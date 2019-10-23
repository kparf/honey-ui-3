import SectionHeader from '../SectionHeader/SectionHeader'


const Products__Header = ({ children }) => (
  <>
    <SectionHeader className="Products__Header SectionHeader_left">
      Продукция <img className="Products__Header-logo" src="/images/products-logo.svg" />
    </SectionHeader>
    <style jsx>{`
      .Products__Header-logo {
        height: 50px;
        margin-left: 10px;
      }
    `}</style>
  </>
)

export default Products__Header;