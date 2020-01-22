import React from 'react'

function ArticleDetail({article, user, closePopup}) {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const stringDate = new Date(article.createdAt).toLocaleString('en-US', options);
    return (
        <div className='popup'>
            <div className='popup-inner'>
                <h2 className='detail-title'>{article.title}</h2>
                <img src={article.imageUrl} className='detail-image'/>
                <p className='detail-text'>{article.text}</p>
                <p className='detail-author'>{user.name}</p>
                <p className='detail-date'>{stringDate}</p>
                <button onClick={closePopup} className='close-detail-btn'>Close</button>
            </div>
        </div>
    );
}

export default ArticleDetail;