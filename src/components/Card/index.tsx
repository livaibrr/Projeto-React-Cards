// src/components/Card/index.tsx
import './style.css';

interface CardProps {
  name: string;
  time: string;
  github: string;
  photo: string;
}

// Este é o nosso componente Card
export function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.photo} alt={`Foto de ${props.name}`} className="card-photo" />
      <strong>{props.name}</strong>
      <small>{props.time}</small>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        Perfil no GitHub
      </a>
    </div>
  );
}