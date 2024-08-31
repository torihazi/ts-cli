type Book = {
  id: string;
  title: string;
  author: string;
  genres: string[];
};

const library: Book[][] = [
  [
    {
      id: "B1",
      title: "1984",
      author: "George Orwell",
      genres: ["SF", "ディストピア"],
    },
    {
      id: "B2",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genres: ["ロマンス", "古典"],
    },
  ],
  [
    {
      id: "B3",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genres: ["小説", "青春"],
    },
    {
      id: "B4",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genres: ["小説", "社会問題"],
    },
  ],
];

// 課題: 指定されたジャンルに属する本のタイトルを全て含む配列を返す関数を作成してください。同じ本が複数回含まれないようにしてください。
const getUniqueBookTitlesByGenre = (genres: string[]): string[] => {
  if (genres.length === 0 || library.length === 0) {
    return [];
  }

  const flatLibaray = library.flat();
  const uniqueBookTitles = flatLibaray
    .filter((book) => genres.some((genre) => book.genres.includes(genre)))
    .map((book) => book.title);
  return [...new Set(uniqueBookTitles)];
};

console.log(getUniqueBookTitlesByGenre(["小説", "ロマンス"]));
