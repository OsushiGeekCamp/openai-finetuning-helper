export async function fetchFiles() {
  const response = await fetch('https://api.openai.com/v1/files', {
      headers: {
          Authorization: `Bearer ${apiKey}`
      }
  });

  if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
  }
  const data = await response.json();
  return data;
}