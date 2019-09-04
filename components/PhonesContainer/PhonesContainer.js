import classnames from 'classnames';

const PhonesContainer = ({ property, icon, className }) => (

  <div className="PhonesContainer">
    { icon }
    <div className="PhonesContainer__list">
        Телефон:
        <span property={property} mv-multiple mv-default="+375 11 111 111"></span>
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