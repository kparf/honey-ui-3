import useStoreon from 'storeon/react'
import Products__Article from './Products__Article';


const Products = ({ property }) => {

  const productList = useStoreon(property)[property];

  return (
    <div className="Products">
      <section className="Products__section">
        <div className="Products__content">
          {
            productList ? productList.map( (product, index) => {
              return (
                <Products__Article key={ index } value={ product }/>
              )
            }) : false
          }
        </div>
      </section>
      <style jsx>{`
        .Products {
          --price-color: black;
        }

        .Products__section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .Products__content {
          width: var(--page-width);
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