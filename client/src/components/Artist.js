import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
border: 2px rgba(138, 134, 132, .75);

border-radius: 10px;
width: 400px;
height: 275px;
margin: 100px auto;
padding: 10px;

text-align: center;
`
const Image = styled.div`
img{
    max-width: 200px
}
`
const SongBlock = styled.div`
max-width: 300px;
`
const SongList = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin: 10px;
padding: 10px;
max-width: 100%;
`
class Artist extends Component {
    state = {
        artist: {},
        songs: []
    }
    componentWillMount() {
        this.getArtist()
        this.getSongs()
    }
    getArtist = async () => {
        try {
            const artistid = this.props.match.params.artistId
            console.log("test")
            const response = await axios.get(`/api/artists/${artistid}`)
            this.setState({ artist: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    getSongs = async () => {
        try {
            const artistid = this.props.match.params.artistId

            const res = await axios.get(`/api/artists/${artistid}/songs`)
            console.log(res.data)
            this.setState({ songs: res.data })

        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <div>

                    <div><b>{this.state.artist.name}</b></div>
                    <div>Nationality: {this.state.artist.nationality}</div>
                    <Image><img src={this.state.artist.photo_url} /></Image>
                </div>
                <BodyWrapper>
                    <SongList>
                        {this.state.songs.map((song) => {
                                return (
                                    <SongBlock>
                                        <div>Title: {song.title}
                                        </div>
                                        <div>
                                            Album: {song.album}
                                        </div>
                                        <div>Preview: song.preview_url
                                        </div>
                                    </SongBlock>
                                )

                            })

                        }
                    </SongList>
                </BodyWrapper>
            </div>
        );
    }
}

export default Artist;