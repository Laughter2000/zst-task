import { useAuth } from "contexts/AuthContext";
import React, {useState} from "react";


// <!-- Modal toggle -->
// <button classNameName="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
//   Toggle modal
// </button>


const LoginModal = () => {
    const { setIsAuthenticated} = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [backendError, setBackendError] = useState(false)
    const [inputError, setInputError] = useState(false)


    const LoginToAccount = (e) => {
        e.preventDefault()
        setBackendError(false)
        setInputError(false)
        if (!username || !password) {
            setInputError(true)
        }
        else {
            if(username === "user" && password=== "password") {
                setIsAuthenticated(true)
            }
            else {
                setBackendError(true)
            }
        }
    }

    return (
        <div className="modal opacity-100  fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg overflow-y-auto z-[999px]">
          
    
          {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
          <form className="p-8" onSubmit={e => LoginToAccount(e)}>
          { backendError && <p class="text-red-500 text-sm text-center">Invalid Username or Password.</p>}
  <div className="mb-6">
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Username</span>
    {/* <!-- Using form state modifers, the classNamees can be identical for every input --> */}
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="Username"
    />
  </label>
  { (inputError && !username) && <p class="text-red-500 text-xs italic">Please Enter your Username.</p>}
  </div>


  <div className="mb-6">
  <label className="block mt-4">
    <span className="block text-sm font-medium text-slate-700">Password</span>
    {/* <!-- Using form state modifers, the class can be identical for every input --> */}
    <input  value={password} onChange={(e) => setPassword(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*****"/>
  </label>
  { (inputError && !password) && <p class="text-red-500 text-xs italic">Please Enter your Password.</p>}
  </div>

    <div className="mx-auto text-center w-full">
  <button type="submit" className="text-center py-2 px-4 mt-4 rounded-md bg-main text-white font-bold mx-auto">Login</button>
    </div>
  {/* <!-- ... --> */}
</form>
    </div>
      </div>
     )
};


export default LoginModal;