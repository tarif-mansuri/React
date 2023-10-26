// var elementH1 = document.createElement('h1');
// elementH1.innerText = 'This is a heading';
// elementH1.classList.add('heading');

// var container = document.getElementById('container');
// container.appendChild(elementH1);


//Using React
// var elementH1 = React.createElement('h1',{children:'This is a heading', className:'heading'});
// ReactDOM.createRoot(document.getElementById('container')).render(elementH1);


//Using React and Babel
// var elementH1 = <>
//                     <h1 className="heading">This is a heading</h1> 
//                     <p>This is a paragraph</p>
//                 </>


// function MyComponent(){
//      return  (
//         <>
//             <h1 className="heading">This is a heading</h1>
//             <p>This is a paragraph</p>
//         </>
//      )
// }

var ages = [10,20,30, 40, 50];



var MyComponent = ()=>{
       
    return <>
           <h1 className="heading">This is a heading</h1>
           <ul>
            {ages.map(
                (ele, index)=>{
                    return <li key={index}>{ele}</li>
                }
            )}
           </ul>
       </>
}

var GodsComponent = ()=>{
    var ages = [
        {
            name: 'Ram Ji',
            age: '26',
            address: 'Ayodhya'
        },{
            name: 'Seeta Ji',
            age: '20',
            address: 'Nepal'
        },{
            name: 'Radha',
            age: '17',
            address: 'Mathura'
        }
     ];
     return (
        <>
            <table>
              <thead>
              <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
              </thead>
                <tbody>
                {ages.map(
                    (e, i)=>{
                        return (
                            <tr key={i}>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.address}</td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </>
     )
}

var myReact = ReactDOM.createRoot(document.getElementById('container'));
myReact.render(
    <>
        <GodsComponent />
        <MyComponent />
    </>
);