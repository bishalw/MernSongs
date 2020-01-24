import React, { Component } from "react";

export default class CreateSongs extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeSinger = this.onChangeSinger.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeSongName = this.onChangeSongName.bind(this);
    this.onChangeAlbum = this.onChangeAlbum.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      singer: "",
      genre: "",
      songName: "",
      album: "",
      users: []
    };
  }
  componentDidMount() {
    this.setState({
      users: ["john"],
      username: "john"
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeSinger(e) {
    this.setState({
      singer: e.target.value
    });
  }
  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    });
  }
  onChangeSongName(e) {
    this.setState({
      songName: e.target.value
    });
  }
  onChangeAlbum(e) {
    this.setState({
      album: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const songs = {
      username: this.state.username,
      singer: this.state.singer,
      genre: this.state.genre,
      songName: this.state.songName,
      album: this.state.album
    };
    console.log(songs);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3> Create Songs </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Singer</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.singer}
              onChange={this.onChangeSinger}
            />
          </div>
          <div className="form-group">
            <label>Genre</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group">
            <label>SongName</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.songName}
              onChange={this.onChangeSongName}
            />
          </div>
          <div className="form-group">
            <label>Album</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.album}
              onChange={this.onChangeAlbum}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Song Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
