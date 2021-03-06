import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const DEFAULT_INNER_PROERTY_SET = {
  image: 'product-image',
  price: 'price',
  name: 'name',
  description: 'description',
}

const Products__Article = ({ className, value, property = "product", innerProperties = {}, href}) => {
  innerProperties = { ...DEFAULT_INNER_PROERTY_SET, ...innerProperties };

  return (
    <article property={ property }
             className={classNames('Products__Article', className)} mv-multiple="true">
      <Link href={href}>
        <img property={ innerProperties.image }
            className={classNames('Products__Article-image', {
              Products__Article_clickable: !!href,
            })}
            mv-default="https://via.placeholder.com/200.png"
            src={ value[innerProperties.image] }
        />
      </Link>
      {
        value[innerProperties.price] && (
          <div className="Products__Article-price-container">
            <span property={ innerProperties.price } className="Products__Article-price" mv-defautl="Цена">{ value[innerProperties.price] }</span>
          </div>
        )
      }
      <div className="Products__Article-info">
        {
          value[innerProperties.name] && (
            <h6 property={ innerProperties.name } className="Products__Article-info-header" mv-default="Название">{ value[innerProperties.name] }</h6>
          )
        }
        {
          value[innerProperties.description] && (
            <p property={ innerProperties.description } className="Products__Article-info-description" mv-default="Описание">{ value[innerProperties.description] }</p>
          )
        }
      </div>
      <style jsx global>{`
        .Products__Article_clickable {
          transition: all 0.3s;
        }

        .Products__Article_clickable:hover {
          cursor: pointer;
          transform: scale(1.1);
        }

        .Products__Article_withMargin.Products__Article_withMargin.Products__Article_withMargin {
          margin: 10px;
        }
      `}</style>
      <style jsx>{`

        .Products__Article {
          margin: 20px 0;
          max-width: 204px;
        }

        .Products__Article-image {
          height: 200px;
          width: 200px;
          border: 2px solid var(--app-main-color);
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
          font-weight: bold;
          margin: 0;
          padding: 10px;
          /*background-color: #fbd303f0;*/
          width: fit-content;
        }

        .Products__Article-info-description {
          margin: 0;
          color: white;
          background-color: var(--app-main-color);
          padding: 10px;
        }
      `}</style>
    </article>
  )
}

export default Products__Article;