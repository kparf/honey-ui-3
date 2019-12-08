import classNames from 'classnames';


const SectionHeader = ({ property, children, className }) => (
  <div className={classNames("SectionHeader", className)}>
    <div className="SectionHeader__wrapper">
        <h2 property={property} className="SectionHeader__text">{ children }</h2>
    </div>

    <style jsx global>{`
      .SectionHeader_left .SectionHeader__wrapper.SectionHeader__wrapper::before {
        flex-grow: 0;
      }
    `}</style>

    <style jsx>{`
      .SectionHeader {
        --default-secion-header-border-color: #0000009e;
        display: flex;
        width: 100%;
        align-items: center;
        margin: 1em 0;
      }

      .SectionHeader__text img {
        height: 50px;
        margin-left: 10px;
      }

      .SectionHeader__text {
        display: flex;
        padding: 10px;
        font-size: 2em;
        align-items: center;
        background: #fbd30391;
        border: 4px solid var(--default-secion-header-border-color);
      }

      .SectionHeader__wrapper {
        display: flex;
        width: var(--page-width);
        align-items: center;
      }

      .SectionHeader__wrapper:after,
      .SectionHeader__wrapper:before,
      .SectionHeader:after,
      .SectionHeader:before {
        content: '';
        flex-grow: 1;
        border-top: 4px solid var(--accent-color, #fbd303f0);
      }
    `}</style>
  </div>
)

export default SectionHeader;