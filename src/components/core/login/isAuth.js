export const isAuth = () => {
  return JSON.parse(localStorage.getItem('user'))
}