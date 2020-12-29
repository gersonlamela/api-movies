var apiKey = "d374efe8";

document.getElementById("movie").innerHTML = '';
var id = location.search.split('id=')[1];

$.ajax({
    method: "GET",
    url: "https://www.omdbapi.com/?apikey=" + apiKey + "&i=" + id,
})

    .done(function (data) {
        var rating = '';
        for(let item of data.Ratings) {
            
            rating+= '<br>' + item.Source + ': ' + item.Value;

        }
        console.log(id);
        document.getElementById("movie").innerHTML +=
                        
                    "<div class='col-12 text-center'>" +
                    "<h3>" + data.Title + "</h3>" +
                    "</div>" +
                    "<div  class='col-3'>" +
                    "<img class='circle' src='" + data.Poster + "' alt='Card image cap'>" +
                    "</div>" +
                    "<div class='col-3'>" +
                    "<p><b>Year: </b>" + data.Year + "</p>" +
                    "<p><b>Released: </b>" + data.Released + "</p>" +
                    "<p><b>Rated: </b>" + data.Rated + "</p>" +
                    "<p><b>Runtime: </b>" + data.Runtime + "</p>" +
                    "<p><b>Genre: </b>" + data.Genre + "</p>" +
                    "<p><b>Director: </b>" + data.Director + "</p>" +
                    "<p><b>Writer: </b>" + data.Writer + "</p>" +
                    "</div>" +
                    "<div class='col-3'>" +
                    "<p><b>Actors: </b>" + data.Actors + "</p>" +
                    "<p><b>Awards: </b>" + data.Awards + "</p>" +
                    "<p><b>Metascore: </b>" + data.Metascore + "</p>" +
                    "<p><b>IMDB Rating: </b>" + data.imdbRating + "</p>" +
                    "<p><b>IMDB Votes: </b>" + data.imdbVotes + "</p>" +
                    "<p><b>IMDB Rating: </b>" + data.imdbRating + "</p>" +
                    "</div>" +
                    "<div class='col-3'>" +
                    "<p><b>Ratings: </b>" + rating + "</p>" +
                    "<p><b>Language: </b>" + data.Language + "</p>" +
                    "<p><b>Country: </b>" + data.Country + "</p>" +
                    "<p><b>Type: </b>" + data.Type + "</p>" +
                    "<p><b>DVD: </b>" + data.DVD + "</p>" +
                    "<p><b>BoxOffice: </b>" + data.BoxOffice + "</p>" +
                    "<p><b>Production: </b>" + data.Production + "</p>" +
                    "</div>";
        }

        );

