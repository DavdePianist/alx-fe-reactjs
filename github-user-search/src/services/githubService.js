import axios from "axios"

// GitHub Search Users API
const BASE_URL = "https://api.github.com/search/users?q="

// ✅ includes location and minRepos explicitly
export const searchUsers = async (query, location, minRepos) => {
  let searchQuery = query

  if (location) {
    searchQuery += ` location:${location}`
  }

  if (minRepos) {
    searchQuery += ` repos:>=${minRepos}`
  }

  const response = await axios.get(
    `${BASE_URL}${searchQuery}`
  )

  return response.data
}
