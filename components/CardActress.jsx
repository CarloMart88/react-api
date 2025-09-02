// importo tutta la card  con la props actress
function CardActress({ actress }) {
  const {
    id,
    name,
    biography,
    birth_year,
    death_year,
    image,
    nationality,
    awards,
  } = actress;
  return (
    <div key={id} className="card card-actress col-3  py-4 m-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item ">{nationality}</li>
        <li className="list-group-item ">
          {birth_year} {death_year}
        </li>
        <li className="list-group-item ">{biography}</li>
        <li className="list-group-item ">{awards}</li>
      </ul>
    </div>
  );
}

export default CardActress;
