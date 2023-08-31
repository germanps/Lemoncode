import { Member } from '~~/types'

const organization = 'lemoncode'

export const membersService = {
  async get() {
    const members = await $fetch<Member[]>(
      `https://api.github.com/orgs/${organization}/members`
    )
    return members
  },
}
