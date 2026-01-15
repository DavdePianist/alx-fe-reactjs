import axios from "axios"

// GitHub Search Users API
const BASE_URL = "https://api.github.com/search/users?q="

// ✅ async + await + explicit URL
export const searchUsers = async (query) => {
  const response = await axios.get(
    `${BASE_URL}${query}`
  )
  return response.data
}
