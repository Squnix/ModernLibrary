"use client"

import { useEffect, useState } from "react"

export default function SearchBar(): React.ReactElement {
  const [isTyping, setIsTyping] = useState(false);
  const [queryValue, setQueryValue] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState<string[]>([]); //Zmiana typu na typ książki
  const [showBooksModal, setShowBooksModal] = useState(false);

  useEffect(() => {
    let handler: NodeJS.Timeout;
    if (isTyping) {
      handler = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    } else if (queryValue.length > 3) {
      console.log(`Making query: ${queryValue}`);
      setShowBooksModal(true);
    }
    return () => { console.log("Clearing timeouts"); clearTimeout(handler) };
  }, [isTyping, queryValue])

  return (
    <>
      <input onChange={(e) => { setIsTyping(true); setQueryValue(e.target.value) }} placeholder="Start searching for books" />
      <div className="modal">
        {fetchedBooks.map((book) => (
          <p key="book">{book}</p>
        ))}
      </div>
    </>
  )
};
