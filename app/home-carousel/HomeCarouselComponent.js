"use client"

import Navbar from "../../components/Navbar";
import CarouselHome from "../../components/CarouselHome";
import UserExperience from "../../components/UserExperience";
import ThingsAbleToDo from "../../components/ThingsAbleToDo";
import Partner from "../../components/Partner";
import Footer from "../../components/Footer";

export default function HomeCarouselComponent() {
  return (
    <>
  <Navbar>
    <CarouselHome/>
  </Navbar>
  <UserExperience/>
  <ThingsAbleToDo/>
  <Partner/>
  <Footer/>
    </>
  );
}
