import Link from 'next/Link';


const Navigation__Item = ({ href, label }) => (
  <>
    <Link href={href}>
      <a className="Navigation__Item">{label}</a>
    </Link>


    <style jsx>{`
      .Navigation__Item {
        color: var(--app-main-color);
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