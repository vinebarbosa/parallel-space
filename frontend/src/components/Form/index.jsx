import React, { useEffect, useState } from 'react'

import { FormComponent ,ButtonsContainer, Container, ImageSelect } from './styles'
import { ReactFileInputCustom } from 'react-file-input-custom';
import { Button } from '../Button';

import api from '../../services/api'
import { plugin } from '../../services/plugin'
import { FileInput } from '../InputFile';

export function Form({ pad, update }) {
  const [ type, setType ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ imageFile, setImageFile ] = useState('')

  useEffect(() => {
    setType(pad.type)
    setCategory(pad.category)
    setDescription(pad.description)
  }, [pad])

  function handleTypeChange(value) {
    setType(value)
    setCategory("")
    setDescription("")
  }

  function handleCategoryChange(value) {
    setCategory(value)
    setDescription("")
  }

  function handleDescriptionChange(value) {
    setDescription(value)
  }

  function handleCleanButton() {
    handleTypeChange("")
  }

  async function handleSubmmit(event) {
    event.preventDefault();

    if (imageFile !== '') {
      const formData = new FormData()
      formData.append('file', imageFile)
      try {
        await api.post(`image?button_id=${pad.id}`, formData, {
          headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          }
        })
      } catch (e) {
        console.error(e)
      }
    }

    const button = {
      id: pad.id,
      type: type,
      category: category,
      description: description
    }

    try {
      if (category === 'shortcut') {
        const formData = new FormData()
        formData.append('file', description)
        const response = await plugin.post('shortcut', formData, {
          headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          }
        })

        button.description = response.data.filePath
      }

      const response = await api.put('button', button)
      if (response.status === 204) alert("Pad atualizado com sucesso!")
      update()
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <FormComponent onSubmit={(event) => handleSubmmit(event)}>
      <ImageSelect>
        <div className="select-image-component-title">
          <p>ÍCONE</p>
        </div>
        <div className="select-image-component-input">
          <FileInput
            reload={pad}
            backgroundColor="#646464"
            classes="image-selector"
            width="90px"
            handleChange={(event) => { setImageFile(event.target.files[0])}}
          />
        </div>
      </ImageSelect>
      <Container>
        <div className="select-container">
          <label>TIPO</label>
          <select
            value={type === null ? "" : type}
            onChange={(event) => handleTypeChange(event.target.value)}
          >
            <option value=""></option>
            <option value="obs">OBS</option>
            <option value="system">SISTEMA</option>
          </select>
        </div>

        <div className="select-container">
          <label>CATEGORIA</label>
          <select
            value={category === null ? "" : category}
            onChange={(event) => handleCategoryChange(event.target.value)}
          >
            <option value=""></option>
            {
              type === "obs" && (
                <>
                  <option value="scene">CENA</option>
                  <option value="record">GRAVAÇÃO</option>
                  <option value="streaming">TRANSMISSÃO</option>
                </>
              )
            }

          {
            type  === "system" && (
              <>
                <option value="shortcut">ATALHO</option>
                <option value="link">LINK</option>
              </>
            )
          }
          </select>
        </div>

        {
          category === "link" && (
            <div className="select-container">
              <label>LINK</label>
              <input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Digite o link"
              />
            </div>
          )
        }

        {
          category === "shortcut" && (
            <div className="select-container">
              <label>ARQUIVO</label>
              <ReactFileInputCustom
                acceptedExtensions=".lnk, .url"
                backgroundColor="#646464"
                width="200px"
                text="Selecione um atalho"
                classes="shortcut-selector"
                handleChange={(event) => setDescription(event.target.files[0])}
              />
            </div>
          )
        }

        {
          category === "streaming" && (
            <div className="select-container">
              <label>COMANDO</label>
              <select
                value={description === null ? "" : description}
                onChange={(event) => handleDescriptionChange(event.target.value)}
              >
                <option value=""></option>
                <option value="start-stop">INICIAR OU PARAR</option>
              </select>
            </div>
          )
        }

        {
          category === "record" && (
            <div className="select-container">
              <label>COMANDO</label>
              <select
                value={description === null ? "" : description}
                onChange={(event) => handleDescriptionChange(event.target.value)}
              >
                <option value=""></option>
                <option value="start-stop">INICIAR OU PARAR</option>
                <option value="pause">PAUSAR</option>
                <option value="resume">RETOMAR</option>
              </select>
            </div>
          )
        }

        <ButtonsContainer>
          <Button type="button" onClick={handleCleanButton} background="normal">LIMPAR</Button>
          <Button type="submit" background="primary">SALVAR</Button>
        </ButtonsContainer>
      </Container>
    </FormComponent>
  )
}
