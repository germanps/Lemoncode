import { Member } from '~~/types'

const organization = 'lemoncode'

//get all members by organization1
export const membersService = {
  async get() {
    const members = await $fetch<Member[]>(
      `https://api.github.com/orgs/${organization}/members`
    )
    return members
  },

  //get member by login prop (string name)
  async getMemberByLogin(login: string) { 
    const member = await $fetch<Member>(
      `https://api.github.com/users/${login}`
    )
    return member
  }
}
