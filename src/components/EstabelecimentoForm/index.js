import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function EstabelecimentoForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       const { latitude, longitude } = position.coords;
       setLatitude(latitude);
       setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
 }, []);

 async function handleSubmit(e) {
   e.preventDefault();

   await onSubmit({
     name,
     image_url,
     description,
     latitude,
     longitude
    });

    setName('');
    setDescription('');
    setImageUrl('');
 }

  return (
    <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nome do estabelecimento</label>
        <input
          name="name"
          id="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="image_url">URL da imagem do estabelecimento</label>
        <input
          name="image_url"
          id="image_url"
          required
          value={image_url}
          onChange={e => setImageUrl(e.target.value)}
        />

        <label htmlFor="description">descrição</label>
        <textarea
          name="description"
          id="description"
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
        </div>


    <button type="submit">Salvar</button>
    </form>
  );
}

export default EstabelecimentoForm;

EstabelecimentoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

