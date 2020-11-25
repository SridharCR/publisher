import react from 'react';
import { connect } from 'react-redux';
import falcorModel from '../falcorModel.js';
import {bindActionCreators} from 'redux';
import articleActions from '../actions/article.js';

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({ articleActions: bindActionCreators(articleActions, dispatch)});

class PublishingApp extends React.component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this._fetch();
  }

  async _fetch(){
    const articleLength = await falcorModel.getValue('articleLength').then((length) => length);

    const article = await falcorModel.get(['articles', {from: 0, to: articleLength-1}, ['id', 'articleTitle', 'articleContent']]).then((articlesResponse) =>
  articlesResponse.json.articles);
    this.props.articleActions.articlesList(articles);
  }



  render(){
    console.log(this.props);
    let articlesJSX = [];

    for( let articleKey in this.props) {
      const articleDetails = this.props[articleKey];
      const currentArticleJSX = (<div key={articleKey}><h2>{articlesDetails.articleTitle}</h2><h3>{articleDetails.articleContent}</h3></div>);
      articlesJSX.push(currentArticleJSX);
    }
    return (<div><h1>Out Publishing App</h1>{articlesJSX}</div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);
