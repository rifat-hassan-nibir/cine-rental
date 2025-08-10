import MovieList from "./cine/MovieList";
import Sidebar from "./Sidebar";

export default function Page() {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
      </div>
    </main>
  );
}
