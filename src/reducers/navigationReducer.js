import { NavigationExperimental } from 'react-native';
import { NAVIGATION_PUSH, NAVIGATION_POP, NAVIGATION_TAB, NAVIGATION_OPEN_MODAL,NAVIGATION_CLOSE_MODAL } from '../actions/actionTypes';
import IntroScreen from '../components/IntroScreen';
import HomeScreenContainer from '../components/HomeScreenContainer';

const { StateUtils } = NavigationExperimental;

   const routes = {
     home: {
       key: 'home',
       title: 'RNNYT',
       component: HomeScreenContainer,
       index: 0,
       routes: [
         {key: 'newsFeed', modal: 'http://example.com'},
         {key: 'search'},
         {key: 'bookmarks'}
       ]
     },
intro: {
       key: 'intro',
       title: 'Welcome',
       component: IntroScreen
     }
   };
   const initialState = {
     index: 0,
     routes: [
       routes.intro
     ]
};

export default (state = initialState, action = {}) => {


      if (action.type === NAVIGATION_PUSH) {
       return StateUtils.push(state, routes[action.payload]);
     } else if (action.type === NAVIGATION_POP) {
       return StateUtils.pop(state);
     } else if (action.type === NAVIGATION_TAB){
       const homeState = StateUtils.get(state, 'home');
       const updateHomeState = StateUtils.jumpTo(homeState,action.payload);
       return StateUtils.replaceAt(state,'home', updateHomeState);
     } else if (action.type === NAVIGATION_OPEN_MODAL){
       const homeState = StateUtils.get(state, 'home');
       const openTabState = homeState.routes[homeState.index];
       const updatedTabState = {...openTabState, modal: action.payload};
       const updateHomeState = StateUtils.replaceAt(homeState,openTabState,updatedTabState);
       return StateUtils.replaceAt(state,'home', updateHomeState);
     }else if (action.type === NAVIGATION_CLOSE_MODAL){
       const homeState = StateUtils.get(state, 'home');
       const openTabState = homeState.routes[homeState.index];
       const updatedTabState = {...openTabState, modal: underfined};
       const updateHomeState = StateUtils.replaceAt(homeState,openTabState,updatedTabState);
       return StateUtils.replaceAt(state,'home', updateHomeState);
     }
     return state;
   };
