const initReducer = (state = 0, action: any) => {
   switch (action.type) {
      case 'action':
         return state + 1;
      default:
         return state;
   }
}

export default initReducer;
