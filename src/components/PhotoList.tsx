// rafce
import { useEffect, useState } from "react";
import Photo from "./Photo";
import { Skeleton } from "@mui/material";

export interface IPhotoJson {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotoList = () => {
  const [photos, setPhotos] = useState<IPhotoJson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // setIsLoading(true); // объявление о начале загрузи
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data: IPhotoJson[] = await response.json();
        setPhotos(data.slice(0, 10));
        setIsLoading(false); // объявление загрузки завершённой
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="img-container">
      {isLoading
        ? Array.from(new Array(10)).map((_, index) => (
            <div className="col-3 mb-4" key={index}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton variant="text" width="80%" />
            </div>
          ))
        : photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
    </div>
  )
};

export default PhotoList;

// import React, { useState, useEffect } from "react";

// interface IPhoto {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }

// const PhotoList: React.FC = () => {
//   const [photos, setPhotos] = useState<IPhoto[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch( "https://jsonplaceholder.typicode.com/photos");
//         const photos = await response.json();
//         setPhotos(photos.slice(0, 9));
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPhotos();
//     return () => console.log("Компонент размонтирован");
//   }, []);

//   if (isLoading) {
//     return (
      // <div className="spinner-border text-primary" role="status">
      //   <span className="visually-hidden">Loading...</span>
      // </div>
//     );
//   }

//   return (
//     <>
//     <h1 style={{ textAlign: 'center' }}>Photo List</h1>
//     <div className="photo">
//       {photos.map((photo) => (
//         <div key={photo.id}>
//           <img src={photo.thumbnailUrl} alt={photo.title} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default PhotoList;
