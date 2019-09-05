import AddressContainer from '../AddressContainer/AddressContainer';
import PhonesContainer from '../PhonesContainer/PhonesContainer';


const Header__Information = ({ phone, address }) => (
  <div className="Header__Information">
    <AddressContainer
      address={address}
      property="address"
      icon={<img className="Header__InformationIcon" src="/static/icons/baseline-pin_drop-24px.svg"/>}/>
    <PhonesContainer
      phone={phone}
      property="phone"
      icon={<img className="Header__InformationIcon" src="/static/icons/baseline-phone-24px.svg"/>}/>

    <style jsx>{`
      .Header__Information {
        display: flex;
        align-items: center;
      }

      .Header__InformationIcon {
        height: var(--icon-height);
        margin-right: 10px;
      }
    `}</style>
  </div>
);

export default Header__Information;