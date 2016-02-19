import React, {PropTypes} from 'react';
import $ from 'jquery';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PostList from '../components/PostList';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    $.ajax({
      url: 'http://demo.wp-api.org/wp-json/wp/v2/posts?_jsonp=?',
      dataType: 'jsonp',
      jsonp: 'wpdemo'
    })
    .success(posts => {
      console.log(posts);
      this.setState({posts});
    });
  }

  render() {
    return (
      <div id="layout" className="pure-g">
        <div className="sidebar pure-u-1 pure-u-md-1-4">
          <Header/>
        </div>

        <div className="content pure-u-1 pure-u-md-3-4">

          <div className="posts">
            <h1 className="content-subhead">Recent Posts</h1>
            <PostList posts={this.state.posts} />
          </div>

          <Footer />

        </div>
      </div>
    );
  }

}

App.propTypes = {};
