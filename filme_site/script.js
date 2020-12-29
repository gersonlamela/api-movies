/**
 *
 * @type {string}
 */

var apikey ="d374efe8";
function search() {
    document.getElementById("movies-container").innerHTML = '';
    var searchWord = document.getElementById("search-field").value;


    $.ajax({
        method: "GET",
        url: " http://www.omdbapi.com/?apikey=" + apikey + "&s=" + searchWord,

    })

    .done(function (data) {
        console.log(data.Search);

        for(let item of data.Search) {
            document.getElementById("movies-container").innerHTML +=
                ' <div class="col-4">' +
                '    <div class="card" style="width: 20rem;">' +
                '        <img class="card-img-top" src="' + item.Poster + '" alt="Card image cap">' +
                '        <div class="card-body">' +
                '            <h4 class="card-title">' + item.Title + '</h4>' +
                '            <p class="card-text">' + item.Year + '</p>' +
                '            <a href="info.html?id=' + item.imdbID + '" class="btn btn-primary">More info</a>' +
                '        </div>' +
                '    </div>' +
                '</div>';

        }




        document.getElementById("titlemovie").innerHTML
    });
}

