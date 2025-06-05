import { zoom, lecture_theatre, wildwood } from "./locations";
import {
  airlie_mccoy,
  allen_orville,
  amy_thompson,
  ana_gonzalez,
  andrew_quigley,
  andrea_thorn,
  andrey_lebedev,
  anna_warren,
  blake_balcomb,
  clemens_vonrhein,
  dan_rigden,
  danny_axford,
  daren_fearon,
  david_aragão,
  david_lawson,
  david_waterman,
  ed_lowe,
  elspeth_garman,
  eugene_krissinel,
  felicity_bertram,
  graeme_winter,
  grzegorz_chojnowski,
  halina_mikolajek,
  iracema_caballero,
  isabel_usón,
  jordan_dialpuri,
  judit_debreczeni,
  kamel_elomari,
  kay_diederichs,
  lucrezia_catapano,
  lucy_schofield,
  marco_mazzorana,
  maria_fando,
  michail_isupov,
  oleg_kovalevskiy,
  paul_bond,
  pierre_aller,
  ramona_duman,
  robbie_joosten,
  rob_nicholls,
  ronan_keegan,
  sandra_eltschkner,
  stuart_mcnicholas,
} from "./people";

interface Session {
  title: string;
  type: "Lecture" | "Practical" | "Meal" | "Break" | "Other";
  time: string;
  speakers?: Person[];
  location?: Location;
}

interface Day {
  title: string;
  sessions: Session[];
}

const day1: Day = {
  title: "Zoom Day 1 - Mon 3rd Nov",
  sessions: [
    {
      title: "Informal hello / meet and greet",
      type: "Other",
      time: "09:15",
      location: zoom,
    },
    {
      title: "Roadmap for the workshop",
      type: "Lecture",
      time: "09:30",
      location: zoom,
      speakers: [maria_fando, david_waterman],
    },
    {
      title: "Students introduction (3 mins each)",
      type: "Lecture",
      time: "10:00",
      location: zoom,
    },
    {
      title: "Break",
      type: "Break",
      time: "10:45",
    },
    {
      title: "Students introduction (3 mins each)",
      type: "Lecture",
      time: "11:00",
      location: zoom,
    },
    {
      title: "MX at Diamond and INSTRUCT-ERIC",
      type: "Lecture",
      time: "11:45",
      location: zoom,
      speakers: [marco_mazzorana],
    },
    {
      title: "Lunch",
      type: "Lunch",
      time: "12:30",
    },
    {
      title: "Navigating Diamond SynchWeb and test log in",
      type: "Practical",
      time: "13:15",
      location: zoom,
    },
    {
      title: "Introduction to CCP4",
      type: "Lecture",
      time: "13:45",
      location: zoom,
      speakers: [eugene_krissinel],
    },
    {
      title: "Break",
      type: "Break",
      time: "14:30",
    },
    {
      title: "Cryocrystallography",
      type: "Lecture",
      time: "14:45",
      location: zoom,
      speakers: [elspeth_garman],
    },
  ],
};

export const days = [day1];
