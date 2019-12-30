import Api from '@/services/Api'

export default {
  AddExperience (data) {
    return Api().put(`addExperience`, data)
  },
  GetHero (code) {
    return Api().get(`hero/${code}`)
  }
}
