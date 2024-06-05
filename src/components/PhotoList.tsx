import React, { useState, useEffect } from "react";

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotoList: React.FC = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch( "https://jsonplaceholder.typicode.com/photos");
        const photos = await response.json();
        setPhotos(photos.slice(0, 9));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
    return () => console.log("Компонент размонтирован");
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
    <h1 style={{ textAlign: 'center' }}>Photo List</h1>
    <div className="photo">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
    </>
  );
};

export default PhotoList;
