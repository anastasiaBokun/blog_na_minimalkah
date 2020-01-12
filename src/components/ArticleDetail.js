import React from 'react'

function ArticleDetail(props) {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const stringDate = new Date(props.article.createdAt).toLocaleString('en-US', options);
    return (
        <div className='popup'>
            <div className='popup-inner'>
                <h2 className='detail-title'>{props.article.title}</h2>
                <img  src={props.article.imageUrl} className='detail-image'></img>
                <p className='detail-text'>{props.article.text}</p>
                <p className='detail-author'>{props.user.name}</p>
                <p className='detail-date'>{stringDate}</p>
                <button onClick={props.closePopup} className='close-detail-btn'>Close</button>
            </div>
        </div>
    );
}

export default ArticleDetail;