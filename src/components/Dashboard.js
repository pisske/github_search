import { Info, Repos, User, Search, Navbar } from "../components/Index";

const Dashboard = () => {
  return (
    <main>
      <Search />
      <Info />
      <User />
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;
