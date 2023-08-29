import {defineCliConfig} from 'sanity/cli'

const REACT_APP_SANITY_PORTFOLIO_PROJECT_ID = process.env.REACT_APP_SANITY_PORTFOLIO_PROJECT_ID

export default defineCliConfig({
  api: {
    projectId: REACT_APP_SANITY_PORTFOLIO_PROJECT_ID,
    dataset: 'production',
  },
})
