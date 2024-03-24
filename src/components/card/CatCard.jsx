const CatCard = ({ cat }) => {
  const { logo, category_name, availability } = cat;
  console.log(cat);
  return (
    <div className="space-y-3 shadow-lg p-5 rounded-lg">
      <img className="w-24" src={logo} alt="" />
      <h2 className="font-bold text-xl">{category_name}</h2>
      <p>{availability}</p>
    </div>
  );
};

export default CatCard;
