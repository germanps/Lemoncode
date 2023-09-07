import { Member, MemberDetail } from '~~/types'

//get all members by organization1
export const membersService = {
  async get() {
    const { company } = useCompanyStore()    
    try {
      const members = await $fetch<Member[]>(
        `https://api.github.com/orgs/${company}/members`
      )
      return members
      
    } catch (error) {
      return []
    }
    
  },

  //get member by login prop (string name)
  async getMemberByLogin(login: string) { 
    const member = await $fetch<MemberDetail>(
      `https://api.github.com/users/${login}`
    )
    return member
  }
}
