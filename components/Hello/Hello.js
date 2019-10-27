import useStoreon from 'storeon/react';
import { extractProperties } from '../../utils';


const DEFAULT_INNER_PROERTY_SET = {
  header: 'hello-header',
  info: 'hello-info',
}
const Hello = ({ property, data, innerProperties }) => {
  innerProperties = { ...DEFAULT_INNER_PROERTY_SET, innerProperties };
  const { header, info } = extractProperties(innerProperties, data);

  return (
    <div className="Hello">
      <section property="hello" className="Hello__section">
        <h2 property={ header.key } className="Hello__header" mv-default="Заголовок">{ header.value }</h2>
        <p property={ info.key } className="Hello__info" mv-default="Информация">{ info.value }</p>
      </section>

      <style jsx>{`
        .Hello {
          display: flex;
          justify-content: center;
          background: #fbd303f0;
        }
        
        .Hello__section {
          width: var(--page-width);
          padding: 40px 0;
        }
        
        .Hello__header {
          font-size: 2em;
        }
        
        .Hello__info {
          font-size: 1.5em;
        }
      `}</style>
    </div>
  )
}

export default Hello;