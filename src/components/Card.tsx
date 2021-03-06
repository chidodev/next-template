import Link from "next/link";
import card from "../styles/components/Card.module.scss";

interface Props {
  title?: string;
  image?: {
    url?: string;
    description?: string;
  };
  date?: Date;
  slug?: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <figure className={card.box} key={props.title}>
      {props.image ? (
        <Link href={props.slug}>
          <img src={props.image.url} alt={props.image.description} />
        </Link>
      ) : (
        <Link href={props.slug}>
          <figure className={card.cardFallback} />
        </Link>
      )}
      {props.slug ? (
        <Link href={props.slug}>
          <p>
            {/* TODO: consolidatea date format: var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('de-DE', options).format(date)); */}
            <time>{props.date}</time>
            <br />
            <a>{props.title}</a>
          </p>
        </Link>
      ) : (
        <p>{props.title}</p>
      )}
    </figure>
  );
};

// <div key={article.headline} className={featured.teaser}>
//   {article.image && <img src={article.image} />}

//   <h3>
//     <Link href={`/news/${article.slug}`}>{article.headline}</Link>
//   </h3>
//   {article.summary && <p>{article.summary}</p>}
// </div>

export default Card;
