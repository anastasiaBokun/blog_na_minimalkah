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
            <div className='popup'>
                <div className='popup_inner'>
                    <h2>Create Article</h2>
                    <input placeholder='title' value={this.state.title} onChange={({target: {value}}) => this.onChangeTitle(value)}/>
                    <input placeholder='text'  value={this.state.text} onChange={({target: {value}}) => this.onChangeText(value)}/>
                    <input placeholder='imageUrl' value={this.state.imageUrl} onChange={({target: {value}}) => this.onChangeImageUrl(value)}/>
                    <button onClick={() => this.props.saveArticle(this.state.title, this.state.text, this.state.imageUrl)}>Save</button>
                    <button onClick={this.props.closePopup}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default AddArticle;