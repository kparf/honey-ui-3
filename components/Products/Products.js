import Products__Article from './Products__Article';
import Link from 'next/link';


const Products = ({ property, data, header }) => {

  return (
    <div className="Products">
      <section className="Products__section">
        { header }
        <div className="Products__content">
          {
            data ? data.map( (product, index) => {
              return (
                <Products__Article
                  className={'Products__Article_withMargin'}
                  key={ index }
                  value={ product }
                  href="/products"
                />
              )
            }) : false
          }
        </div>
      </section>
      <style jsx>{`
        .Products {
          --price-color: var(--app-main-color);
        }

        .Products__section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .Products__content {
          display: flex;
          padding: 50px 0;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }

        .products__header .section__header-wrapper::before {
          flex-grow: 0;
        }
      `}</style>
    </div>
  )
}


export default Products;