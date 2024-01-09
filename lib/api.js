import {createClient} from 'microcms-js-sdk'

const createClient = () => ({serviceDomain: process.env.SERVICE_DOMAIN,
                              apikey: process.env.API_KEY,})
export const client
