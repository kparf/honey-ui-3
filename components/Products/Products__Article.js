const DEFAULT_INNER_PROERTY_SET = {
  image: 'product-image',
  price: 'price',
  name: 'name',
  description: 'description',
}

const Products__Article = ({ value, property = "product", innerProperties }) => {
  innerProperties = { ...DEFAULT_INNER_PROERTY_SET, innerProperties };

  return (
    <article property={ property }
             className="Products__Article" mv-multiple="true">
      <img property={ innerProperties.image }
          className="Products__Article-image"
          mv-default="https://via.placeholder.com/200.png"
          src={ value[innerProperties.image] }/>
      <div className="Products__Article-price-container">
        <span property={ innerProperties.price } className="Products__Article-price" mv-defautl="Цена">{ value[innerProperties.price] }</span>
      </div>
      <div className="Products__Article-info">
        <h6 property={ innerProperties.name } className="Products__Article-info-header" mv-default="Название">{ value[innerProperties.name] }</h6>
        <p property={ innerProperties.description } className="Products__Article-info-description" mv-default="Описание">{ value[innerProperties.description] }</p>
      </div>

      <style jsx>{`
        .Products__Article {
          margin: 20px 0;
          max-width: 204px;
        }

        .Products__Article-image {
          height: 200px;
          width: 200px;
          border: 2px solid black;
        }

        .Products__Article-price-container {
          width: fit-content;
          color: var(--second-color);
          background-color: var(--price-color, black);
          padding: 10px;
          font-weight: bold;
        }

        .Products__Article-info-header {
          font-size: 20px;
          margin: 0;
          padding: 10px;
          background-color: #fbd303f0;
          width: fit-content;
        }

        .Products__Article-info-description {
          margin: 0;
          color: white;
          background-color: black;
          padding: 10px;
        }
      `}</style>
    </article>
  )
}

export default Products__Article;