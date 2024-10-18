import {createClient, OAuthStrategy} from '@wix/sdk'
import {items} from '@wix/data'
import Cookies from 'js-cookie'

export const getWixClient = async () => {
  const wixClient = createClient({
    modules: {items},
    auth: OAuthStrategy({
      clientId: process.env.WIX_API_KEY!,
      tokens: JSON.parse(Cookies.get('session') || '{}'),
    }),
  })
  return wixClient
}