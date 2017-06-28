import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/newsActions';
import { openModel, closeModal } from './actions/navigationActions';
import Search from '../components/Search';
import { searchNewsSelector } from '../selectors/newsSelectors';

const { StateUtils } = NavigationExperimental;

const mapStateToProps = state => ({
  const homeState = StateUtils.get(state.navigation, 'home');
  const searchState = homeState && StateUtils.get(homeState, 'search');
  const modal = searchState && searchState.modal;
  return{
    filteredNews: searchNewsSelector(state),
    modal: modal || underfined
  }
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchNews
    onModalOpen: openModel,
    onModalClose: closeModal
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
