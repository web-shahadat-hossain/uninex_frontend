declare global {
  interface Window {
    dataLayer?: any[]; // Define dataLayer as an array of any type
  }
}

export const gtmVirtualPageView = (title: any, rest: any) => {
  window.dataLayer?.push({
    ...title,
    ...rest,
  });
};
