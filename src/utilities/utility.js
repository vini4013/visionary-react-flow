function chunkText(text, chunkSize = 3) {
  const chunks = [];

  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  return chunks;
}

export async function streamText(text) {
//   const text = 'Bunch of text... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const chunks = chunkText(text);

  async function* generateStream() {
    for (const chunk of chunks) {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 50));

      yield chunk;
    }
  }

  return {
    textStream: generateStream()
  };
}