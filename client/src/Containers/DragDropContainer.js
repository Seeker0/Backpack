// import React, { Component } from "react";
// import { connect } from "react-redux";
// import DragDrop from "../components/DragDrop";
// import { deleteItem } from "../actions";
//
// class DragDropContainer {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPouchId
//     };
//   }
//
//   onDragEnter() {}
//
//   onDrop(data) {}
//
//   render() {
//     return (
//       <div>
//         <DragDrop onDragLeave={this.props.onDragLeave} />
//       </div>
//     );
//   }
// }
//
// // Define the class so that we can populate componentDidMount
// const mapStateToProps = state => {
//   //console.log("state in container", state.boards);
//   return {};
// };
//
// // Add our new getInitialBOARDS action dispatch to props
// const mapDispatchToProps = dispatch => {
//   return {
//     onDragLeave: data => {
//       dispatch(deleteItem(data));
//     }
//   };
// };
//
// // Map props and dispatch to ApodContainer which will
// // now render Apod itself.
// // Export the result of `connect` directly.
// export default connect(mapStateToProps, mapDispatchToProps)(DragDrop);
