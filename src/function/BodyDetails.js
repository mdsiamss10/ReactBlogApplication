export default function getReadingTimeAndWordCount(article = "") {
  if (article !== "") {
    const words = article.trim().split(/\s+/);
    const wordCount = words.length;
    const readingTime = Math.ceil(wordCount / 200); // Assuming average reading speed of 200 words per minute
    return { wordCount, readingTime };
  } else {
    return null;
  }
}
