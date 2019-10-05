const DEFAULT_INNER_PROERTY_SET = {
  image: 'image',
  header: 'header',
  description: 'description',
}

const Values__Article = ({ value, property = 'valuesArticle', innerProperties = {} }) => {
  innerProperties = { ...DEFAULT_INNER_PROERTY_SET, ...innerProperties };

  return (
    <article className="Values__Article" property={ property } mv-multiple="true">
      <img
        className="Values__Article-image"
        property={ innerProperties.image }
        src={ value[innerProperties.image] }
        mv-default="https://via.placeholder.com/300x500.png" />
      <div className="Values__Article-info">
        <h6 className="Values__Article-header" property={ innerProperties.header } mv-default="Заголовок">
          { value[innerProperties.header] }
        </h6>
        <p className="Values__Article-description" property={ innerProperties.description } mv-default="Описание">
          { value[innerProperties.description] }
        </p>
      </div>

      <style jsx>{`
        .Values__Article-image {
          width: 300px;
          height: 500px;
          border: 2px solid var(--accent-color);
        }

        .Values__Article {
          max-width: 304px;
          margin: 10px 0;
        }

        .Values__Article-header {
          font-size: 20px;
          font-weight: bold;
          padding: 10px;
          background-color: var(--accent-color);
          width: fit-content;
        }

        .Values__Article-description {
          font-size: 20px;
          padding: 10px;
          background-color: var(--app-main-color);
          color: var(--second-color);
          width: fit-content;
        }
      `}</style>
    </article>
  )
}

export default Values__Article;