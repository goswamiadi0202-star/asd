import { createClient } from 'next-sanity'
import { dataset, apiVersion } from '../env'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

const isSanityConfigured =
  projectId && projectId !== 'your_project_id' && /^[a-z0-9-]+$/.test(projectId)

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : (null as unknown as ReturnType<typeof createClient>)

export const writeClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : (null as unknown as ReturnType<typeof createClient>)
