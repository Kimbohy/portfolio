function WorkCard({ title, description, image, tech }) {
  return (
    <div>
      <div className="w-full h-fit rounded-lg flex p-2">
        <img src={image} alt="work" className="w-1/2 rounded-xl" />
        <div className="flex items-start flex-col p-10 ">
          <h3 className="text-white text-5xl">{title}</h3>
          <p className="text-white text-1xl">{description}</p>
          <div className="bg-white w-60 h-11 rounded-2xl mt-5 px-2 py-[5px] flex gap-1">
            {tech.map((t) => {
              return (
                <img
                  src={
                    "/src/assets/images/icons/"+t+".svg"
                  }
                  alt={t}
                  className="w-9 h-9"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
