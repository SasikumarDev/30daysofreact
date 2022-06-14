import React from "react";
import get from "../../Services/HttpService";
import './Country.css';

export default class CountryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false, data: [], filterData: [] }
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        get('https://restcountries.com/v3.1/all').then((x) => {
            const cData = x.data.map((x) => {
                return { flag: x.flag, name: x.name.common, sh: x.cca3 }
            });
            this.setState({ data: cData, isLoading: false, filterData: cData });
        });
    }

    handleOnchange(e) {
        this.setState({ isLoading: true });
        const val = e.target.value;
        if (val !== '') {
            const sData = this.state.filterData;
            var filer = sData.filter((x) => {
                return x.name.toLowerCase().includes(val);
            });
            this.setState({ filterData: filer });
            this.setState({ isLoading: false });
        } else {
            this.setState({ filterData: this.state.data });
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="wrapperCC">
                <input name="filter" placeholder="Filter by country name" autoComplete="off" onChange={this.handleOnchange} />
                {
                    this.state.isLoading ? <p>Loading .... please wait</p> : (
                        this.state.filterData.map((x, i) =>
                            <div key={i} className="divCounCard" >{x.flag}{' '}{x.name}</div>
                        )
                    )
                }
            </div>
        )
    }
}


export class TweetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: []
        };
        this.addPost = this.addPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.canceleditPost = this.canceleditPost.bind(this);
        this.saveEditPost = this.saveEditPost.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    addPost = () => {
        const input = document.getElementById('tweetText');
        if (input.value.trim() !== '') {
            let post = { post: input.value.trim(), date: new Date(), user: 'Anonymous User', useId: '@Anonymous', editing: false };
            this.setState({ Posts: [...this.state.Posts, post] });
            input.value = '';
        }
    }

    deletePost = (ind) => {
        const data = this.state.Posts;
        data.splice(ind, 1);
        this.setState({ post: data });
    }

    editPost = (idx) => {
        const data = this.state.Posts;
        data[idx].editing = true;
        this.setState({ post: data });
    }

    canceleditPost = (idx) => {
        const data = this.state.Posts;
        data[idx].editing = false;
        this.setState({ post: data });
    }

    saveEditPost = (ind) => {
        return event => {
            event.preventDefault()
            const data = this.state.Posts;
            data[ind].post = event.target[0].value;
            data[ind].editing = false;
            this.setState({ post: data });
        }
    }

    handleOnchange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="tweetDivW">
                <div className="inputControls">
                    <textarea name="tweetText" id="tweetText" placeholder="Write Post" className="textArea" >
                    </textarea>
                    <button className="btnPost" onClick={this.addPost} >Add Post</button>
                </div>
                <div className="divPostsCol">
                    {
                        this.state.Posts.map((post, ind) =>
                            <div key={ind} className="divPostItem">
                                <div className="postHeader" >
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                    <h4>
                                        {post.user} <span style={{ color: '#8796a2' }}>
                                            {post.useId}
                                        </span>
                                    </h4>
                                </div>
                                <div className="postBody" >
                                    {
                                        post.editing ? (
                                            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} onSubmit={this.saveEditPost(ind)} >
                                                <textarea defaultValue={post.post} className="textArea" name="editPost">
                                                </textarea>
                                                <button type="submit" className="btnPost" >Save</button>
                                                <button className="btnPost" type="button" onClick={() => this.canceleditPost(ind)}>Cancel</button>
                                            </form>
                                        ) : (
                                            <p>
                                                {post.post}
                                            </p>
                                        )
                                    }

                                </div>
                                <div className="postFooter" >
                                    <div style={{ display: 'flex', alignItems: 'center' }} >
                                        <button className="btntweet" onClick={() => this.editPost(ind)} >
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                        <button className="btntweet" onClick={() => this.deletePost(ind)}>
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div>
                                        {post.date.getFullYear()}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}