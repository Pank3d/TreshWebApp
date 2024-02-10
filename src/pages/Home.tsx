import React, { useState } from "react";
import Header from "../components/Header";
import Divider from "@mui/material/Divider";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Check } from "@mui/icons-material";

interface HomeProps {}

const mapApi = "65dd0fe4-5677-439a-b905-c2eac4c7f710";

const Home: React.FC<HomeProps> = () => {
  const [placemarkCoords, setPlacemarkCoords] = useState<number[] | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [isDirty, setIsDirty] = useState<boolean>(true);
  const [isVeryDirty, setIsVeryDirty] = useState<boolean>(false);
  const [needsImmediateAction, setNeedsImmediateAction] =
    useState<boolean>(false);
  const [darkenBackground, setDarkenBackground] = useState<boolean>(false);
  const [error, setError] = useState(false)

  const errorChek = () => {
    if (description !== '' && photo !== null && isDirty === false  ) {
      setError(false)
    } else {
      setError(true)
    }
    
  } 

  console.log(description, photo, isDirty);
  
  

  const handleMapClick = (e: any) => {



    setPlacemarkCoords(e.get("coords"));
    setShowModal(true);
    setDarkenBackground(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setDescription("");
    setPhoto(null);
    setIsDirty(false);
    setIsVeryDirty(false);
    setNeedsImmediateAction(false);
    setDarkenBackground(false);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setPhoto(file || null);
  };

  const handleDirtyChange = () => {
    setIsDirty(true);
    setIsVeryDirty(false);
    setNeedsImmediateAction(false);
  };

  const handleVeryDirtyChange = () => {
    setIsDirty(false);
    setIsVeryDirty(true);
    setNeedsImmediateAction(false);
  };

  const handleNeedsImmediateActionChange = () => {
    setIsDirty(false);
    setIsVeryDirty(false);
    setNeedsImmediateAction(true);
  };

  const handlePlacemarkAdd = () => {
    if (placemarkCoords) {
      // Логика добавления метки
      console.log("Добавлено новое место:", {
        coords: placemarkCoords,
        description: description,
        photo: photo,
        isDirty: isDirty,
        isVeryDirty: isVeryDirty,
        needsImmediateAction: needsImmediateAction,
      });
      handleModalClose();
    }
  };

  return (
    <>
      <Header />
      <Divider />
      <div className={`map ${darkenBackground ? "darken-background" : ""}`}>
        <YMaps query={{ apikey: mapApi }}>
          <Map
            className="map_yandex"
            defaultState={{
              center: [47.1167, 39.4167],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            onClick={handleMapClick}
          >
            {placemarkCoords && <Placemark geometry={placemarkCoords} />}
          </Map>
        </YMaps>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2 className="h2">Добавить новое место</h2>
            <label>
              Описание:
              <input
                className="inputModal"
                type="text"
                value={description}
                onChange={handleDescriptionChange}
              />
            </label>
            <label>
              Фотография:
              <input
                className="inputModal"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isDirty}
                  onChange={handleDirtyChange}
                />
                Загрязнено
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isVeryDirty}
                  onChange={handleVeryDirtyChange}
                />
                Очень загрязнено
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={needsImmediateAction}
                  onChange={handleNeedsImmediateActionChange}
                />
                Требуется немедленное действие
              </label>
            </div>
            <button
              className="subBtn1"
              onChange={errorChek}
              disabled={!error}
              onClick={handlePlacemarkAdd}
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
