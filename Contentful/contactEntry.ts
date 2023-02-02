import React from "react";

export const createEntry = async (username: string, email: string, message: string) => {
  const headers = {
    'Authorization': 'Bearer CFPAT-f2C-4xlNBmXV6JarI1o7RAAYVdmBWRE0Y8jCompnAV8' ,
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-Content-Type': 'contact'
  };

  const body = JSON.stringify({
    fields: {
      'username': {
        "en-US": username
      },
      'email': {
        "en-US": email
      },
      'message': {
        "en-US": message
      },
    }
  });

  try {
    const response = await fetch(`https://api.contentful.com/spaces/gvho3ukx3jhe/environments/master/entries`, {
      method: 'POST',
      headers: headers,
      body: body
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


