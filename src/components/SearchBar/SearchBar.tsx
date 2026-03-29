import { useState } from "react";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (formData: FormData) => {
    const value = formData.get("query") as string;

    if (!value.trim()) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(value);

    setQuery("");
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
          className={css.link}
        >
          Powered by TMDB
        </a>

        <form className={css.form} action={handleSubmit}>
          <input
            className={css.input}
            name="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
