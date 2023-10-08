// api/formService.ts
import axios from 'axios';

const BASE_URL = 'http://your-api-base-url.com'; 

const FormService = {
  submitForm: async (formData: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/form/submit`, formData);
      return response.data; 
    } catch (error) {
      throw error;
    }
  },

  // Add other form-related methods here
};

export default FormService;
