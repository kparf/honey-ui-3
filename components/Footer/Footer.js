import useStoreon from 'storeon/react'
import { extractProperties } from '../../utils';
import Social from '../Social/Social';

const DEFAULT_INNER_PROERTY_SET = {
  social: 'social',
  info: 'info',
};
const DEFAULT_INFO_INNER_PROERTY_SET = {
  text: 'text',
};

const Footer = ({ property = "footer", innerProperties= {} }) => {

  const data = useStoreon(property)[property];
  innerProperties = { ...DEFAULT_INNER_PROERTY_SET, ...innerProperties };
  const { social, info } = extractProperties(innerProperties, data);

  const { text } = extractProperties(DEFAULT_INFO_INNER_PROERTY_SET, info.value);


  return (
    <footer property={ property }>
      <div className="Socials-container">
        {
          social.value
            ? social.value.map((socialItem, index) => <Social key={ index } property={ social.key } value={ socialItem }/>) 
            : false
        }
      </div>

      <div className="Footer-devider"></div>

      <div property={ info.key } className="Info-container">
        <span property={ text.key } className="Footer__text" mv-default="Текст">{ text.value }</span>
      </div>


      <style jsx>{`
        footer {
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          margin: 50px 0;
          padding-top: 10px;
          align-items: center;
        }

        .Footer-devider {
          border-top: 4px solid var(--accent-color);
          align-self: stretch;
          margin: 20px 0;
        }

        .Info-container {
          display: flex;
          width: var(--page-width);
          font-size: 1.5em;
          text-align: center;
          color: var(--second-color);
          background-color: var(--app-main-color);
          padding: 10px;
          box-sizing: border-box;
        }

        .Socials-container {
          display: flex;
          width: var(--page-width);
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}

export default Footer;