import SectionHeader from '../SectionHeader/SectionHeader'


const OrderForm__Header = ({ children }) => (
  <>
    <SectionHeader className="OrderForm__Header SectionHeader_left">
      Форма заказа <img className="OrderForm__Header-logo" src="/images/form-logo.svg" />
    </SectionHeader>
    <style jsx>{`
      .OrderForm__Header-logo {
        height: 50px;
        margin-left: 10px;
      }
    `}</style>
  </>
)

export default OrderForm__Header;