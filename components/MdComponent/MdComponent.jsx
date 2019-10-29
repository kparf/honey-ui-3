import ReactMarkdown from 'react-markdown/with-html';
import { Converter } from 'showdown';


const converter = new Converter();
converter.setOption('simpleLineBreaks', true);
converter.setOption('encodeEmails', false);

const MdComponent = ({ property, data, header, innerProperties = {}  }) => {
  
  const htmlData = data && converter.makeHtml(data);

  return (
    <div className="MdComponent">
      <section className="MdComponent__section">
        { header }
        <div className="MdComponent__content">
          <article
            property={property}
            mv-default="Контент"
            className="MdComponent__content-container markdown"
            dangerouslySetInnerHTML={{__html: htmlData}}
          />
        </div>
      </section>
      <style jsx>{`
        .MdComponent {
          width: 100%;
          justify-content: center;
        }

        .MdComponent__section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .MdComponent__content-container {
          width: var(--page-width);
          background: #000;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
          font-size: 1.2em;
          border: 4px solid var(--accent-color);
        }

        .MdComponent__content {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          line-height: 1.7em;
        }

      `}</style>
      <style jsx global>{`
        .MdComponent__content h1,
        .MdComponent__content h2,
        .MdComponent__content h3,
        .MdComponent__content h4,
        .MdComponent__content h5,
        .MdComponent__content h6 {
          color: var(--accent-color);
        }

        .MdComponent__content a {
          color: var(--accent-color);
        }
      `}</style>
    </div>
  )
};

export default MdComponent;