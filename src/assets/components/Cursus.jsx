import Cart from "./Cart";

function Cursus() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col gap-4 items-center">
      <Cart title={"test"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse unde ducimus voluptatem. Voluptatibus fugiat aspernatur?"} position={true} />
      <Cart title={"test2"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione minima voluptas, iure sed obcaecati , ea neque aspernatur."} position={false} />
      <Cart title={"test3"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius explicabo perspiciatis, laboriosam voluptatibus."} position={true} />
      <Cart title={"test4"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem consequuntur, hic, doloribus nisi!"} position={false} />
    </div>
  );
}

export default Cursus;