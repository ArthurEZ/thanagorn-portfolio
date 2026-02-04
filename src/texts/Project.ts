import { title } from "process";

const ImageURLBase = {
  mseb: "/project/mseb",
  medmory: "/project/medmory"
}

export const projects = [
  {
    images: [`${ImageURLBase.mseb}/MSEB.png`],
    title: "MEDKKU Self-Exam Bank (MSEB)",
    description: "An online platform for medical students to review subjects, take quizzes, track progress, and compare results. Includes admin tools for managing content and feedback.",
    link: "https://mseb.md.kku.ac.th",
  },
  {
    images: [`${ImageURLBase.medmory}/medmory_main.png`, `${ImageURLBase.medmory}/medmory_room.png`,],
    title: "MedMory Game",
    description: "an online card game website to help medical students memorize medical terms through a fun and interactive matching game. Students can create or join rooms to compete with friends or other students or play alone to practice with themselves.",
    link: "https://medmorygame.com",
  }
];
