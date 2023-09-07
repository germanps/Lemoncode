import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCompanyStore = defineStore('company', () => {
    const company = ref('lemoncode')

    const addCompany = (company: string) => {
        company = company
    }
    
    return {
        company,
        addCompany
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCompanyStore, import.meta.hot))
}