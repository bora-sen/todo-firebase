import { createContext,useState } from "react";
import { Auth } from "../firebaseConfig";


export const AuthContext = createContext();


function AuthProvider({children}){

    const [user,setUser] = useState(Auth.currentUser);


    /*
    useEffect(() => {
        onIdTokenChanged(auth,(user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    },[])
    */





    const data = {
        Auth,
        setUser,
        user
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;