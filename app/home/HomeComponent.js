"use client"

import Navbar from "../../components/Navbar";
import SliderHome from "../../components/SliderHome";
import UserExperience from "../../components/UserExperience";
import ThingsAbleToDo from "../../components/ThingsAbleToDo";
import Partner from "../../components/Partner";
import Footer from "../../components/Footer";

export default function HomeComponent() {
  return (
    <>
  <Navbar>
    <SliderHome/>
  </Navbar>
  <UserExperience/>
  <ThingsAbleToDo/>
  <Partner/>
  <Footer/>
    </>
  );
}
