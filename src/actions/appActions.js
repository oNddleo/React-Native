export function toogleIsAdding(){
    return {type: 'IS_ADDING'};
}
export function addWord(en, vn){
    return { type: 'ADD_WORD', en, vn };
}
export function toogleShow(id){
    return { type: 'SHOW', id }
}
export function toogleMemorized(id){
    return { type: 'MEMORIZED', id};
}
export function filterShowAll(){
    return { type: 'FILTER_SHOW_ALL'};
}
export function filterMemorized(){
    return { type: 'FILTER_MEMORIZED'};
}
export function filterNeedPractice(){
    return { type: 'FILTER_NEED_PRACTICE'};
}