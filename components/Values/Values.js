import useStoreon from 'storeon/react';
import ValuesArticle from './Values__Article';


const Values = ({ property, data }) => {

  return (
    <div className="Values">
      <section className="Values__section section">
        <div className="Values__content">
          {
            data
              ? data.map( (value, index) => <ValuesArticle key={index} value={ value } /> )
              : false
          }
        </div>
      </section>

      <style jsx>{`
        .Values__section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .Values__content {
          width: var(--page-width);
          display: flex;
          padding: 50px 0;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  )
}

export default Values;