"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

function Messaging() {
  const id = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot (voir app/api/send-email/route.ts)
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-full md:w-2/3 px-4 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 md:gap-10 p-4 md:p-10 text-secondary"
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row flex-nowrap">
            <label
              htmlFor={`${id}-name`}
              className="text-2xl md:text-4xl md:p-4 text-nowrap"
            >
              Name :
            </label>
            <div className="flex flex-col justify-center">
              <input
                id={`${id}-name`}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="pl-2 text-xl md:text-3xl bg-transparent outline-none"
                required
              />
              <div className="w-full h-[2px] bg-secondary/50"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-nowrap">
            <label
              htmlFor={`${id}-email`}
              className="text-2xl md:text-4xl md:p-4 text-nowrap"
            >
              Mail :
            </label>
            <div className="flex flex-col justify-center">
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="pl-2 text-xl md:text-3xl bg-transparent outline-none"
                required
              />
              <div className="w-full h-[2px] bg-secondary/50"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor={`${id}-message`} className="text-2xl md:text-4xl p-2">
            Message :
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            value={formData.message}
            maxLength={5000}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            rows={10}
            className="grow pt-2 pl-2 text-xl md:text-3xl bg-transparent border-2 rounded-md outline-none border-secondary/50"
            required
          ></textarea>
        </div>

        {/* Honeypot : invisible et non focusable pour un humain */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor={`${id}-website`}>Website</label>
          <input
            id={`${id}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, website: e.target.value }))
            }
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "loading"}
            aria-busy={status === "loading"}
            className={
              "box-border w-24 md:w-32 p-2 text-2xl md:text-4xl transition-all duration-300 border-2 text-background bg-secondary rounded-xl  disabled:opacity-50" +
              (status !== "loading"
                ? " hover:border-secondary-dark hover:bg-background hover:text-secondary"
                : " cursor-wait")
            }
          >
            {status === "loading" ? (
              <span className="flex justify-center gap-1" aria-label="Sending">
                <span className="animate-bounce-dot">.</span>
                <span className="animate-bounce-dot">.</span>
                <span className="animate-bounce-dot">.</span>
              </span>
            ) : (
              "Send"
            )}
          </button>

          {/* Annonce le résultat aux lecteurs d'écran */}
          <span role="status" aria-live="polite">
            {status === "success" && "Thank you for your message!"}
            {status === "error" && (
              <span className="text-error">Failed to send</span>
            )}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Messaging;
