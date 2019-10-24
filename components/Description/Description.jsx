const DEFAULT_INNER_PROERTY_SET = {
  description: 'description',
}

const DescriptionSection = ({ property, data, header, innerProperties = {}  }) => {
  innerProperties = { ...DEFAULT_INNER_PROERTY_SET, ...innerProperties };

  return (
    <div className="description">
      <section className="description__section">
        { header }
        <div className="description__content">
          <article property="description" mv-default="Контент" className="description__content-container markdown">
            { data && data[innerProperties.description] }
          </article>
        </div>
      </section>
      <style jsx>{`
        .description {
          width: 100%;
          justify-content: center;
        }

        .description__section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .description__content-container {
          width: var(--page-width);
          background: #000;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
          font-size: 1.2em;
          border: 4px solid var(--accent-color);
        }

        .description__content {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          line-height: 1.7em;
        }

        .description__content h1,
        .description__content h2,
        .description__content h3,
        .description__content h4,
        .description__content h5,
        .description__content h6 {
          color: var(--accent-color);
        }

        .description__content a {
          color: var(--accent-color);
        }
      `}</style>
    </div>
  )
};

export default DescriptionSection;