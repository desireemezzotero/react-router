import axios from "axios"
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"

const apiUrl = "http://localhost:3000"

const newPost = {
  title: '',
  image:'',
  content: ''
}

const NewProduct = () =>  {
  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(newPost)
  const navigate = useNavigate()

 const fetchBlog = () => {
    axios.get(`${apiUrl}/posts`)
     .then(res => {
      setPosts(res.data)})
  }

  useEffect(() => {
    fetchBlog()
  }, []);

  /* invio */
  const handleSumbit = (e) => {
    e.preventDefault();
    const newPostSend = { ...formData}

    axios.post(`${apiUrl}/posts`,newPostSend)
    .then(res => {
      setPosts(res.data)
      navigate('/prodotti')
      // resetto il form
      setFormData(newPost)
    })
  }


/*   const onChange */
  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="container">
        <div className="card p-5 mb-5">

       <form className="form-inline" onSubmit={handleSumbit}>
         <h4>Inserisci un nuovo post</h4>

       {/* titolo */}
        <input className="form-control mr-sm-2 mb-3" 
          type="text"
          name="title"
          id="title"
          placeholder="Titolo" 
          onChange={handleInput}
          value={formData.title}
        />

       {/* immagine */}
        <input className="form-control mr-sm-2 mb-3" 
           type="text"
           id="image"
           name="image"
           placeholder="url dell'immagine" 
           onChange={handleInput}
           value={formData.image}
         />

       {/* contenuto */}
        <textarea className="form-control mr-sm-2 mb-3" 
          type="text"
          name="content"
          placeholder="descrizione dell'elemento"
          onChange={handleInput}
          value={formData.content}
        >
        </textarea>
      </form>
      <button className="btn btn-outline-success my-2 my-sm-0 m-3" type="submit" onClick={handleSumbit}>INVIA</button>
      </div>
     </div> 
    </main>
  )
}

export default NewProduct






