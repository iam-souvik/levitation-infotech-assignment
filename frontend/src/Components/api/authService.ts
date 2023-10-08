// api/authService.ts
import axios from 'axios';

const BASE_URL = 'http://your-api-base-url.com'; /

const AuthService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data; 
    } catch (error) {
      throw error;
    }
  },

  register: async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
      });
      return response.data; 
    } catch (error) {
      throw error;
    }
  },

  
};

export default AuthService;
