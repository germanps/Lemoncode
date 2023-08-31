import { Members } from '~~/types'

const organization = 'lemoncode'

export const membersService = {
  async get() {
    const members = await $fetch<Members[]>(
      `https://api.github.com/orgs/${organization}/members`
    )
    return members
  },
}
