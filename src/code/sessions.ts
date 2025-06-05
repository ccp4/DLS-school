import {
  zoom,
  diamond_house,
  lecture_theatre,
  mx_village,
  market,
  wildwood,
} from "./locations";
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
import { diamond } from "./sponsors";

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

const zday1: Day = {
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
      type: "Meal",
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

const zday2: Day = {
  title: "Zoom Day 2 - Mon 10th Nov",
  sessions: [
    {
      title: "Informal housekeeping",
      type: "Other",
      time: "09:15",
      location: zoom,
    },
    {
      title: "Bioinformatics for structural biologists",
      type: "Lecture",
      time: "09:30",
      location: zoom,
      speakers: [dan_rigden],
    },
    {
      title: "AlphaFold use for experimental structural biology",
      type: "Lecture",
      time: "10:15",
      speakers: [oleg_kovalevskiy],
      location: zoom,
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Basic Diffraction Theory",
      type: "Lecture",
      time: "11:15",
      location: zoom,
      speakers: [kamel_elomari],
    },
    {
      title: "Data Collection Strategies for Photon Counting Detectors",
      type: "Lecture",
      time: "12:00",
      location: zoom,
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:45",
    },
    {
      title: "Optimising the Diamond experience",
      type: "Lecture",
      time: "13:30",
      location: zoom,
    },
  ],
};

const zday3: Day = {
  title: "Zoom Day 3 - Mon 17th Nov",
  sessions: [
    {
      title: "Informal housekeeping",
      type: "Other",
      time: "09:15",
      location: zoom,
    },
    {
      title: "Introduction to CCP4 Cloud",
      type: "Practical",
      time: "09:30",
      location: zoom,
      speakers: [maria_fando],
    },
    {
      title: "Twinning",
      type: "Lecture",
      time: "10:15",
      speakers: [andrea_thorn],
      location: zoom,
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Intro to space groups and symmetry",
      type: "Lecture",
      time: "11:15",
      location: zoom,
      speakers: [andrey_lebedev],
    },
    {
      title: "Data Processing (inc scaling)",
      type: "Lecture",
      time: "12:00",
      location: zoom,
      speakers: [ana_gonzalez],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "13:00",
    },
    {
      title: "Radiation Damage",
      type: "Lecture",
      time: "13:45",
      location: zoom,
      speakers: [elspeth_garman],
    },
    {
      title: "Break",
      type: "Break",
      time: "14:45",
    },
    {
      title: "Dose driven data collection to optimise your experiments",
      type: "Lecture",
      time: "15:00",
      location: zoom,
      speakers: [david_aragão],
    },
  ],
};

const day1: Day = {
  title: "Day 1 - Mon 24th Nov",
  sessions: [
    {
      title: "X35 bus from Wantage to Diamond",
      type: "Other",
      time: "08:32",
      location: market,
    },
    {
      title: "Registration",
      type: "Other",
      time: "09:00",
      location: diamond_house,
    },
    {
      title: "Welcome to Diamond",
      type: "Lecture",
      time: "09:15",
      location: lecture_theatre,
    },
    {
      title: "XDS demo/tutorial",
      type: "Practical",
      time: "09:30",
      location: lecture_theatre,
      speakers: [kay_diederichs],
    },
    {
      title: "Data collection and processing",
      type: "Practical",
      time: "10:15",
      location: mx_village,
    },
    {
      title: "DIALS demo/tutorial",
      type: "Practical",
      time: "10:15",
      location: lecture_theatre,
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "Data collection and processing",
      type: "Practical",
      time: "13:00",
      location: mx_village,
    },
    {
      title: "DIALS demo/tutorial",
      type: "Practical",
      time: "13:00",
      location: lecture_theatre,
    },
    {
      title: "Dinner",
      type: "Meal",
      time: "18:15",
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "19:15",
      location: lecture_theatre,
    },
    {
      title: "Coach back to Wantage",
      type: "Other",
      time: "20:15",
      location: diamond_house,
    },
  ],
};

export const days = [zday1, zday2, zday3, day1];
