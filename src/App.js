import React from 'react';
import {Routes, Route} from 'react-router-dom'
// import format from 'date-fns/format';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
// import Post from './Post';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
// import PostLayout from './PostLayout';
// import api from './api/posts';s
import EditPost from './EditPost';
// import useWindowSize from './hooks/useWindowSize';
// import useAxiosFetch from './hooks/useAxiosFetch';
import {DataProvider} from './context/DataContext';

function App() {

  // const [posts,setPosts] = useState([
  //   {
  //     id : 1,
  //     title : "My first post",
  //     dateTime : "March 25, 2022 10:34:45 AM",
  //     body : "Completed Java Certification"
  //   },
  //   {
  //     id : 2,
  //     title : "My second post",
  //     dateTime : "March 25, 2022 10:34:45 AM",
  //     body : "Attended Big data Workshop"
  //   },
  //   {
  //     id : 3,
  //     title : "My third post",
  //     dateTime : "March 25, 2022 10:34:45 AM",
  //     body : "Participated in Coding Challenge"
  //   },
  //   {
  //     id : 4,
  //     title : "My fourth post",
  //     dateTime : "March 25, 2022 10:34:45 AM",
  //     body : "Trained Students in Python"
  //   },
  // ])

  return (
    <div className="App">
    <DataProvider>
      <Header title="Social Media Demo" />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="post">
            <Route index element={<NewPost />}/>
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path ="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        
        
        {/* <Home 
          // posts={posts}  
          // We have given {search results} instead of {posts} for showing the latest posts in top and old posts in down
          posts = {searchResults}
        />
      
        {/* <PostPage /> */}
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
