import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css';

function Pad({ changeSelectedPad, data, selectedPad }) {
  const [imageUrl, setImageUrl] = useState('')

  const button = data

  useEffect(() => {
    async function getImageUrl() {
      try {
        const { data } = await api.get(`image/${button.id}`)
        setImageUrl(data.url)
      } catch {
        setImageUrl('')
      }
    }
    getImageUrl()
  }, [])

  return (
    <div onClick={() => {
      changeSelectedPad(data)}} className={`pad ${selectedPad?.id === data.id ? 'selected' : ''}`
    }>
      {imageUrl !== '' ? <img src={imageUrl} /> : ''}
    </div>
  );
}

export default Pad;
