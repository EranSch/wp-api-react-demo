import React, {PropTypes} from 'react';

export default class PostList extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.posts)
  }

  renderPosts(post, i) {
    console.log(i, post)
    return (
      <section className="post" key={i}>
          <header className="post-header">
              <img className="post-avatar" alt="Eric Ferraiuolo's avatar" height="48" width="48" src="http://purecss.io/img/common/ericf-avatar.png" />
              <h2 className="post-title">
                {post.title.rendered}
              </h2>
              <p className="post-meta">
                  By <a className="post-author" href="#">Eric Ferraiuolo</a> under <a className="post-category post-category-js" href="#">JavaScript</a>
              </p>
          </header>

          <div className="post-description" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>
          </div>
      </section>
    );
  }

  render() {
    return (
      <div>
        {this.props.posts.map(this.renderPosts)}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array
};
