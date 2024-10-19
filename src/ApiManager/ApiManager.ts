import ApiMethods from "./ApiMethods";
import ENDPOINTS from "./EndPoints.ts";
// const BASE_URL = "http://192.168.147.248:8000/";

// Por si se cambia de BASE_URL, como producción

// TODO: Implementar autentiación
// const getAuthToken = () => {
//   const auth_token = store.getState().userData.auth_token;
//   return `Bearer ${auth_token}`;
// };

// const App_key = "key_api"

class ApiManager {
  static getPaciente = (id: number) => {
    const url = `${ENDPOINTS.GET_PACIENTE(id)}`;

    return ApiMethods.get(url);
  };
}

export default ApiManager;
