import { useState , useEffect} from 'react'



import './App.css'

function App() {
  const [users , setUsers] = useState([])
   const controller = new AbortController();

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {

   const random = Math.floor(Math.random() * 50) + 1;
    const url = `https://api.freeapi.app/api/v1/public/randomusers?page=${random}&limit=10`;
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
      signal: controller.signal,
    };

    try {
      const response = await fetch(url, options);
      const users = await response.json();
      setUsers(users.data.data);
    } catch (error) {}
  };



  return (
    <>
   <section className='users'>
    {users.map((user)=>(
      <article key={user.id}>
        <img src={user.picture.medium}></img>
        <h2>
          {user.name.title} {user.name.first} {user.name.last} 
        </h2>

        <p> {user.gender}</p>

        <p>
          Address : {user.location.city} {user.location.state} {user.location.country}
        </p>

        <p> 
          Contact : {user.email}<br></br>mobile :
          {user.phone}
        </p>

      </article>
    ))}

   </section>
   <button onClick={fetchData}>Generate Random User</button>
    </>
)
      
}

export default App
