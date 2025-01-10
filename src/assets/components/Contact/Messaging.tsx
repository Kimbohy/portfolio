function Messaging() {
  return (
    <div className="w-2/3">
      <form action="" className="flex flex-col gap-10 p-10 text-second">
        <div className="flex justify-between">
          <div className="flex flex-nowrap">
            <label className="p-4 text-4xl text-nowrap">Name :</label>
            <div className="flex flex-col justify-center">
              <input
                type="text"
                className="pl-2 text-3xl bg-transparent outline-none"
                required
              />
              <div className="w-full h-[2px] bg-second opacity-50"></div>
            </div>
          </div>

          <div className="flex flex-nowrap">
            <label className="p-4 text-4xl text-nowrap">Mail :</label>
            <div className="flex flex-col justify-center">
              <input
                type="email"
                className="pl-2 text-3xl bg-transparent outline-none"
                required
              />
              <div className="w-full h-[2px] bg-second opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="p-2 text-4xl">
            Message :
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            className="flex-grow pt-2 pl-2 text-3xl bg-transparent border-2 rounded-md outline-none border-third"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="box-border w-32 p-2 text-4xl transition-all duration-300 border-2 text-slate-900 bg-second rounded-xl hover:bg-slate-900 hover:text-second hover:border-third"
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default Messaging;
