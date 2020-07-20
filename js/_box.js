


// 'use strict';

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return (
//       <button onClick={() => this.setState({ liked: true }) }>
//         Like
//       </button>
//     );
//   }
// }

// const domContainer = document.querySelector('#boxList');
// ReactDOM.render(<LikeButton />, domContainer);




// const listData = Array.from(
//     // 오름차순
//     Data.sort((a,b)=>{
//         return a.num - b.num;
//     })
// )

// function List(props){
//     props = listData;

//     return(<>
//         {listData.map((con) =>(
//             <div className={`con-box-list ${props.divClass}`} key={props.num}>
//                 <h3 className={`list-num `}>{props.num}</h3>
//                 <div className="list-img">
//                     <img src={props.imgSrc} alt={props.imgName} />
//                 </div>
//                 <div className="list-text">
//                     <p className="list-text-tit">{props.title}</p>
//                     <p className="list-text-label">{props.label}</p>
//                     <p className="list-text-link">
//                         {props.button}
//                         {/* <a href={props.href} className={props.class} target="_blank">
//                             {props.btnName}
//                         </a> */}
//                     </p>
//                 </div>
//             </div>
//         ))}
//     </>)
// }



// ReactDOM.render(
//   <List />, 
//   document.querySelector('#boxList')
// );




// const NewHOC = (PassedComponent) => {
//   return class extends React.Component {
//     render() {
//       return (
//         <div>
//           <PassedComponent {...this.props} />
//         </div>
//       )
//     }
//   }
// }

// const Movie = ({name}) => <div>{name}</div>

// const NewComponent = NewHOC(Movie);

// function App() {
//   return (
//     <div>
//       <NewComponent name="Kill Bill" />
//     </div>
//   );
// }

// ReactDOM.render(
//     <App />, 
//     document.querySelector('#boxList')
// );



