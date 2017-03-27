let go = (() => {
    var _ref = _asyncToGenerator(function* (term) {
        try {
            var data = yield search(term);
            yield display(data);
            clearSearch();
        } catch (e) {
            console.log("ERROR", e);
        }
    });

    return function go(_x) {
        return _ref.apply(this, arguments);
    };
})();

let search = (() => {
    var _ref2 = _asyncToGenerator(function* (term) {
        return fetch(`http://www.omdbapi.com/?t=${term}`).then(function (result) {
            return result.json();
        }).catch(function (err) {
            return console.log(err);
        });
    });

    return function search(_x2) {
        return _ref2.apply(this, arguments);
    };
})();

let display = (() => {
    var _ref3 = _asyncToGenerator(function* (movie) {
        return new Promise(function (resolve, reject) {
            var { Title, Year, Rated, Runtime, Poster } = movie;
            output.innerHTML = `<h3>${Title}</h3>
            <p>Made in ${Year}, rated ${Rated} and is ${Runtime} long.</p>
            <img src="${Poster}" />`;
            setTimeout(function () {
                resolve();
            }, 4000);
        });
    });

    return function display(_x3) {
        return _ref3.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const form = document.querySelector('form');
const searchField = document.querySelector('input[type=text');
const output = document.querySelector('.results');

form.addEventListener('submit', event => {
    event.preventDefault();
    var searchTerm = searchField.value;
    go(searchTerm);
});

function clearSearch() {
    searchField.value = "";
}
//# sourceMappingURL=bundle.js.map
