export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const addFavorite = (userName, id) => {
  return fetch(`/api/users/${userName}/favourites`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ userName: userName, id: id })
}).then(res => res.json())
};

export const getFavorites = userName => {
  return fetch(
    `/api/users/${userName}/favourites`,{headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const addWatchList = (userName, id) => {
  return fetch(`/api/users/${userName}/watchList`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ userName: userName, id: id })
}).then(res => res.json())
};

export const getWatchList = userName => {
  return fetch(
    `/api/users/${userName}/watchList`,{headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

 export const getGenres = () => {
  return fetch(
      `/api/genres`,{headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getMovies = () => {
    return fetch(
        `/api/movies`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovieReviews = id => {
    return fetch(
      `/api/movies/${id}/reviews`,{headers: {
       'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };

  export const getMovieCredits = id => {
    return fetch(
      `/api/movies/${id}/credits`,{headers: {
       'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };

  export const getMovie = id => {
      return fetch(
        `/api/movies/${id}`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getPopularMovies = () => {
    return fetch(
      `/api/popularMovies`,{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getUpcomingMovies = () => {
  return fetch(
    `/api/upcomingMovies`,{headers: {
     'Authorization': window.localStorage.getItem('token')
  }
}
).then(res => res.json());
};

export const getNowPlayingMovies = () => {
  return fetch(
    `/api/nowPlayingMovies`,{headers: {
     'Authorization': window.localStorage.getItem('token')
  }
}
).then(res => res.json());
};

export const getSimilarMovies = id => {
  return fetch(
    `/api/popularMovies/${id}/similarMovies`,{headers: {
     'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
};
