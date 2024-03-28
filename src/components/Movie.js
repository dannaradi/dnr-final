
function Movie({movieList}) {

    return (
        <div className='container d-flex gap-5 flex-wrap' style={{marginTop: "7rem"}}>
        {
            movieList && movieList.map((res) => {
              return (
                <div key={res.imdbID} className="card mt-4" style={{width: "18rem"}}>
                  <img src={res.Poster} className="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-center d-flex align-items-center">
                    <h2 className="card-title placeholder-glow">{res.Title}</h2>
                  </div>
                </div>
              )
            })
          }
      </div>
    )
    
}

export default Movie;