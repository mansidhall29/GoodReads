import React from "react";
import "./styles.css";
import { useState } from "react";

const DataBase = {
  programming: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    {
      name: "C++ Primer by Stanley B. Lippman, Josée Lajoie, and Barbara E",
      rating: "3.9/5"
    }
  ],

  fiction: [
    {
      name: "One Hundred Years of Solitude by Gabriel Garcia Marquez",
      rating: "4.5/5"
    },
    {
      name: "Great Expectations by Charles Dickens",
      rating: "4.5/5"
    },
    {
      name: "The Stranger by Albert Camus",
      rating: "4.6/5"
    }
  ],
  biography: [
    {
      name: "The Diary Of A Young Girl by Anne Frank",
      rating: "4.2/5"
    },
    {
      name: "Long Walk to Freedom by Nelson Mandela",
      rating: "5/5"
    },
    {
      name:
        "Transcendence: My Spiritual Experiences with Pramukh Swamiji by A. P. J. Abdul Kalam and Arun Tiwari",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("biography");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 className="h1">📚 goodbooks</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(DataBase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              backgroundColor: "#F3F4F6",
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              outline: "none"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {DataBase[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "large" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
