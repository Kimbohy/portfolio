import { useState, FormEvent } from "react";

function Messaging() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // Replace with your actual form submission logic
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full md:w-2/3 px-4 md:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-10 p-4 md:p-10 text-second">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row flex-nowrap">
            <label className="text-2xl md:text-4xl md:p-4 text-nowrap">Name :</label>
            <div className="flex flex-col justify-center">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                className="pl-2 text-xl md:text-3xl bg-transparent outline-none"
                required
              />
              <div className="w-full h-[2px] bg-second opacity-50"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-nowrap">
            <label className="text-2xl md:text-4xl md:p-4 text-nowrap">Mail :</label>
            <div className="flex flex-col justify-center">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                className="pl-2 text-xl md:text-3xl bg-transparent outline-none"
                required
              />
              <div className="w-full h-[2px] bg-second opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-2xl md:text-4xl p-2">Message :</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
            rows={10}
            className="flex-grow pt-2 pl-2 text-xl md:text-3xl bg-transparent border-2 rounded-md outline-none border-third"
            required
          ></textarea>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="box-border w-24 md:w-32 p-2 text-2xl md:text-4xl transition-all duration-300 border-2 text-slate-900 bg-second rounded-xl hover:bg-slate-900 hover:text-second hover:border-third disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Send"}
          </button>
          {status === "success" && <span className="text-green-500">Message sent!</span>}
          {status === "error" && <span className="text-red-500">Failed to send</span>}
        </div>
      </form>
    </div>
  );
}
export default Messaging;
