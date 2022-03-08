import sanityClient from '@sanity/client'

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_VERSION,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn: false,
}

export const client = sanityClient(config)