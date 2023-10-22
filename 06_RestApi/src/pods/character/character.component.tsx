import React from 'react'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'
import { TextFieldComponent } from 'common/components'
import { formValidation } from './character.validations'
import { Character } from './character.vm'
import * as classes from './character.styles'
import { CardMedia } from '@mui/material'

interface Props {
  character: Character
  onSave: (character: Character) => void
}

export const CharacterComponent: React.FunctionComponent<Props> = ({ character, onSave }: Props) => {
  return (
    <div className={classes.root}>
        <img
          src={character.image}
          title={character.name}
          alt='picture'
          style={{ height: '500px', width: '100%', objectFit: 'cover' }}
        />
        <Formik
          onSubmit={onSave}
          initialValues={character}
          enableReinitialize={true}
          validate={formValidation.validateForm}
          >
          {() => (
            <Form className={classes.root}>
              <TextFieldComponent name="name" label="Name" />
              <TextFieldComponent name="species" label="Species" />
              <TextFieldComponent name="status" label="Status" />
              <TextFieldComponent name="bestSentences" label="Best Sentences" />
              <Button type="submit" variant="contained" color="primary">Save</Button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
