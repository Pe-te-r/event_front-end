import { Store } from '@tanstack/store'

interface User {
  id: string
  email: string
  name: string
  role: 'guest' | 'user' | 'organizer' | 'admin'
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false
}

export const authStore = new Store<AuthState>(initialState)

// Helper functions to update state
export const authActions = {
  login: (userData: User, token: string) => {
    authStore.setState({
      user: userData,
      token,
      isAuthenticated: true
    })
    // Optional: Save to localStorage
    localStorage.setItem('auth', JSON.stringify({ user: userData, token }))
  },

  logout: () => {
    authStore.setState(initialState)
    localStorage.removeItem('auth')
  },

  initialize: () => {
    // Check localStorage on app startup
    const savedAuth = localStorage.getItem('auth')
    if (savedAuth) {
      try {
        const { user, token } = JSON.parse(savedAuth)
        authStore.setState({
          user,
          token,
          isAuthenticated: true
        })
      } catch (e) {
        localStorage.removeItem('auth')
      }
    }
  }
}