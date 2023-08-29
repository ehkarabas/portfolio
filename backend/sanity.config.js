import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const REACT_APP_SANITY_PORTFOLIO_PROJECT_ID = process.env.REACT_APP_SANITY_PORTFOLIO_PROJECT_ID

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: REACT_APP_SANITY_PORTFOLIO_PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
