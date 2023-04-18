import React from "react";
import "./App.css";
import "swiper/css";
import App from "../src/compontes/container/App";
import Iframeaudio from "./pages/Iframeaudio";
import "swiper/css";
import "swiper/css/pagination";
import "../src/asstes/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-lightbox/style.css";
import Podcat from "./pages/Podcat";
import Shop from "./pages/Shop";
import ProductDetails from "./compontes/shop/ProductDetails";
import Stories from "../src/compontes/morestories/Stories";
import RecapTV from "../src/pages/RecapTV";
import Interview from "./pages/Interview";
import RecapTVShowsVideo from "./compontes/RecapVideoSection/latestrecaptvshows/RecapTVShowsVideo";
import MediaGallery from "./pages/MediaGallery";
import Listen from "./pages/Listen";
import Viewstory from "../src/compontes/morestories/Viewstory";
import Contact from "./pages/Contact";
import SoundSystemCulture from "./compontes/InterviewVideoSection/SoundSystemCulture";
import SoundSystemViewVideo from "./compontes/InterviewVideoPages/SoundSystemViewVideo";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import GalleryPage from "./compontes/gallery/GalleryPage";
import { useRoutes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import Chatting from "./pages/Chatting";
import Register from "./pages/Register";
import RecapViewMoreVideo from "./compontes/viewmorepages/RecapViewMoreVideo";
import Chatting from "./pages/Chatting";

export default function Router() {
  return useRoutes([
    { path: "/", element: <App /> },
    { path: "/RecapTV", element: <RecapTV /> },
    { path: "/RecapTVShowsVideo", element: <RecapTVShowsVideo /> },
    { path: "/RecapViewMoreVideo", element: <RecapViewMoreVideo /> },
    { path: "/Shop", element: <Shop /> },
    { path: "/ProductDetails/:prodoctId", element: <ProductDetails /> },
    { path: "/Interview", element: <Interview /> },
    { path: "/Podcat", element: <Podcat /> },
    { path: "/MediaGallery", element: <MediaGallery /> },
    { path: "/Listen", element: <Listen /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/SoundSystemCulture", element: <SoundSystemCulture /> },
    { path: "/Watch", element: <Watch /> },
    { path: "/Login", element: <Login /> },
    { path: "/GalleryPage", element: <GalleryPage /> },
    { path: "/Cart", element: <Cart /> },
    { path: "/Checkout", element: <Checkout /> },
    { path: "/Register", element: <Register /> },
    { path: "/SoundSystemViewVideo", element: <SoundSystemViewVideo /> },
    { path: "/Stories", element: <Stories /> },
    { path: "/Viewstory", element: <Viewstory /> },
    { path: "/Forgotpassword", element: <Forgotpassword /> },
    { path: "/PodcastList", element: <Iframeaudio /> },
    { path: "/Chatting", element: <Chatting /> },
  ]);
}
