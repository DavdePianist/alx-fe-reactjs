import { useState } from "react"
import { searchUsers } from "../services/githubService"

const Search = () => {
  const [query, setQuery] = useState("")
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // ✅ async + await
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setUsers([])

    try {
      const data = await searchUsers(query)
      setUsers(data.items)
    } catch (err) {
      setError("Looks like we can’t find the user")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <bu
