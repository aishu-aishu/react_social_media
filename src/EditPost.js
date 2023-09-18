import React , {useContext, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {
    const {posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit} = useContext(DataContext)
    const {id} = useParams();
    const post = posts.find((post) => (post.id).toString() === id);

    useEffect(() => {
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post,setEditTitle,setEditBody])

  return (
    <main className='EditPost'>
        {editTitle && 
        <>
            <h2>Edit Post</h2>
            <form className='editPostForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='editTitle'>Title:</label>
                <input
                    id="editTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor='editBody'>Post:</label>
                <textarea
                    id = "editBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" onClick={() => handleEdit(post.id) }>Submit</button>
            </form>
        </>
        }
        {!editTitle && 
        <>
            <h2>Post not found</h2>
            <Link to="/">Please visit Home page</Link>
        </>
        }
    </main>
  )
}

export default EditPost