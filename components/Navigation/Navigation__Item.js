import Link from 'next/link';


const Navigation__Item = ({ href, label }) => (
  <li className="Navigation__Item">
    <Link href={href}>
      <a>{label}</a>
    </Link>


    <style jsx>{`
      .Navigation__Item {
        position: relative;
        display: flex;
        flex-direction: column;
        --decoration-color: #FFF;
        width: min-content;
        font-size: 1.3em;
        height: var(--navigation-height, 70px);
        justify-content: center;
      }

      .Navigation__Item a {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px;
        transition: background-color 0.3s;
      }

      .Navigation__Item a:hover, .Navigation__Item a:focus  {
        background-color: var(--accent-color);
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