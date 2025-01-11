import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      year: "2024 - Present",
      degree: "MISA (Applied Mathematics, Computer Science, and Statistics)",
      school: "University of Antananarivo",
      description:
        "Focus on applied mathematics and computer science fundamentals",
    },
    {
      year: "2021 - 2023",
      degree: "MISA (Applied Mathematics, Computer Science, and Statistics)",
      school: "University of Antananarivo",
      description:
        "Focus on applied mathematics and computer science fundamentals",
    },
    {
      year: "2021 - 2023",
      degree: "MISA (Applied Mathematics, Computer Science, and Statistics)",
      school: "University of Antananarivo",
      description:
        "Focus on applied mathematics and computer science fundamentals",
    },
  ];

  return (
    <div id="about" className="pt-20 md:pt-24">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-second ">About Me</h2>
      <section className="py-16 px-8 max-w-6xl mx-auto text-second">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-2xl leading-relaxed">
            Motivated and passionate about computer science and technology, I am
            a student at MISA (Applied Mathematics, Computer Science, and
            Statistics). I am eager to apply my knowledge in programming and
            problem-solving to real-world challenges. With a strong foundation
            in coding and hardware programming, I am looking to further develop
            my skills through practical experiences and innovative projects.
          </p>
        </motion.div>

        <div ref={ref} className="relative py-8">
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-12 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-second rounded-full">
                {index !== education.length - 1 && (
                  <div className="absolute left-1/2 top-4 bottom-[-2rem] w-0.5 bg-second transform -translate-x-1/2" />
                )}
              </div>
              <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                <h4 className="text-second font-semibold mb-2">{item.year}</h4>
                <h5 className="text-second font-medium mb-2">{item.degree}</h5>
                <p className="text-second mb-2">{item.school}</p>
                <p className="text-second">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
