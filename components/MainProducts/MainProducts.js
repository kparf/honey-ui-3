import MainProducts__Article from './MainProducts__Article';
import Link from 'next/link';


const MainProducts = ({ property, data, header }) => {

  return (
    <div className="Products">
      <section className="Products__section">
        { header }
        <div className="MainProducts__content">
          {
            data ? data.map( (product, index) => {
              return (
                <MainProducts__Article
                  className={'Products__Article_withMargin '}
                  key={ index }
                  value={ product }
                  href={`/product/${product.slug}`}
                />
              )
            }) : false
          }
          {
            !(data && data.length > 0) && (
              <MainProducts__Article
                className="EmptyItem"
                href="#"
                value={{
                  'product-image': '',
                  name: 'name',
                }}
              />
            )
          }
        </div>
      </section>
      <style jsx global>{`
        body:not([mv-mode="edit"]) .EmptyItem {
          display: none;
        }
      `}</style>
      <style jsx>{`
        .Products {
          --price-color: var(--app-main-color);
        }

        .Products__section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .MainProducts__content {
          /* width: var(--page-width); */
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


export default MainProducts;