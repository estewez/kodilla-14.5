var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('img', {src: this.props.movie.imgPath}),
                React.createElement('p', {}, this.props.movie.desc)
            )
        )
    },
});

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        imgPath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        imgPath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 3,
        title: '25th hour',
        desc: 'Film o skazanym handlarzu',
        imgPath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmE0YjdlYTktMTU4Ni00Mjk2LWI3NWMtM2RjNmFiOTk4YjYxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR4,0,182,268_AL_.jpg'
    },
    {
        id: 4,
        title: 'Mean Streets',
        desc: 'Film o braciach gangsterach',
        imgPath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWNmNGY3ZGMtYWQ3OC00Zjg4LWFiN2EtZjM2MDI1YzRiNjg3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 5,
        title: 'The Great Beatuy',
        desc: 'Film o fikcyjnym pisarzu',
        imgPath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_UY268_CR0,0,182,268_AL_.jpg'
    }
];

var firstMovie = React.createElement(Movie, {movie: movies[0]});
var secondMovie = React.createElement(Movie, {movie: movies[1]});
var movieList = React.createElement('ul', {}, firstMovie, secondMovie);
ReactDOM.render(movieList, document.getElementById('app'));