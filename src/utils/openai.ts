export const saveApiKey = (value: string): void => {
  sessionStorage.setItem('apiKey', value);
};

export const getApiKey = (): string | null => {
  return sessionStorage.getItem('apiKey');
};

export const fetchFiles = async (apiKey: string) => {
  const response = await fetch('https://api.openai.com/v1/files', {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok' + response.statusText);
  }
  return await response.json();
};
