import { createStore } from 'redux';
import reducer from './reducer/reducer';
//   //Create Reducer (state and action)
//   const reducer = (state = defaultState, action) => {
//     //Create action and return state if you want to change state
//     switch(action.type){
//         case 'FILTER_SHOW_ALL':
//             return {...state, filterStatus: 'SHOW_ALL'};
//         case 'FILTER_MEMORIZED':
//             return {...state, filterStatus: 'MEMORIZED'};
//         case 'FILTER_NEED_PRACTICE':
//             return {...state, filterStatus: 'NEED_PRACTICE'};
//         case 'MEMORIZED':
//             return {
//               ...state,
//               arrWords: state.arrWords.map(e => {
//                 if(e.id !== action.id) return e;
//                 return {...e, memorized: !e.memorized};
//               })
//         };
//         case 'IS_ADDING':
//             return {
//               ...state,
//               isAdding: !state.isAdding
//         };
//         case 'ADD_WORD':
//             return {
//               ...state,
//               arrWords: [{id: state.arrWords.length + 1,
//                  en: action.en, 
//                  vn: action.vn, 
//                  memorized: false, 
//                  isShow:true
//               }].concat(state.arrWords)
//         };
//         case 'SHOW':
//         return {
//           ...state,
//           arrWords: state.arrWords.map(e => {
//             if(e.id !== action.id) return e;
//             return {...e, isShow: !e.isShow};
//           })
//     };
//         default: 
//             break;
//     }
//     return state;
// }
  //Create Store
const store = createStore(reducer);
  //Integrated store to application need import component Provider react-redux
export default store;