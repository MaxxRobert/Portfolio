
interface ProjCardProps {
  title: string;
  src_img: string;
  item: string;
}

const ProjCard: React.FC<ProjCardProps> = ({src_img, title, item}) => {

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-lg hover:scale-105 transition-transform shadow-sky-400 h-full">
      <figure>
        <img
          src={(src_img)}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{(title)}</h2>
        <p className="text-lg">{(item)}</p>
      </div>
    </div>
  );
};

export default ProjCard;
