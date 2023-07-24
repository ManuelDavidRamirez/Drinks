import { useEffect } from "react"
import useUser from '../../hooks/useUser'

export const Profile = () => {

    const { userProfile, getProfile } = useUser()

    useEffect(() => {
        getProfile()
    }, [])

    return (
        userProfile && (
            <div>
                <h2>{userProfile.name}</h2>
                <hr />
                <h3>{userProfile.email}</h3>
            </div>
        )
    )
}