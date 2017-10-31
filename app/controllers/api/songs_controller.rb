class Api::SongsController < ApplicationController
    def index
        @artist = Artist.find(params[:artist_id])
      @songs = @artist.songs.all
      render json: @songs
    end
  
    def create
      @artist = Artist.find(params[:artist_id])
      @song = Song.new(song_params)
      @artist.songs << @song
      @artist.save
     
      render status: :ok
    end
  
    def show
        @artist = Artist.find(params[:artist_id])
        
      @song = @artist.songs.find(params[:id])
      render json: @song
    end
  
    def update
       
        
      @song = Song.find(params[:id])
      @song.update!(song_params)

      render json: @song
      
    end
  
    def destroy
      
        
      @song = Song.find(params[:id]).delete
     
        render status: :ok
    end
  
    private
  
    def song_params
      params.require(:song).permit(:title, :album, :preview_url)
    end
  end