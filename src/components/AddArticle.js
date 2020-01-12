import React from 'react'

class AddArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            imageUrl: ''
        }
    }

    onChangeTitle = (title) => {
        this.setState({title: title});
    };

    onChangeText = (text) => {
        this.setState({text: text});
    };

    onChangeImageUrl = (imageUrl) => {
        this.setState({imageUrl: imageUrl});
    };

    render() {
        return (
            <div className='add-popup'>
                <div className='add-popup-inner'>
                    <h2 className='add-header'>Create Article</h2>
                    <input placeholder='Aricle title' className='add-title-input' value={this.state.title} onChange={({target: {value}}) => this.onChangeTitle(value)}/>
                    <textarea placeholder='Article text'  className='add-text-input' value={this.state.text} onChange={({target: {value}}) => this.onChangeText(value)}/>
                    <input placeholder='Image url' className='add-image-url-input' value={this.state.imageUrl} onChange={({target: {value}}) => this.onChangeImageUrl(value)}/>
                    <button className='save-btn' onClick={() => this.props.saveArticle(this.state.title, this.state.text, this.state.imageUrl)}>Save</button>
                    <button className='cancel-btn' onClick={this.props.closePopup}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default AddArticle;