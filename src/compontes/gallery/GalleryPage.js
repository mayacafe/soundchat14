import React, { useState, useCallback, useEffect } from "react";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import axios from "axios";
import { useLocation } from "react-router-dom";
export default function GalleryPage() {
  const data = useLocation()
 
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [ImgArray, setImgArray] = useState([])
  const FileArray=[]

  useEffect( () =>{
    setImgArray(data.state)
  }, [data])
// console.log(ImgArray)

for (let i = 0; i < ImgArray.length; i++) {
  // console.log(ImgArray[i])
   FileArray.push({src:"https://app.soundchatradio.com/soundradiobackend/images/gallery/"+ImgArray[i].image_name,width: 2,
   height: 2,})
}
// console.log(FileArray,'okay kam')


  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
 
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="gallery">
          <div className="gallery-div">
               <Gallery photos={FileArray} onClick={openLightbox}/>

            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={FileArray.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
