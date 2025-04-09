import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { InfoSection } from "@/components/InfoSection/InfoSection";
import { Categories } from "@/components/Сategories/Categories";
import { Services } from "@/components/Services/Services";
import { OtherServices } from "@/components/OtherServices/OtherServices";
import { WorkProcess } from "@/components/ProcessSteps/WorkProcess";
import { InfoBlock } from "@/components/InfoBlock/InfoBlock";

export default function Home() {
  return (
    <div>
      <Hero/>
      <InfoSection/>
      <Categories/>
      <Services/>
      <OtherServices/>
      <WorkProcess/>
      <InfoBlock/>
    </div>
  );
}
