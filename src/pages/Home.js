import React,{useEffect} from 'react'
import FooterSection from '../compontes/layout/FooterSection'
import InterviewSection from '../compontes/layout/InterviewSection'
import NewsSection from '../compontes/layout/NewsSection'
import PodcastSection from '../compontes/layout/PodcastSection'
import SoundchatVideoSection from '../compontes/layout/SoundchatVideoSection'
import HeaderTopSection from '../compontes/header/HeaderTopSection';
import HeaderBottamSection from '../compontes/header/HeaderBottamSection'
import { useState } from 'react';
export default function Home() {
  const [audioplayerstatus,setaudioplayerstatus]=useState("pause")

  function callbackheader(status){
    setaudioplayerstatus(status)
    console.log(status,'home')
  }
  return (
    <>
    <HeaderTopSection callback={callbackheader}/>
    <HeaderBottamSection />
    <SoundchatVideoSection props={audioplayerstatus}/>
    <PodcastSection/>
    <NewsSection/>
    <InterviewSection/>
    <FooterSection/>
    </>
  )
}
