/**
 * @property header
 * @property info
 * @property text
 * @property link
 * @property image
 * @property slug
 */
const Post = ({ property, item }) => {

  const {
    header,
    info,
    text,
    slug,
  } = item;

  return (
    <article
      property={property} className="Post"
      mv-multiple="true"
    >
      <img
        className="Post__image" property="image"
        mv-default="https://via.placeholder.com/100.png"
      />
      <div
        className="Post__text-conteiner"
      >
        <h3
          className="Post__header" property="header"
          mv-default="Зоголовок"
        >
          {header}
        </h3>
        <span
          className="Post__info" property="info"
          mv-default="Дополнительная информация"
        >
          {info}
        </span>
        <span
          className="Post__text" property="text"
          mv-default="Текст"
        >
          {text}
        </span>
        <span
          className="Post__slug" property="slug"
          mv-default="slug"
        >
          {slug}
        </span>
        <a
          className="Post__link"
          href={`/blog/${slug}`}
        >
          Читать
        </a>
      </div>


      <style jsx>{`

        .Post .Post__slug {
          display: none;
        }

        .Post[mv-mode="edit"] .Post__slug{
          display: block;
        }

        .Post__text-conteiner {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </article>
  );
};

export default Post;