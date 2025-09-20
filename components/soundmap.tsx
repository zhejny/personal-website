"use client";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "./hooks";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { SoundMapData } from "@/public/lib/data";
import { FaInfo, FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

function SoundMap() {
  const [modalOpen, setModalOpen] = useState(true);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [activePin, setActivePin] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", closeWindows, true);
  }, []);

  const closeWindows = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      setInfoWindowOpen(false);
      setModalOpen(false);
    }
  };

  const { height, width } = useWindowDimensions();

  // const mapCenter = { lat: -8.409518, lng: 115.188919 }; // BALI
  const mapCenter = { lat: -7.92258459528211, lng: 113.00339849539344 }; // MALANG

  const pins = [];

  for (let i = 0; i < SoundMapData.length; i++) {
    const pin = SoundMapData[i];
    pins.push(
      <div key={i}>
        <AdvancedMarker
          position={pin.coordinates}
          onClick={() => {
            setActivePin(i);
            setInfoWindowOpen(true);
          }}
        >
          <Pin />
        </AdvancedMarker>
      </div>
    );
  }

  return (
    <section>
      {modalOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div className="modal-content">
            <h1 className="font-semibold pb-2">Sound Map</h1>
            <p className="text-gray-400">
              A prototype collection of environmental field recordings documenting sonic experiences from my life. All audio was recorded myself using the Zoom H3-VR field recorder, unless otherwise noted. The audio on this map are stereo-mixdowns of 4-channel recordings, and I hope to implement spatial ambisonic audio soon.

            </p>
            <button className="close-modal" onClick={() => setModalOpen(false)}>
              <FaRegWindowClose />
            </button>
          </div>
        </motion.div>
      )}

      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string}
        key="map-api"
      >
        <div className="map-container">
          <Map
            defaultZoom={8.25}
            defaultCenter={mapCenter}
            disableDefaultUI={true}
            zoomControl={true}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID as string}
          >
            {pins}
            {infoWindowOpen && (
              <InfoWindow
                position={SoundMapData[activePin].coordinates}
                onCloseClick={() => setInfoWindowOpen(false)}
              >
                <div className="infowindow">
                  <p>
                    <b>Location:</b> {SoundMapData[activePin].location}
                  </p>
                  <p>
                    <b>Date:</b> {SoundMapData[activePin].date}
                  </p>
                  <p>
                    <b>Time:</b> {SoundMapData[activePin].time}
                  </p>
                  <p>
                    <b>Recording Occasion:</b>{" "}
                    {SoundMapData[activePin].occasion}
                  </p>
                  <p>
                    <b>Description:</b> {SoundMapData[activePin].description}
                  </p>
                  <br />
                  <audio
                    src={
                      "assets/audio/soundmap/" +
                      SoundMapData[activePin].filename
                    }
                    controls
                    controlsList="nodownload"
                  ></audio>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>

      <button
        className="map-info"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <FaInfo />
      </button>
    </section>
  );
}

export default SoundMap;
