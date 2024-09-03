import clsx from "clsx";
function Messaging() {
  const classes = clsx("bg-none", "p-5", "text-second", "text-6xl");
  return (
    <div className="w-2/3">
      <form action="" className="flex p-10 text-second flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-nowrap">
            <label className="text-4xl p-4 text-nowrap">Name :</label>
            <div className="flex flex-col justify-center">
              <input
                type="text"
                className="text-3xl outline-none bg-transparent pl-2"
                required
              />
              <div className="w-full h-[2px] bg-second opacity-50"></div>
            </div>
          </div>

          <div className="flex flex-nowrap">
            <label className="text-4xl p-4 text-nowrap">Mail :</label>
            <div className="flex flex-col justify-center">
              <input
                type="email"
                className="text-3xl outline-none bg-transparent pl-2"
                required
              />
              <div className="w-full h-[2px] bg-second opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-4xl p-2">
            Message :
          </label>
          <textarea
            id="message"
            name="message"
            rows="10"
            className="text-3xl outline-none bg-transparent pl-2 border-2 border-third rounded-md flex-grow pt-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-4xl text-slate-900 bg-second w-32 rounded-xl p-2 hover:bg-slate-900 hover:text-second border-2 hover:border-third transition-all duration-300 box-border"
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default Messaging;
