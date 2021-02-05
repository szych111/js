class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings.join(', ');
    }
    set isCheckedOut(checkedValue) {
        this._isCheckedOut = checkedValue;
      }
    getAverageRating() {
        let avgRating = this._ratings.reduce((total, rating) => total + rating, 0) / this._ratings.length;
    return avgRating
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }
    addRating(newRating) {
        this._ratings.push(newRating)
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist
    }
    get songs() {
        return this._songs.join(', ')
    }
}

const roomWithAView = new Movie('John Doe', 'A Room With a View', 158);
const poirot = new Movie('Steve Smith', 'Poirot', 65);
const darlingMonster = new Book('Diana Cooper', 'A Room With a View', 642);
const outOFAfrica = new Book('Karen Blixen', 'Out of Africa', 325)
const Africa = new CD('Toto', 'Africa', ['Stupid Love', 'In Love Again', 'Madly in Love', 'Lost Totally'])
const loveActually = new CD('Love Actually', 'Deadly Lethal', ['Dont Be So Stupid', 'Bugger Off', 'Not So Easy', 'Remember This'])

console.log(darlingMonster.title)

const arrOne = ['some', 'so so', false, 'distractions', 'multitasking', [1, 15, 48, 97, 17], ['zizi', 'zazou', 'zet', 'zest'] ]
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    for (let user in obj) {
        let usersProps = Object.keys(obj[user])
        let ageProp = usersProps.shift()
        let age = obj[user].age
        console.log(`${user}\'s ${ageProp} is ${age}`)
    }
  }
  
  console.clear()
  console.log('bye')
  console.log(getArrayOfUsers(users));

  function addFriend(userObj, friend) {
    let friends = userObj.data.friends
    console.log(friends)
    friends.push(friend)
    return friends
  }