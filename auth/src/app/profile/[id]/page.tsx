export default function UserProfile({params}: any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile id
            </h1>
            <p className="text-4xl">Profile page{params.id}</p>

            <hr />
            <button
             className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
        </div>
    )
}