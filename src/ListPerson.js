import React, {Component} from 'react'

class ListPerson extends Component {

  render() {
    return (
      <ol className='contact-List'>
        {this.props.profiles.map((profile) => (
      		<li key={profile.id}>
				{this.props.users[profile.id].name} favorite movie is {this.props.movies[profile.favoriteMovieID].name}.
      		</li>
      	
    	))}
      
      </ol>
    
    )
  }
}



export default ListPerson