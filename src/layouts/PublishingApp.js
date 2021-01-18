import falcorModel from '../falcorModel.js';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from '../actions/article.js';
import ArticleCard from '../components/ArticleCard';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
})


class PublishingApp extends React.Component {
  constructor(props) {
    console.log('Inside PublishingApp constructor')
    super(props);
  }

  componentWillMount() {
    console.log('Inside PublishingApp component will mount')
    if (typeof window !== 'undefined') {
      this._fetch(); // we are server side rendering, no fetching
    }
  }

  async _fetch() {
    console.log('Inside PublishingApp fetch method')

    const articlesLength = await falcorModel.getValue('articles.length').then((length) => length);

    const articles = await falcorModel.
      get(['articles',
        { from: 0, to: articlesLength - 1 },
        ['_id', 'articleTitle', 'articleContent']])
      .then((articlesResponse) => articlesResponse.json.articles);

    this.props.articleActions.articlesList(articles);
  }

  // below here are next methods o the PublishingApp
render () {
let articlesJSX = [];
for(let articleKey in this.props.article) {
const articleDetails = this.props.article[articleKey];
const currentArticleJSX = (
<div key={articleKey}>
<ArticleCard
title={articleDetails.articleTitle}
content={articleDetails.articleContent} />
</div>
);
articlesJSX.push(currentArticleJSX);
}
return (
<div style={{height: '100%', width: '75%', margin: 'auto'}}>
{articlesJSX}
</div>
);
}
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);
