// var elementH1 = document.createElement('h1');
// elementH1.innerText = 'This is a heading';
// elementH1.classList.add('heading');

// var container = document.getElementById('container');
// container.appendChild(elementH1);


//Using React
// var elementH1 = React.createElement('h1',{children:'This is a heading', className:'heading'});
// ReactDOM.createRoot(document.getElementById('container')).render(elementH1);


//Using React and Babel
var elementH1 = (
    <h1 className="heading">This is a heading</h1>
);
ReactDOM.createRoot(document.getElementById('container')).render(elementH1);