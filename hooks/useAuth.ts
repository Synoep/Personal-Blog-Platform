import { useAuthContext } from '../context/AuthContext';

export function useAuth() {
    const { user, login, logout } = useAuthContext();

    const isLoggedIn = !!user;

    return { user, isLoggedIn, login, logout };
}
    