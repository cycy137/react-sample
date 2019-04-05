

function appreducer (state , action) {
  switch (action.type) {
      case 'CHANGE': {
          if(state.navlue==='hidden'){

              return {...state,content:!state.content,navlue: 'show'}
          }
          return {...state,content:!state.content,navlue:'hidden'}
      }
      default :{ return state
      }
  }

}
export default appreducer;