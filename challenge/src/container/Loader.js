import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

import Header from '../Header';
import MainContent from '../MainContent';

class App extends Component {
//Property initializer...
constructor(props) {
  super(props);
  this.state = {
    isFiltered: false,
    pendingImage: "",
    images: [],
    search: "",
  }
}

//Fixing filter bug...
lastImageId = 0;

newImageId = () => {
  const id = this.lastImageId;
  this.lastImageId += 1;
  return id;
};

//Example of a reducer...
toggleImageProperty = (property, id) =>
  this.setState({
    images: this.state.images.map(image => {
      if (id === image.id) {
        return {
          ...image,
          [property]: !image[property]
        };
      }
      return image;
    })
  });

toggleConfirmation = id =>
  this.toggleImageProperty("isConfirmed", id);

  removeImage = id =>
  this.setState({
    images: this.state.images.filter(image => id !== image.id)
  });

  toggleEditing = id =>
    this.toggleImageProperty("isEditing", id);

  setName = (name, id) =>
    this.setState({
      images: this.state.images.map(image => {
        if (id === image.id) {
          return {
            ...image,
            name
          };
        }
        return image;
      })
    });

    toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered});

    handleNameInput = e =>
    this.setState({ pendingImage: e.target.value });

    newImageSubmitHandler = () => {
      let img = document.getElementById('image')
      let imgUrl = URL.createObjectURL(img.files[0])
      const id = this.newImageId();
      this.setState({
        images: [
          {
            name: this.state.pendingImage,
            isConfirmed: false,
            isEditing: false,
            url: imgUrl,
            id
          },
          ...this.state.images
        ],
        pendingImage: ''
      });
      const user = {
        name: this.state.name,
      }
      axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
          return res.data.user
        })
    }

    updateSearch = (e) => {
      this.setState({search: e.target.value})
    }

//Returns the length of the images array in the state object...
getTotalInvited = () => this.state.images.length;

getConfirmedImages = () => this.state.images.reduce(
  (total, image) => image.isConfirmed ? total + 1 : total,
  0
);

//getUnconfirmedImages = () =>

  render() {
    const totalInvited= this.getTotalInvited();
    const numberConfirmed = this.getConfirmedImages();
    const numberUnconfirmed = totalInvited - numberConfirmed;
    let filteredImages = this.state.images.filter(
      (image) => {
        return image.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="App">
      <Header
      pendingImage={this.state.pendingImage}
      newImageSubmitHandler={this.newImageSubmitHandler}
      handleNameInput={this.handleNameInput} />

        <MainContent
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalInvited={totalInvited}
        numberConfirmed={numberConfirmed}
        numberUnconfirmed={numberUnconfirmed}
        filteredImages={filteredImages}
        search={this.state.search}
        updateSearch={this.updateSearch}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        removeImage={this.removeImage}
        pendingImage={this.state.pendingImage}
        newImageId={this.newImageId} />
      </div>
    );
  }
}

export default App;
