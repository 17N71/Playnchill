import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'playnchill-backend',

  projectId: '0kqoxj8a',
  dataset: 'playnchill',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
