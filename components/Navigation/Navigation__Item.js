import Link from 'next/Link';


const Navigation__Item = ({ href, label, onMouseEnter, onMouseLeave }) => (
  <>
    <Link href={href}>
      <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="Navigation__Item">{label}</a>
    </Link>


    <style jsx>{`
      .Navigation__Item {
        --decoration-color: #FFF;
        color: var(--second-color, #FFF);
        text-decoration: none;
        margin: 10px;
        font-size: 1.5em;
        padding: 5px 20px;
        text-transform: uppercase;
        border: 3px solid transparent;
      }

      .Navigation__Item:hover {
        border-color: var(--decoration-color);
        transition: border-color .5s;
      }
    `}</style>
  </>
)

export default Navigation__Item;