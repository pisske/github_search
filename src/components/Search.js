import { useState } from "react";
import Wrapper from "../assets/wrappers/.SearchUser";
import { MdSearch } from "react-icons/md";
const Search = () => {
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
    }
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <button type="submit">search</button>
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

export default Search;
