import React from 'react'

function AddArticle (props) {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h2>Create Article</h2>
                <input placeholder='title'></input>
                <input placeholder='text'></input>
                <input placeholder='imageUrl'></input>
                <button onClick={props.saveArticle}>Save</button>
                <button onClick={props.closePopup}>Cancel</button>
            </div>
        </div>
    );
}

export default AddArticle;