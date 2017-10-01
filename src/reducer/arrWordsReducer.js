//Create State
const initialData = [
    {id: 1, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 2, en: 'action', vn: 'hanh dong', memorized: false, isShow: false},
    {id: 3, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 4, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 5, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 6, en: 'action', vn: 'hanh dong', memorized: false, isShow: false},
    {id: 7, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 8, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 9, en: 'action', vn: 'hanh dong', memorized: false, isShow: false},
    {id: 10, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 11, en: 'action', vn: 'hanh dong', memorized: false, isShow: false},
    {id: 12, en: 'action', vn: 'hanh dong', memorized: true, isShow: false},
    {id: 13, en: 'action', vn: 'hanh dong', memorized: false, isShow: false},
    {id: 14, en: 'action', vn: 'hanh dong', memorized: true, isShow: false}
];

const arrWordsReducer = (state = initialData, action) => {
    if(action.type === 'MEMORIZED') return state.map(e => {
        return (e.id !== action.id) ? e : {...e, memorized: !e.memorized};
    });
    if(action.type === 'SHOW') return state.map(e => {
        return (e.id !== action.id) ? e : {...e, isShow: !e.isShow};
    });
    if(action.type === 'ADD_WORD') return [{
        id: state.length + 1,
        en: action.en,
        vn: action.vn,
        memorized: false, 
        isShow:true
    }].concat(state);
    return state;
}
export default arrWordsReducer;