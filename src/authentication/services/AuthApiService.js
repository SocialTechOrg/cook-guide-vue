import axios from "axios";

const http = axios.create({
baseURL:'http://localhost:3000/users'
});

export class AuthApiService {
    signUp(name, lastname, id, type, email, user, password, picture, phone, birthday, gender, diet, allergies, preferences, needs, height, weight ){
        return http.post('', {
            name: name,
            lastname: lastname,
            id: id,
            type: type,
            email: email,
            user: user,
            password: password,
            picture: picture,
            phone: phone,
            birthday: birthday,
            gender: gender,
            diet: diet,
            allergies: allergies,
            preferences: preferences,
            needs: needs,
            height: height,
            weight: weight
        })
    }


    getUserById(id){
        return http.get(`${id}`)
    }
    async login(email, password) {
        try {
            // Realiza una solicitud HTTP para verificar las credenciales del usuario
            const response = await http.get('', {
                params: {
                    email,
                    password
                }
            });

            // Verifica si se encontró un usuario con las credenciales proporcionadas
            if (response.data.length > 0) {
                // Devuelve el primer usuario encontrado (puedes ajustar esto según tu lógica)
                return response.data[0];
            } else {
                return null; // Credenciales incorrectas, no se encontró ningún usuario
            }
        } catch (error) {
            throw error; // Manejo de errores en caso de problemas con la solicitud HTTP
        }
    }



}