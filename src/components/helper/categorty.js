import axios from "axios"
import { useEffect, useState } from "react"
import { API } from '../../config'
// 获取分类

export default function GetCategorty  ()  {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function get () {
      const  {data}  = await axios.get(`${API}/categories`)
      setCategories(data)
      // return categories
    }
    get()
  },[])
  return categories
}
