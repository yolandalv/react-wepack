import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import HelloHandler from './hello.js';
// import Forms from './form.js';
import Timer from './timer.js';
import Menu from './menu.js';
import Data from './data.js';

// let App = React.createClass({
//   render() {
//     return (
//       <div className="nav">
//         <Link to="/hello" className="hellolink">Say Hello</Link>
//         <Link to="/timer" className="timerlink">Timer</Link>
//         <Link to="/data" className="datalink">Data Growth</Link>
//         {this.props.children}
//       </div>
//     );
//   }
// });


// ReactDOM.render(
//   (<Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="/hello" component={HelloHandler} />
//       <Route path="/timer" component={Timer} />
//       <Route path="/data" component={Data} />
//     </Route>
//   </Router>), document.getElementById('content'));

// class HelloWorld extends React.Component{
//   render() {
//     return (
//       <p>
//         Hello,<input type="text" placeholder="your name here"/>!
//         It is {this.props.date.toTimeString()}
//       </p>
//     );
//   }
// };

// setInterval(function() {
//   ReactDOM.render(<HelloWorld date={new Date()} />,
//   document.getElementById('content'))
// }, 1000);

// class LikeButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       liked: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({liked: !this.state.liked});
//   }
//   render() {
//     const text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <div onClick={this.handleClick}>
//         You {text} this.Click to toggle.
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LikeButton/>,
//   document.getElementById('content')
// );

// let Hello = React.createClass(
//     {
//       getInitialState: function() {
//         alert('init');
//         return {
//           opacity:0.8,
//           fontSize: '18px',
//           color: 'green'
//         }
//       },
//       render: function() {
//         return <div style={{opacity: this.state.opacity,fontSize: this.state.fontSize, color: this.state.color}}>Hello {this.props.name}</div>
//       },
//       componentWillMount: function() {
//         alert('will');
//       },
//       componentDidMount:function() {
//         alert('did');
//         var _self = this;
//         window.setTimeout(function() {
//           _self.setState({
//             opacity: 1.0,
//             fontSize: '12px',
//             color: '#f00'
//           });
//         },1000);
//       }
//     }
//   );

//   ReactDOM.render(
//     <Hello name="world"/>,
//     document.getElementById('content')
//   );


/*
let TestClickComponent = React.createClass({
  getInitialState: function() {
    return {
      'clickState': 1
    }
  },
  handleClick: function(event) {
    // var tipE = ReactDOM.findDOMNode(this.refs.tip);
    // if (tipE.style.display == 'none') {
    //   tipE.style.display = 'inline';
    // } else {
    //   tipE.style.display = 'none';
    // }
    this.setState({
      'clickState': !this.state.clickState
    });
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleClick} >显示|隐藏</button>
        <span style={{display: this.state.clickState ? 'inline' : 'none'}} >测试显示或者隐藏</span>
      </div>
    );
  }
});

let TestInputComponent = React.createClass({
  getInitialState: function() {
    return {
      'inputContent': ''
    }
  },
  handChange: function(event) {
    this.setState({
      'inputContent': event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.handChange}/><span>{this.state.inputContent}</span>
      </div>
    );
  }
});

ReactDOM.render(
    <div>
      <TestClickComponent/>
      <br/><br/><br/>
      <TestInputComponent/>
    </div>,
    document.getElementById('content')
  );
*/


var CheckLink = React.createClass({
  render: function() {
    return <a {...this.props}>{'~'}{this.props.children}</a>
  }
});

ReactDOM.render(
  <CheckLink href="/checked.html" >Click here</CheckLink>,
  document.getElementById('content')
);



/*
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div onClick={this.tick}>
        Click: {this.state.count}
      </div>
    )
  }
}

Counter.proptypes = {initialCount: React.PropTypes.number};
Counter.defaultProps = {initialCount: 0};

// var Counter = React.createClass({
//   getInitialState: function() {
//     return {
//       count: 0
//     };
//   },
//   tick: function() {
//     this.setState({count: this.state.count + 1});
//   },
//   render: function() {
//     return (
//       <div onClick={this.tick}>
//         Click: {this.state.count}
//       </div>
//     );
//   }
// });

ReactDOM.render(<Counter/>, document.getElementById("content"));
*/






