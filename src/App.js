import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 let person = {
   name : 'alomgir',
    job: 'singer' 
 }
 let person2 ={
   name:'halima',
   job: 'marketing' 
 }
 let  style = {
   color : 'red',
   backgroundColor: 'green'
 }

 const arr  = ['ramim' , 'shamim','hashim','khokon', 'sara' , 'jamila','sahel','hakim'];
 const productList = [
   {name:'Adobe' , price: '$23.99'},
   {name:'illuster' , price: '$ 99.12'},
   {name:'Netflix' , price: '$ 299.12'},
   {name:'ema-jhon' , price: '$ 299.12'}
];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  work <code>src/App.js</code> and save to reload.
        </p>

        <h2  style={style}> Singer list : {'name: '+person.name +' job:'+ person.job} </h2>
        <h2 style={{ color:'red', backgroundColor:'green'}}>singer list : {person2.name +' '+ person2.job} </h2>
        <p className='p'>  my first paragraph </p>
          <Users> </Users>
         <ul>
           { arr.map( nayok=> <li> { nayok}</li>)}
         </ul>
         <ul>
           {productList.map( products=> <li> {products.name }{products.price }  </li>)}
         </ul>

         {
           productList.map(products =>  <Product product={products} ></Product> )
         }
          <Product product = {productList[0]}></Product>
          <Product product = {productList[1]}></Product>
          

          <PersonName name={arr[0]}> </PersonName>
          <PersonName name={arr[2]}></PersonName>
          <PersonName></PersonName>

          <PersonName2 name='manna' nayika='moyshumi'></PersonName2>
          <PersonName2 name='joshim' nayika='shaana'></PersonName2>

          <Counter> </Counter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
};

function Users(){
  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUser(data))
  } ,[] )
  return (
    <div>
      <h1> Dynamic Users { user.length}</h1>
      {console.log(user)}
      <ul>
        {
          user.map( users=> <li>{users.name}  {users.phone} {users.email} </li>)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const [count , setCount] = useState(10);
  const decrease =  ()=>setCount(count-1);
  return (
    <div>
      <h1> Count:{count}</h1>
      <button onClick={()=>  setCount(count+1)}> Like</button>
      <button onClick={decrease}>Unlike</button>
    </div>
  )
}


function PersonName(props) {
  return (
 <div style={{border:'1px solid red ' , margin:'10px' }}>
      <h1> {props.name} </h1>
      <h4>pleyer of the match </h4>
      <h4>Dhaka Demaite</h4>
       <h2> orishhal  </h2>
 </div> 
  )
};


function PersonName2(props) {
  return (
 <div style={{border:'1px solid red ' , margin:'10px' }}>
      <h1 >  {props.name} , { props.nayika}</h1>
      <h4> {props.name} , { props.nayika} </h4>
      <h4>Dhaka Demaite</h4>
       <h2> orishhal  </h2>
 </div> 
  )
};


function Product (props){
  const productStyle ={
    height:'250px',
    width : '200px',
    border:'1 px solid gray',
    borderRadius:'6 px',
    backgroundColor: 'lightGrey',
    margin: '10px'
  }
  const { name , price } =props.product
  return (
    <div style={productStyle}>
      <h3> {name}</h3>
      <h4>{price}</h4>
      <button>Bya now</button>
    </div>
  )
}

export default App;
