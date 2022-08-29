export default function(state, action){
    switch(action.type){
        case 'ADD_WORK':
            const {favoriteJob} = action.payload;
            const newList = [...state.workList, favoriteJob];
            return {...state, workList: newList};
        case 'REMOVE_WORK':
            const {removeItem} = action.payload;
            state.workList = state.workList.filter((item)=>item !== removeItem);
            return {...state}
        default:
            return state;
        }
}