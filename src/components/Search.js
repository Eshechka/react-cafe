import { useState } from "react";

export function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  function handleChangeSearch(e) {
    setValue(e.target.value);
  }
  function handleClickSearch() {
    document
      .querySelector('[data-search-input-label="true"]')
      .classList.toggle("active");
  }
  function handleSubmitSearch(e) {
    e.preventDefault();
    cb(value);
  }

  return (
    <div className="search">
      <div className="row">
        <form className="search__form" onSubmit={handleSubmitSearch}>
          <div className="input-field col s12">
            <input
              className="search__input validate"
              type="text"
              id="search-input"
              onChange={(e) => handleChangeSearch(e)}
              onFocus={handleClickSearch}
              onBlur={handleClickSearch}
              value={value}
            />
            <label
              className="search__label"
              htmlFor="search-input"
              data-search-input-label="true"
            >
              Search
            </label>
          </div>
          <button
            className="waves-effect waves-light btn deep-orange"
            type="submit"
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
}
