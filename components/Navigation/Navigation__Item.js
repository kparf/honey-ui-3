import Link from 'next/Link';


const Navigation__Item = ({ href, label, onMouseEnter, onMouseLeave }) => (
  <li className="Navigation__Item">
    <Link href={href}>
      <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{label}</a>
    </Link>


    <style jsx>{`
      .Navigation__Item {
        position: relative;
        display: flex;
        flex-direction: column;
        --decoration-color: #FFF;
        font-size: 1.5em;
        padding: 0 20px;
        height: var(--navigation-height, 70px);
        justify-content: center;



        transition: border-width 0.5s;
      }

      .Navigation__Item:after {
        position: absolute;
        content: '';
        width: 100%;
        background-color: inherit;
        top: var(--navigation-height, 70px);;

        border-style: none none solid none;
        border-image: url('/static/images/cell-6.png') 50;
        border-image-repeat: space;
        background-clip: padding-box;

        transition: all 0.5s;
      }

      .Navigation__Item:hover:after {

        border-width: 40px;

        transform: translateY(30px);
      }

      .Navigation__Item:hover {
        border-color: var(--decoration-color);
      }

      .Navigation__Item a {
        color: var(--second-color, #FFF);
        text-decoration: none;
        text-transform: uppercase;
      }
    `}</style>
  </li>
)

export default Navigation__Item;