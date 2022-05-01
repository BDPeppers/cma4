import * as React from "react";
import { ServiceCardData } from "./ServiceCard";
import ServiceCard from "./ServiceCard";
//imgages
import GroupFitnessPic from "../../../../../public/imgs/GroupFitnessPic.png";
import PersonalTrainingPic from "../../../../../public/imgs/PersonalTrainingPic.png";
import BodyBuildingPic from "../../../../../public/imgs/BodyBuildingPic.png";
import CMAKidzPic from "../../../../../public/imgs/CMAKidzCarePic.png";
import FemaleFitnessPic from "../../../../../public/imgs/FemaleFitnessPic.png";

import CoedGymPic from "../../../../../public/imgs/CoedGymPic.png";
import AllTheTimePic from "../../../../../public/imgs/AllTheTimePic.png";
import BestCustPic from "../../../../../public/imgs/BestCustPic.png";

const cardList: Array<ServiceCardData> = [];

const GroupFitness = new ServiceCardData(
  "Group Fitness",
  `Our passionate instructors lead exhilarating fitness
classes welcoming to both beginners and pros.`,
  GroupFitnessPic
);
cardList.push(GroupFitness);

const PersonalTraining = new ServiceCardData(
  "Personal Training",
  `Try our one-on-one sessions with personal trainers dedicated
  to helping you reach your fitness goals.`,
  PersonalTrainingPic
);
cardList.push(PersonalTraining);

const BodyBuilding = new ServiceCardData(
  "Bodybuilding Prep Coaching",
  `We provide contest prep coaching and programs
  for women's physique and men's physique competitions.`,
  BodyBuildingPic
);
cardList.push(BodyBuilding);

const CMAKidz = new ServiceCardData(
  "CMA Kidz Care",
  `Child care is provided at the gym so that you can 
focus on your workout. Kidz Fit classes are available seasonally!`,
  CMAKidzPic
);
cardList.push(CMAKidz);

const FemaleFitness = new ServiceCardData(
  "Exclusive Female Fitness",
  `Women-only group fitness classes are offered
along with designated workout areas.`,
  FemaleFitnessPic
);
cardList.push(FemaleFitness);

const CoedGym = new ServiceCardData(
  "Coed Gym",
  `During business hours the gym will be open to all, regardless of gender.`,
  CoedGymPic
);
cardList.push(CoedGym);

const AllTheTime = new ServiceCardData(
  "24 Hour Fitness",
  "24 hour key fob access is available.",
  AllTheTimePic
);
cardList.push(AllTheTime);

const BestCust = new ServiceCardData(
  "Best Customer Service In Town",
  `We strive to provide the
best fitness experience in Warner Robins and the Middle GA area.`,
  BestCustPic
);
cardList.push(BestCust);

export default function ServiceCardList() {
  return (
    <>
      {cardList.map((card, x) => {
        return <ServiceCard data={card} key={x} />;
      })}
    </>
  );
}
