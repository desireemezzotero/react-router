import axios from "axios";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import DetailProducts from "../complements/DetailProducts";


function Details() {
  const {id} = useParams();
  const apiUrl = "http://localhost:3000";

  const [post, setPost] = useState(null)

  const fetchBlog = () => {
    axios.get(`${apiUrl}/posts/${id}`)
     .then(res => {
      setPost(res.data)
      console.log(res.data)})
      .catch (error => 
      console.log('errore nel caricamento della descrizione')
      )
  }

  useEffect(() => {
    fetchBlog()
  }, [id]);

  return (
    <> 
    {!post ? (
      <p>Caricamento in corso...</p>
    ) : (
      <DetailProducts post={post} />
    )}
    </>
  )
}

export default Details