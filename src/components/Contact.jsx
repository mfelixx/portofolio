import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";
import { emailEnv } from "../assets/utils/emailEnv";

const Contact = ({ darkMode }) => {
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: `text-white border-2 border-[#A78BFA] hover:bg-[#8B5CFA]`,
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary: `text-gray-800 border-2 border-[#A78BFA] hover:bg-[#8B5CFA] hover:text-white`,
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        emailEnv.SERVICE_ID,
        emailEnv.SERVICE_TEMPLATE_ID,
        {
          subject: form.subject,
          name: form.name,
          time: new Date().toLocaleString(),
          message: form.message,
          email: form.email,
        },
        emailEnv.SERVICE_PUBLIC_KEY,
      );
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] bg-linear-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent font-bold">
            Contact
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-bold mt-3 ${theme.textPrimary}`}
          >
            Send Me a Message
          </h2>
          <p
            className={`mt-5 max-w-xl mx-auto leading-8 ${theme.textSecondary}`}
          >
            Have a project in mind or just want to say hello? Feel free to send
            me a message.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className={`relative rounded-[35px] border border-white/20 ${darkMode ? "bg-white/60" : "bbg-slate-900/40"} backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.08)] p-8 lg:p-12`}
        >
          <div className="absolute right-0 top-0 w-52 h-52 bg-violet-500/10 rounded-full blur-[100px]" />
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-500"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full rounded-2xl pl-14 pr-5 py-4 bg-white ${darkMode && "border border-slate-500"}  outline-none focus:border-violet-500 transition`}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full rounded-2xl pl-14 pr-5 py-4  bg-white ${darkMode && "border border-slate-500"} outline-none focus:border-violet-500 transition`}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full rounded-2xl pl-14 pr-5 py-4 bg-white ${darkMode && "border border-slate-500"} outline-none focus:border-violet-500transition`}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className={`w-full rounded-2xl p-5 resize-none bg-white ${darkMode && "border border-slate-500"} outline-none focus:border-violet-500 transition`}
              />
            </div>
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              disabled={loading}
              className=" group w-full rounded-2xl py-4 font-semibold text-white bg-linear-to-r from-violet-600 to-purple-500 flex justify-center items-cent gap-3 shadow-lg shadow-violet-500/30"
            >
              {loading ? "Sending..." : "Send Message"}

              {!loading && (
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
