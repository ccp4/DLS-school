import {
  diamond_house,
  lecture_theatre,
  mx_village,
  campus_bus,
  market,
  wildwood,
} from "./locations";

// Define a custom WorkshopLocation type to avoid conflict with the global Location
type WorkshopLocation =
  | typeof diamond_house
  | typeof lecture_theatre
  | typeof mx_village
  | typeof campus_bus
  | typeof market
  | typeof wildwood;
import {
  airlie_mccoy,
  alex_konstantinov,
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
  elisabet_jimenez,
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
  hans_gildenast,
  charles_ballard,
} from "./people";

import type { Person } from "./people";

interface Session {
  title: string;
  type: "Lecture" | "Practical" | "Meal" | "Break" | "Other";
  time: string;
  speakers?: Person[];
  location?: WorkshopLocation;
}

// added ZoomInfo and allow Day to include zoom link
type ZoomInfo = {
  url: string;
  meetingId?: string;
  passcode?: string;
};

interface Day {
  title: string;
  sessions: Session[];
  zoom?: ZoomInfo;
}

const zday1: Day = {
  title: "Zoom Day 1 - Mon 26th Oct",
  zoom: {
    url: "https://diamondlight.zoom.us/",
    meetingId: "",
    passcode: "",
  },
  sessions: [
    {
      title: "Informal hello / meet and greet",
      type: "Other",
      time: "09:15",
    },
    {
      title: "Getting your samples safely to Diamond",
      type: "Practical",
      time: "09:30",
      //speakers: [marco_mazzorana],
    },
  ],
};

const zday2: Day = {
  title: "Zoom Day 2 - Mon 9th Nov",
  sessions: [
    {
      title: "Informal housekeeping",
      type: "Other",
      time: "09:15",
    },
    {
      title: "Roadmap for the workshop",
      type: "Lecture",
      time: "09:30",
      speakers: [maria_fando, david_waterman],
    },
    {
      title: "Navigating Diamond SynchWeb and test log in",
      type: "Practical",
      time: "10:00",
      speakers: [marco_mazzorana],
    },
    {
      title: "Break",
      type: "Break",
      time: "10:30",
    },
    {
      title: "Bioinformatics for structural biologists",
      type: "Lecture",
      time: "10:45",

      speakers: [dan_rigden],
    },
    {
      title: "AlphaFold use for experimental structural biology",
      type: "Lecture",
      time: "11:30",
      speakers: [oleg_kovalevskiy],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "Cryocrystallography",
      type: "Lecture",
      time: "13:00",
      speakers: [elspeth_garman],
    },
    {
      title: "Radiation Damage",
      type: "Lecture",
      time: "13:45",
      speakers: [elspeth_garman],
    },
    {
      title: "Break",
      type: "Break",
      time: "14:45",
    },
    {
      title: "Follow up Fed ID problems and CCP4 Cloud log ins",
      type: "Practical",
      time: "15:00",
    },
  ],
};

const day1: Day = {
  title: "Day 1 - Wed 25th Nov",
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
      title: "Intro to MX at Diamond",
      type: "Lecture",
      time: "09:15",
      location: lecture_theatre,
    },
    {
      title: "Introduction to CCP4",
      type: "Lecture",
      time: "09:45",
      speakers: [eugene_krissinel],
    },
    {
      title: "Basic Diffraction Theory",
      type: "Lecture",
      time: "10:15",
      speakers: [kamel_elomari],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:15",
    },
    {
      title: "Intro to space groups and symmetry",
      type: "Lecture",
      time: "11:30",
      speakers: [andrey_lebedev],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "Optimising the Diamond experience",
      type: "Lecture",
      time: "13:00",
      speakers: [sandra_eltschkner],
    },
    {
      title: "Introduction to CCP4 Cloud",
      type: "Practical",
      time: "13:45",
      speakers: [maria_fando],
    },
    {
      title: "Students introduction (3 min flash talk each)",
      type: "Lecture",
      time: "14:30",
    },
    {
      title: "Break",
      type: "Break",
      time: "15:15",
    },
    {
      title: "Students introduction (3 min flash talk each)",
      type: "Lecture",
      time: "15:30",
    },
    {
      title: "Data Processing (inc scaling)",
      type: "Lecture",
      time: "16:15",
      speakers: [david_waterman],
    },
    {
      title: "Dose driven data collection to optimise your experiments",
      type: "Lecture",
      time: "17:15",
      speakers: [david_aragão],
    },
    {
      title: "Dinner",
      type: "Meal",
      time: "18:15",
    },
    {
      title: "Coach back to Wantage",
      type: "Other",
      time: "20:15",
      location: diamond_house,
    },
  ],
};

const day2: Day = {
  title: "Day 2 - Thu 26th Nov",
  sessions: [
    {
      title: "X35 bus from Wantage to Diamond",
      type: "Other",
      time: "08:32",
      location: market,
    },
    {
      title: "XDS demo/tutorial",
      type: "Practical",
      time: "09:15",
      location: lecture_theatre,
      speakers: [kay_diederichs],
    },
    {
      title: "DIALS demo/tutorial",
      type: "Practical",
      time: "10:30",
      location: lecture_theatre,
    },
    {
      title: "Data collection and processing",
      type: "Practical",
      time: "10:45",
      location: mx_village,
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

const day3: Day = {
  title: "Day 3 - Fri 27th Nov",
  sessions: [
    {
      title: "X35 bus from Wantage to Diamond",
      type: "Other",
      time: "08:32",
      location: market,
    },
    {
      title: "Assessing data quality",
      type: "Lecture",
      time: "09:15",
      location: lecture_theatre,
      speakers: [kay_diederichs],
    },
    {
      title: "Multi-crystal approaches",
      type: "Lecture",
      time: "10:00",
      location: lecture_theatre,
      speakers: [amy_thompson],
    },
    {
      title: "I24",
      type: "Lecture",
      time: "10:45",
      location: lecture_theatre,
      speakers: [danny_axford],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Twinning",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
      speakers: [andrey_lebedev],
    },
    {
      title: "VMXi",
      type: "Lecture",
      time: "12:00",
      location: lecture_theatre,
      speakers: [halina_mikolajek],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "13:00",
      location: lecture_theatre,
    },
    {
      title: "Break",
      type: "Break",
      time: "15:15",
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "15:30",
      location: lecture_theatre,
    },
    {
      title: "Poster session with drinks",
      type: "Break",
      time: "17:15",
      location: diamond_house,
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

const day4: Day = {
  title: "Day 4 - Sat 28th Nov",
  sessions: [
    {
      title: "Coach to Diamond",
      type: "Other",
      time: "08:45",
      location: market,
    },
    {
      title: "Pathologies and pseudosymmetry",
      type: "Lecture",
      time: "09:15",
      location: lecture_theatre,
      speakers: [andrey_lebedev],
    },
    {
      title: "The phase problem",
      type: "Lecture",
      time: "10:00",
      location: lecture_theatre,
      speakers: [ed_lowe],
    },
    {
      title: "XFEL Hub",
      type: "Lecture",
      time: "10:45",
      location: lecture_theatre,
      speakers: [pierre_aller],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "MX from an Industrial Perspective",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
      speakers: [judit_debreczeni],
    },
    {
      title: "VMXm",
      type: "Lecture",
      time: "12:00",
      location: lecture_theatre,
      speakers: [anna_warren],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "An introduction to Coot & Moorhen",
      type: "Lecture",
      time: "13:00",
      location: lecture_theatre,
      speakers: [lucrezia_catapano],
    },
        {
      title: "New developments in model building and validation",
      type: "Lecture",
      time: "13:45",
      location: lecture_theatre,
      speakers: [grzegorz_chojnowski],
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "14:30",
      location: lecture_theatre,
    },
    {
      title: "Break",
      type: "Break",
      time: "15:15",
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "15:30",
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

const day5: Day = {
  title: "Day 5 - Sun 29th Nov",
  sessions: [
    {
      title: "Free day",
      type: "Other",
      time: "08:45",
    },
  ],
};

const day6: Day = {
  title: "Day 6 - Mon 30th Nov",
  sessions: [
    {
      title: "X35 bus from Wantage to Diamond",
      type: "Other",
      time: "08:32",
      location: market,
    },
    {
      title: "Molecular replacement",
      type: "Lecture",
      time: "09:15",
      location: lecture_theatre,
      speakers: [airlie_mccoy],
    },
            {
      title: "MR Experiences",
      type: "Lecture",
      time: "10:15",
      location: lecture_theatre,
      speakers: [michail_isupov],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "MR with AlphaFold in CCP4 Cloud",
      type: "Practical",
      time: "11:15",
      location: lecture_theatre,
      speakers: [ronan_keegan],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "Model building and DM",
      type: "Lecture",
      time: "13:00",
      location: lecture_theatre,
      speakers: [paul_bond],
    },
    {
      title: "Refinement",
      type: "Lecture",
      time: "13:45",
      location: lecture_theatre,
      speakers: [alex_konstantinov],
    },
    {
      title: "Refinement case studies",
      type: "Lecture",
      time: "14:30",
      location: lecture_theatre,
      speakers: [clemens_vonrhein],
    },
    {
      title: "Break",
      type: "Break",
      time: "15:15",
    },
    {
      title: "Buster tutorial",
      type: "Practical",
      time: "15:30",
      location: lecture_theatre,
      speakers: [clemens_vonrhein],
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "16:15",
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

const day7: Day = {
  title: "Day 7 - Tue 1st Dec",
  sessions: [
    {
      title: "X35 bus from Wantage to Diamond",
      type: "Other",
      time: "08:32",
      location: market,
    },
    {
      title: "Carbohydrate & Nucleic acid crystallography",
      type: "Lecture",
      time: "09:15",
      location: lecture_theatre,
      speakers: [lucy_schofield, jordan_dialpuri],
    },
    {
      title: "Validation quiz/tutorial",
      type: "Practical",
      time: "10:00",
      location: lecture_theatre,
      speakers: [robbie_joosten],
    },
    {
      title: "XChem",
      type: "Lecture",
      time: "10:45",
      location: lecture_theatre,
      speakers: [blake_balcomb],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Refinement with ligands / AceDRG",
      type: "Lecture",
      time: "11:15",
      location: lecture_theatre,
      speakers: [rob_nicholls],
    },
    {
      title: "Membrane Protein Laboratory",
      type: "Lecture",
      time: "12:00",
      location: lecture_theatre,
      speakers: [andrew_quigley],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:15",
    },
    {
      title: "Advanced Coot and ligand fitting",
      type: "Lecture",
      time: "13:00",
      location: lecture_theatre,
      speakers: [lucrezia_catapano],
    },
    {
      title: "CCP4MG",
      type: "Practical",
      time: "13:45",
      location: lecture_theatre,
      speakers: [stuart_mcnicholas],
    },
    {
      title: "Verification",
      type: "Lecture",
      time: "14:30",
      location: lecture_theatre,
      speakers: [isabel_usón, elisabet_jimenez],
    },
    {
      title: "Break",
      type: "Break",
      time: "15:15",
    },
        {
      title: "Model validation, optimisation and deposition",
      type: "Lecture",
      time: "15:30",
      location: lecture_theatre,
      speakers: [robbie_joosten],
    },
    {
      title: "Poster prize winner",
      type: "Other",
      time: "16:15",
    },
    {
      title: "Work on your own data",
      type: "Practical",
      time: "16:30",
      location: lecture_theatre,
    },
    {
      title: "Coach back to Wantage",
      type: "Other",
      time: "18:30",
      location: diamond_house,
    },
    {
      title: "Workshop Dinner",
      type: "Meal",
      time: "19:00",
      location: wildwood,
    },
  ],
};

export const days = [zday1, zday2, day1, day2, day3, day4, day5, day6, day7];
