"use client"

import Navbar from "../../../components/Navbar";
import CarouselHome2 from "../../../components/CarouselHome2";
import UserExperience from "../../../components/UserExperience";
import ThingsAbleToDo from "../../../components/ThingsAbleToDo";
import Partner from "../../../components/Partner";
import Footer from "../../../components/Footer";

export default function Services2Component() {
  return (
    <>
  <Navbar>
    <CarouselHome2/>
  </Navbar>
  <UserExperience/>
  <ThingsAbleToDo/>
  <Partner/>
  <Footer/>
    </>
  );
}
