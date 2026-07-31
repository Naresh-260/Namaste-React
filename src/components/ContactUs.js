const Contactus = ()=>{
    return(
        <div>
            <h1 className="text-center text-xl font-bold"> Contact us</h1>
            
            <form className="w-6/12 m-auto">
                Namee : <input type = "text" placeholder="Enter Your name" className="m-4 p-2 border border-black" />
                email : <input type = "email" placeholder="Enter your email" className = "m-4 p-2 border border-black"/>
                <button className="bg-emerald-400 rounded-xl p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contactus;