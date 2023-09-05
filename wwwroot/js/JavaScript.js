document.addEventListener("DOMContextLoaded", () => {
    const movieList = document.getElementById("moviesList");
    const createMovie = document.getElementById("CreateMoviesForm");
    const updateMovie = document.getElementById("UpdateMoviesForm");
    const deleteMovie = document.getElementById("DeleteMoviesForm");
    //funtion to fetch and display tasks
    function displayMovies() {
        fetch("http://localhost:5258/api/movies")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(movies => {
                movieList.innerHTML = ""; //clear previous list
                movies.forEach(movie => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `Id: ${movie.Id}, MovieName: ${movie.name}, Director: ${movie.director}, ReleaseDate: ${movie.releaseDate},rating:${movie.Rating}`;
                    movieList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error("Fetch error:", error);
                movieList.innerHTML = "Error fetching tasks";
            });
    }
    


//Event listener for create movie form submission
    createMovie.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const director = document.getElementById("director").value;        
        const releaseDate = document.getElementById("releaseDate").value;
        const rating = document.getElementById("rating").value;
        fetch("http://localhost:5258/api/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, director, releaseDate, rating })
        })
            .then(response => {
                if (!reponse.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                //Clear form fields after successful creation
                document.getElementById("name").value = "";
                document.getElementById("director").value = "";
                document.getElementById("rating").value = "";
                document.getElementById("releaseDate").value = "";

                //Refresh the movie list
                displayMovies();
            })
            .catch(error => {
                console.error("Fetch error: ", error);
            });
    });

    //Update Task
    updateMovie.addEventListener("submit", (e) => {
        e.preventDefault();
        const movieId = document.getElementById("movieId").value;
        const newname = document.getElementById("newname").value;
        const direcor = document.getElementById("newdir").value;
        const newreleaseDate = document.getElementById("newreleaseDate").value;
        const newrating = document.getElementById("newrating").value;
       

        fetch(`http://localhost:5258/api/movies/${movieId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ MovieId: movieId, MovieName: newname, director: newdir, ReleaseDate: newreleaseDate, Rating: newrating})
        })
            .then(response => {
                if (!reponse.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                //Clear form fields after successful creation
                document.getElementById("movieId").value = "";
                document.getElementById("newname").value = "";
                document.getElementById("newdir").value = "";
                document.getElementById("newreleaseDate").value = "";
                document.getElementById("newrating").value = "";
              

                //Refresh the task list
                displayMovies();
            })
            .catch(error => {
                console.error("Fetch error: ", error);
            });
    });

    //Delete Task
    deleteMovie.addEventListener("submit", (e) => {
        e.preventDefault();
        const deleteMovieId = document.getElementById("deleteMovieId").value;

        fetch(`http://localhost:5073/api/movies/${deleteMovieId}`, {
            method: "DELETE",
        })
            .then(response => {
                if (!reponse.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                //Clear form fields after successful creation
                document.getElementById("deleteMovieId").value = "";

                //Refresh the task list
                displayMovies();
            })
            .catch(error => {
                console.error("Fetch error: ", error);
            });
    });
    //Initial display of tasks when the page loads
    displayMovies();
});
   