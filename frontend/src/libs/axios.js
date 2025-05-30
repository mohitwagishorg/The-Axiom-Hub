import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL:
//     // Check for "development" (lowercase) mode as set by Vite
//     import.meta.env.MODE === "development"
//       ? `${import.meta.env.VITE_API_BASE_URL}/api/v1` // Corrected variable name: VITE_API_BASE_URL
//       : `${import.meta.env.VITE_API_BASE_URL || ""}/api/v1`, // Use VITE_API_BASE_URL for production too, with a fallback for empty string
//   withCredentials: true,
// });

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080/api/v1"
      : "https://the-axiom-hub.onrender.com/api/v1",
  withCredentials: true,
});
