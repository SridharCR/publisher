import react from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({});

class PublishingApp extends React.component {
  constructor(props){
    super(props);
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
