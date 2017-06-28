import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  Alert,
  Vibration,
  StatusBar
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import * as globalStyles from '../styles/global';

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsFeed'
    };
  }

  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming Soon!',
      'We\'re hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
  }

  render() {
    const { selectedTab, tab } = this.props;
    return (
      <TabBarIOS
        barTintColor={globalStyles.BAR_COLOR}
        tintColor={globalStyles.LINK_COLOR}
        translucent={false}
      >
        <TabBarIOS.Item
          systemIcon={'featured'}
          selected={selectedTab === 'newsFeed'}
          onPress={() => tab({'newsFeed' })}
        >
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'search'}
          selected={selectedTab === 'search'}
          onPress={() => tab({'search' })}
        >
          <SearchContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'bookmarks'}
          selected={selectedTab === 'bookmarks'}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

HomeScreen.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.func.isRequired
};
