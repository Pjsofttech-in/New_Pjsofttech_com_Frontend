import Link from "next/link";
import "./Cards.module.css";

export default function HomeComponent({ title, description, imageUrl, link }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link} className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
}
    

