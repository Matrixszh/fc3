"use client"

import Navbar from "../../../components/Navbar";
import CarouselHome3 from "../../../components/CarouselHome3";
import UserExperience from "../../../components/UserExperience";
import ThingsAbleToDo from "../../../components/ThingsAbleToDo";
import Partner from "../../../components/Partner";
import Footer from "../../../components/Footer";

export default function Services3Component() {
  return (
    <>
  <Navbar>
    <CarouselHome3/>
  </Navbar>
  <UserExperience/>
  <ThingsAbleToDo/>
  <Partner/>
  <Footer/>
    </>
  );
}
