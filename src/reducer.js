export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:'BQCPWs9ffOS5_6MLznr0RB__iXeXKKiDyV3-x9BgMGmF6bI2UW7GLOjH8YXx78MHSQs69q7ocua_oQP8Q4S74nSxBSs8J4ig81NQQ7Uat-izUMKOTsBJoNWx65AFTvfT22XwpJz5SQxFYJkMCwR0M3SldUAfhPJl9gLmPAKe_wWvujJ_'

}

const reducer=(state,action)=>{
console.log(action);
    switch(action.type)
    {
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            };
        default:
            return state;
    }
}
export default reducer;