import classnames from 'classnames';

const AddressContainer = ({ className, property, icon }) => (
  <div className={ classnames(className, 'AddressContainer') }>
    { icon }
    <div className="AddressContainer__list header__list">
      Адрес:
      <span property={property} mv-multiple mv-default="Адрес"></span>
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