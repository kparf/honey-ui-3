import classnames from 'classnames';

const PhonesContainer = ({ property, icon, className, phone = []}) => (

  <div className="PhonesContainer">
    { icon }
    <div className="PhonesContainer__list">
        Телефон:
        {
          phone.map( (item, index) => <span key={index} property={property} mv-multiple="true" mv-default="+375 11 111 111">{ item }</span>)
        }
    </div>


    <style jsx>{`
      .PhonesContainer {
        display: flex;
        align-items: center;
      }

      .PhonesContainer__list {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>

);

export default PhonesContainer;