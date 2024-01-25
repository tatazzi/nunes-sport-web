const BASE_URL = process.env.NEXT_PUBLIC_HOST || "http://localhost:8080";

export const apiFetch = async (
  endpoint: string,
  method: string = "GET",
  body?: any
) => {
  const url = `${BASE_URL}${endpoint}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url, options);
    console.log("response fora", response);

    if (!response.ok) {
      console.log("response.", response);
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("erro", error);

    throw new Error(`Error: ${error}`);
  }
};
