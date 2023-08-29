import "./Skills.scss";

import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import useProfileCall from "../../hooks/useProfileCall";
import { useSelector } from "react-redux";

const Skills = () => {
  const { skills, experiences } = useSelector((state) => state.profile);
  const { getSkillsAndExperiencesData } = useProfileCall();

  useEffect(() => {
    getSkillsAndExperiencesData();
  }, []);

  return (
    <>
      <h2 className="head--text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex pointer-cursor"
              key={`${skill.name}-${index}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill?.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p--text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={`${experience.year}-${index}`}
            >
              <div className="app__skills-exp-year">
                <p className="bold--text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <React.Fragment key={`${work.name}-${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work pointer-cursor"
                      data-tip // for tooltips
                      data-tooltip-id={work.name} // for tooltips
                      data-tooltip-content={work.desc} // for tooltips
                    >
                      <h4 className="bold--text">{work.name}</h4>
                      <p className="p--text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name} // must be equal data-tooltip-id
                      effect="solid"
                      arrowColor="var(--skills-tooltipArrowColor)"
                      className="skills-tooltip pointer-cursor"
                    />
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  // Skills,
  "skills",
  "app__oddsbg"
);
