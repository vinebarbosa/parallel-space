import React, { useEffect, useState } from 'react'

import { ButtonsContainer, Container, ImageSelect } from './styles'
import { ReactFileInputCustom } from 'react-file-input-custom';
import { Button } from '../Button';

export function Form({ pad }) {
  const [ type, setType ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')

  useEffect(() => {
    setType(pad.type)
    setCategory(pad.category)
    setDescription(pad.description)
  }, [pad])

  console.log(type, category, description);

  function handleTypeChange(value) {
    setType(value)
    setCategory("")
    setDescription("")
  }

  function handleCategoryChange(value) {
    setCategory(value)
    setDescription("")
  }

  function handleCleanButton() {
    handleTypeChange("")
  }

  function handleSubmmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <ImageSelect>
        <div></div>
      </ImageSelect>
      <Container onSubmit={(event) => handleSubmmit(event)}>
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
                  <option value="streamming">TRANSMISSÃO</option>
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
                acceptedExtensions=".lnk"
                backgroundColor="#646464"
                width="200px"
                text="Selecione um atalho"
                classes="shortcut-selector"
                handleChange={(event) => setDescription(event.target.files[0])}
              />
            </div>
          )
        }

        <ButtonsContainer>
          <Button type="button" onClick={handleCleanButton} background="normal">LIMPAR</Button>
          <Button type="submit" background="primary">SALVAR</Button>
        </ButtonsContainer>
      </Container>
    </>
  )
}
