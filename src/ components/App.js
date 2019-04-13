import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: []};

    onSearchSubmit = async term => {
        const response = await unsplash
        .get('/search.json', {
            params: {query: term,
                     'api-key': 'Z5H4BriZgokN7rUlhT9hKy3BKcG0GjGP' }            
        });
        this.setState({images: response.data.results});      
    }

    render() {
        return (
            <div className="ui container" style = {{margintop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        ); 
    }
}    

export default App;