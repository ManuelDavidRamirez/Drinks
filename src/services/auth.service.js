import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL_AUTH

export const registerAuthService = async (info) => {
    try {
        const url = `${apiURL}register`
        const { data } = await axios.post(url, {
            ...info
        }, {
            headers: {
                "Content-Type": "Application/json"
            },
        })
        return data
    } catch (error) {
        throw error.response.data
    }
}

export const loginAuthService = async (info) => {
    try {
        const url = `${apiURL}login`
        const { data } = await axios.post(url, {
            ...info
        }, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        return data
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
}

export const toggleFavoriteService = async (idDrink) => {
    try {
        const token = sessionStorage.getItem("DrinksToken")
        if (!token) {
            return null
        }
        const url = `${apiURL}favorite?drink=${idDrink}`
        const { data } = await axios.get(url, {
            headers : {
                Authorization : token
            }
        })
        return data
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
}

export const profileUserService = async (token) => {
    try {
        const url = `${apiURL}profile`
        const { data } = await axios.get(url, {
            headers : {
                Authorization : token
            }
        })
        return data
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
}