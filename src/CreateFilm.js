import React, { Component } from 'react'
import './CreateFilm.css'

class Createfilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: ''

        }
        this.onChange = this.onChange.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitCreate(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        const url = "http://92.175.11.66:3001/api/quests/movies/"
        console.log(config)
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Film ajouté avec l'ID ${res}!`)
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un film')

            })


    }

    render() {
        return (
            <div>
                <div className="CreateFilm">
                    <h1>Saisi d'un Film</h1>

                    <form onSubmit={this.submitCreate}>
                        <fieldset>
                            <legend>Informations</legend>
                            <div className="form-data">
                                <label htmlFor="name">Film</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />
                            </div>

                            <div className="form-data">
                                <label htmlFor="poster">Poster's Url</label>
                                <input
                                    type="url"
                                    id="poster"
                                    name="poster"
                                    placeholder='https://exemple.com'
                                    pattern="https://.*"
                                    onChange={this.onChange}
                                    value={this.state.poster}
                                />
                            </div>

                            <div className="form-data">
                                <label htmlFor="comment">Commentaire</label>
                                <textarea
                                    type="text"
                                    id="comment"
                                    name="comment"
                                    onChange={this.onChange}
                                    value={this.state.comment}
                                />
                            </div>
                            <hr />
                            <div className="form-data">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </fieldset>
                    </form>
                </div>


            </div>

        )

    }



}

export default Createfilm;