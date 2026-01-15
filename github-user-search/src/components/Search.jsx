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
        <button className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </form>

      {/* ✅ conditional rendering with && */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      (location) {
    searchQuery += ` location:${location}`
  }

      {/* ✅ map */}
      {users.length > 0 && (
        <ul className="mt-6 space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="border p-4 rounded flex items-center gap-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
