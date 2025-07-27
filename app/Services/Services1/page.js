"use client"

import Navbar from "../../../components/Navbar";
import CarouselHome1 from "../../../components/CarouselHome1";
import UserExperience from "../../../components/UserExperience";
import ThingsAbleToDo from "../../../components/ThingsAbleToDo";
import Partner from "../../../components/Partner";
import Footer from "../../../components/Footer";



export default function Home() {
  return (
    <>
  <Navbar>
    <CarouselHome1/>
  </Navbar>
  <UserExperience/>
  <ThingsAbleToDo/>
  <Partner/>
  <Footer/>
    </>
  );
}
