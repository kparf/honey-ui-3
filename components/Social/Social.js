import { extractProperties } from '../../utils';


const DEFAULT_INNER_PROERTY_SET = {
  link: 'social-link',
  icon: 'socials__icon-image',
};

const Social = ({ property = "social", innerProperties, value = {} }) => {

  const { link, icon } = extractProperties({ ...DEFAULT_INNER_PROERTY_SET, ...innerProperties }, value);

  return (
    <div property={ property } className="Socials__icon" mv-multiple="true">
      <a property={ link.key } className="Socials__icon-link" mv-default="https://twitter.com" href={ link.value }>
        <img property={ icon.key } className="Socials__icon-image" mv-default="https://via.placeholder.com/50.png" src={ icon.value }/>
      </a>
      <style jsx>{`
        .Socials__icon-image {
          height: 50px;
        }

        .Socials__icon {
          margin: 0 20px;
        }
      `}</style>
    </div>
  );
}

export default Social;