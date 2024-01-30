import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImgProfile } from '../redux/actions/actions';
const ImageUploader = () => {
    const dispatch = useDispatch()

  const [imageData, setImageData] = useState(null);
  const [file, setFile] = useState(null);

  const ProfilePic = useSelector(state => state.imageProfile[0])
  useEffect(()=>{
      console.log(ProfilePic)
  },[ProfilePic])
  const handleImageChange = (e) => {
    //

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      // Creazione di un oggetto FormData
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Puoi inviare formData al server se necessario
      // Ad esempio, inviare formData tramite una richiesta fetch
    }
  };

  const handleUpload = () => {
    // Qui puoi aggiornare lo stato con i dati dell'immagine se necessario
    // Per esempio, potresti fare qualcosa come setImageData(formData.get('image'))

    // In questo esempio, l'immagine viene convertita in URL di dati base64 e memorizzata nello stato
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
        console.log(imageData)
      };
      reader.readAsDataURL(file);
      
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={ ()=>{handleUpload(); dispatch(setImgProfile(imageData)) }}>Carica Immagine</button>
      {ProfilePic && <img src={ProfilePic} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;