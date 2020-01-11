import React from 'react'

function ArticleDetail(props) {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const stringDate = new Date(props.article.createdAt).toLocaleString('en-US', options);
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h2>{props.article.title}</h2>
                <img  src={props.article.imageUrl}></img>
                <p >{props.article.text}</p>
                <p >{props.user.name}</p>
                <p >{stringDate}</p>
                <button onClick={props.closePopup}>close me</button>
            </div>
        </div>
    );
}

export default ArticleDetail;