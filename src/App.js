import './App.css';
import { useState, useEffect } from 'react';
import {ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from './firebase';

function App() {
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imageListRef = ref(storage, 'images/');
  const uploadImage = () => {
    const imageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  }


  useEffect(() => {
    listAll(imageListRef).then((response)=>
    response.items.forEach((item) => {
      getDownloadURL(item).then((downloadUrl) =>
        setImageUrls((prev) => [...prev, downloadUrl])
      )
    })
  )
  }, [])

  return (
    <div className="App">
      <div>

        <input type='file' onChange={(event)=>{setImage(event.target.files[0])}}/>
        <button onClick={uploadImage}>Upload image</button>
      </div>
        {
          imageUrls.map((url) =>
            <div>
                      <img width={400} src={url} alt/>;
                    </div>
          )
        }
    </div>
  );
}

export default App;
