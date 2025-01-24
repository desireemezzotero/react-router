import axios from "axios"
import { useState, useEffect} from "react"
import CardProducts from "../complements/CardProducts"

const newPost = {
  title: '',
  image:'',
  content: ''
}

const Main = () =>  {
  const apiUrl = "http://localhost:3000"
  const [posts, setPosts] = useState([])

  const fetchBlog = () => {
    axios.get(`${apiUrl}/posts`)
     .then(res => {
      setPosts(res.data)})
  }

  useEffect(() => {
    fetchBlog()
  }, []);

  /* eliminazione del post */
  const onDelete = (id) => {
    axios.delete(`${apiUrl}/posts/${id}`)
      .then(res => {
       setPosts((prevPost) => prevPost.filter (post => post.id != id))
      })
      .catch(error => {
        console.error("Errore ", error)
      })
    }

    const details = (id) => {
      axios.get(`${apiUrl}/posts/${id}`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(error => {
        console.error("Errore ", error)
      })}
  
  
   return (
    <main>
     <div className="container container-main">
        <div className="row m-5">
          {posts.map(post => ( 
            <CardProducts
            key={post.id}
            post={post}
            onDelete={() => onDelete(post.id)}
            detail= {() => details(post.id)}
            />
          ))}
        </div>{/* row */}
      </div>{/* container */}
    </main>
  )
}

export default Main