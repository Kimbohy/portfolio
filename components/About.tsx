"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "motion/react";
import GlitchText from "./glitchText"; // ← ajuste selon ton arborescence

const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  { ssr: false },
);

const education = [
  {
    year: "2024 - Present",
    degree:
      "Master's in Applied Mathematics, Computer Science, and Statistics (MISA)",
    school: "University of Antananarivo",
    description:
      "Specializing in applied mathematics, computer science, and statistical analysis to solve real-world challenges.",
  },
  {
    year: "2023 - 2024",
    degree:
      "Bachelor's in Applied Mathematics, Computer Science, and Statistics (MISA)",
    school: "University of Antananarivo",
    description:
      "Developed advanced problem-solving skills in data analysis and programming.",
  },
  {
    year: "2021 - 2023",
    degree: "Bachelor's in Mathematics and Computer Science",
    school: "University of Antananarivo",
    description:
      "Gained foundational knowledge in Programming and Mathematics.",
  },
  {
    year: "2020",
    degree: "BACC C (High School Diploma)",
    school: "Lycée Privé FJKM Ambatolampy Ambohitrimanjaka",
    description: "Graduated with a strong focus on mathematics and sciences.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div id="about" className="pt-20 md:pt-24 bg-background text-foreground">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl">About Me</h2>

      <section className="py-16 px-8 max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-2xl leading-relaxed">
            <GlitchText text="I am" delay={200} wordGap={110} />{" "}
            <span className="text-5xl">Lovatiana RABARIJAONA</span>
            , <br />
            <span>
              motivated and passionate about computer science and technology, I
              am a student at MISA (Applied Mathematics, Computer Science, and
              Statistics). I am eager to apply my knowledge in programming and
              problem-solving to real-world challenges. With a strong foundation
              in coding and hardware programming, I am looking to further
              develop my skills through practical experiences and innovative
              projects."
            </span>
          </p>
        </MotionDiv>

        <div ref={ref} className="relative py-8">
          <h3 className="text-2xl font-bold mb-8">
            <GlitchText
              text="Education"
              delay={0}
              wordGap={130}
              enabled={inView}
            />
          </h3>

          {education.map((item, index) => {
            const base = index * 280;
            return (
              <MotionDiv
                key={index}
                className="relative pl-12 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-foreground rounded-full">
                  {index !== education.length - 1 && (
                    <div className="absolute left-1/2 top-4 bottom-[-2rem] w-0.5 bg-foreground transform -translate-x-1/2" />
                  )}
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">
                    <GlitchText
                      text={item.year}
                      delay={base + 80}
                      wordGap={95}
                      enabled={inView}
                    />
                  </h4>
                  <h5 className="font-medium mb-2">
                    <GlitchText
                      text={item.degree}
                      delay={base + 200}
                      wordGap={32}
                      enabled={inView}
                    />
                  </h5>
                  <p className="text-foreground mb-2">
                    <GlitchText
                      text={item.school}
                      delay={base + 340}
                      wordGap={42}
                      enabled={inView}
                    />
                  </p>
                  <p className="text-foreground">
                    <GlitchText
                      text={item.description}
                      delay={base + 460}
                      wordGap={28}
                      enabled={inView}
                    />
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
