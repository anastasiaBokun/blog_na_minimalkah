import React from 'react';
import ArticleDetail from "./ArticleDetail";
import './ArticleDetail.css';
import AddArticle from "./AddArticle";
import './AddArticle.css';

function Search ({filterText, onChangeFilterText}) {
    return (
        <input className='search' type="text" placeholder="Search..." value={filterText} onChange={({target: {value}}) => {
            onChangeFilterText(value)}}/>
        );
}

function AddArticleButton ({showAdd}) {
    return (
        <button className='add-article-btn' onClick={showAdd}>Add article</button>
    );
}

function SearchLine  ({filterText, onChangeFilterText, showAdd}) {
    return (
        <div className='search-line'>
            <Search filterText={filterText} onChangeFilterText={onChangeFilterText}/>
            <AddArticleButton showAdd={showAdd}/>
        </div>
    );
}

function Article ({article, user, showDetail}) {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const stringDate = new Date(article.createdAt).toLocaleString('en-US', options);
    return (
        <div className='article' onClick={() => {showDetail(article, user)}}>
            <h2 className='article-title'>{article.title}</h2>
            <img className='article-image' src={article.imageUrl}/>
            <p className='article-text'>{article.text}</p>
            <p className='article-author'>{user.name}</p>
            <p className='article-date'>{stringDate}</p>
        </div>
    );
}

function ArticlesList ({articles, users, showDetail}) {
    const rows = [];

    articles.forEach((article) => {
            const user = users.find((element) => {
                if (element.id === article.userId)
                    return true;
                return false;
            });
            rows.push(<Article key={article.id} article={article} user={user} showDetail={showDetail}/>);
        }
    );

    return (
        <table className='articles-list'>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

class ArticlesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            users: [],
            articles: [],
            showPopup: false,
            showPopupAdd: false,
            selectedArticle: {},
        }
    }

    getArticles() {
        const usersUrl = 'http://5de4db8b712f9b0014513fc8.mockapi.io/api/user';
        this.httpGetAsync(usersUrl, this.usersCallback);
    }


    componentDidMount() {
        this.getArticles();
    }

    httpGetAsync(theUrl, callback)
    {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    usersCallback = (responseText) => {
        let users = JSON.parse(responseText);
        if (this.props.selectedUserId && this.props.selectedUserId !== '') {
            let selectedUsers = users.filter((user) => {
                return user.id === this.props.selectedUserId;
            })
            this.setState({users: selectedUsers});
        } else {
            this.setState({users: users});
        }
        this.state.users.forEach((user) => {
                let articlesUrl = 'http://5de4db8b712f9b0014513fc8.mockapi.io/api/user/' + user.id + '/article';
                this.httpGetAsync(articlesUrl, this.articlesCallback);
            }
        );
    }

    articlesCallback = (responseText) => {
        let newArticles = JSON.parse(responseText);
        let articles = this.state.articles;
        newArticles.forEach((newArticle) => {
            articles.push(newArticle)
        });
        let filterredArticles = articles.filter((article) => {
            return article.title.toUpperCase().includes(this.state.filterText.toUpperCase())
                || article.text.toUpperCase().includes(this.state.filterText.toUpperCase());
        });
        filterredArticles.sort( (article1, article2) => {
            return article1.createdAt > article2.createdAt;
        });
        this.setState({articles: filterredArticles});
    }

    onChangeFilterText = (filterText) => {
        this.setState({filterText: filterText, articles: []});
        this.getArticles();
    }

    showDetail = (article, user) => {
        this.setState({showPopup: true,
            selectedArticle: article,
            selectedUser: user});
    }

    closeDetail = () => {
        this.setState({showPopup: false});
    }

    showAdd = () => {
        this.setState({showPopupAdd: true});
    }

    closeAdd = () => {
        this.setState({showPopupAdd: false});
    }

    saveArticle = (title, text, imageUrl) => {
        let loggedUserId = this.props.loggedUser.id;
        let newArticle = {
            "id": "1000",
            "userId": loggedUserId,
            "createdAt": new Date(),
            "title": title,
            "text": text,
            "imageUrl": imageUrl
        }
        let articlesUrl = 'http://5de4db8b712f9b0014513fc8.mockapi.io/api/user/' + loggedUserId + '/article';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 201)
                alert('Saved successfully!');
        }
        xmlHttp.open("POST", articlesUrl, true); // true for asynchronous
        xmlHttp.send(newArticle);
        this.closeAdd();
    }

    render() {
        return (
            <div>
                <SearchLine filterText = {this.state.filterText} onChangeFilterText={this.onChangeFilterText} showAdd={this.showAdd}/>
                <ArticlesList articles={this.state.articles} users={this.state.users} showDetail={this.showDetail}/>
                {/*<AddArticleButton showAdd={this.showAdd}/>*/}
                {this.state.showPopup ? <ArticleDetail article = {this.state.selectedArticle} user={this.state.selectedUser} closePopup={this.closeDetail}/> : null}
                {this.state.showPopupAdd ? <AddArticle user={this.props.loggedUser} saveArticle={this.saveArticle} closePopup={this.closeAdd}/> : null}
            </div>
        );
    }
}

export default ArticlesPanel;