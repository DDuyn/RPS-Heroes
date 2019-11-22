import Api from '@/services/Api'

export default {
  AddExperience (data) {
    return Api().put(`addExperience`, data)
  }
}
