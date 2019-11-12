/* eslint-disable no-undef */
export const readFileAsBinary = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(btoa(reader.result));
    reader.onerror = reject;
    reader.readAsBinaryString(file);
  });
};

export const base64DataUrl = string => `data:image/png;base64,${string}`;

export const base64ToFile = (base64, fileName = 'image.jpg', contentType = 'image/png') =>
  new File([base64], fileName, { type: contentType, lastModified: Date.now() });
