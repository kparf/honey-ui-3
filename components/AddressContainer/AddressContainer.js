import classnames from 'classnames';

const AddressContainer = ({ className, property, icon, address = [] }) => (
  <div className={ classnames(className, 'AddressContainer') }>
    { icon }
    <div className="AddressContainer__list header__list">
      Адрес:
      {
        address.map((item, index) => <span key={index} property={property} mv-multiple="true" mv-default="Адрес">{ item }</span>)
      }
    </div>


    <style jsx>{`
      .AddressContainer {
        display: flex;
        align-items: center;
      }

      .AddressContainer__list {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
)

export default AddressContainer;