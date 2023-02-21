import Image from "next/image";
import React from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import AnimatedTextCharacter from "../AnimatedText/AnimatedText";
import s from "./Intro.module.scss";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <section className={s.home} id="home">
        <div className={s.home_bc}>
          <AnimatedTextCharacter text={"Welcome to"} />
          <AnimatedTextCharacter text={"BROOKLYN"} />

          <div className={s.hr_home}>
            <hr />
          </div>

          <div className={s.text_home}>
            <AnimatedTextCharacterParagraph
              text={"жилой комплекс сегмента бизнес+ для деловых и энергичных"}
            />
          </div>
        </div>
        <div className={s.button_focus_fixed}>
          <button className={s.button_focus}>Связаться с нами</button>
        </div>
      </section>
    </>
  );
};

export default Intro;
