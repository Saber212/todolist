import {useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import Pagination from './components/Pagination';
import TodoForm from './components/TodoForm';
import CreateButton from './components/CreateButton';
import Todo from './components/Todo';
import Update from './components/Update';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';

function App() {
   const [data, setData] = useState([]);
   const [id, setId] = useState("");
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [date, setDate] = useState('');
   const [currentpage, setCurrentPage] = useState(1); 
   const [postsPerPage] = useState(5); 

   const indexOfLastPost = currentpage * postsPerPage; 
   const indexOfFirstPost = indexOfLastPost - postsPerPage; 
   const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

   const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
   }

   useEffect(() => {
    getTask()
  },[])
function getTask(){
      fetch('/api/task')
      .then(response => {
          return response.json()
      })
      .then(result => {setData(result);
       if(Array.isArray(data)) {
        setTitle(result[0].title); 
        setDescription(result[0].description); 
        setDate(result[0].date)
        setId(result[0].id);}
        else{
          setTitle("");
          setDescription("");
          setDate("");
          setId("");
        }
      })
  }

  return (
    <Router>
      <Container>
      <div className="App">
        
        <h1>Welcome to your personal todolist! Lets organize your life!</h1>
        <Switch>
            <Route path="/Todoform">
              <TodoForm/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          <Route path="/update">
            <Update data={data} setDate={setDate} setDescription={setDescription} id = {id} description={description} setTitle={setTitle}title={title}/>
          </Route>
          <Route path="/todo">
            <Search title={title} setTitle={setTitle}/>
            <Todo data={currentPosts} setData={setData}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
          </Route>
        </Switch>
      </div>    
      </Container>  
    </Router>
  );
}
export default App;
