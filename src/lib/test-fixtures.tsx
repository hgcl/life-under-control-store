import {
  ALL_CATEGORIES_QUERYResult,
  ALL_PRODUCTS_QUERYResult,
} from "@/sanity.types";

export const cartItemWithoutId = {
  // _id: "1",
  name: "Movie Journal",
  price: 6,
  slug: "movie-journal",
  image: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
  description:
    "Movies & TV Shows Tracker | Ultimate Bundle for A4, A5, Letter | Binder Printables, To Watch, Favori",
};

export const categories: ALL_CATEGORIES_QUERYResult = [
  {
    _createdAt: "2025-09-17T09:44:41Z",
    _id: "printable-category",
    _rev: "6kg5k912uqjIhBQglD8hj9",
    _type: "category",
    _updatedAt: "2025-10-08T12:39:16Z",
    slug: {
      _type: "slug",
      current: "printables",
    },
    title: "Printables",
  },
  {
    _createdAt: "2025-09-18T13:33:30Z",
    _id: "spreadsheets-category",
    _rev: "oX2XKfmSw1CZillJf9kKA7",
    _type: "category",
    _updatedAt: "2025-09-18T13:33:37Z",
    slug: {
      _type: "slug",
      current: "spreadsheets",
    },
    title: "Spreadsheets",
  },
];

export const productWithoutId = {
  // _id: "b054fbdd-802f-48da-a575-f9e8047e02c7",
  _createdAt: "2025-10-06T11:47:26Z",
  _rev: "1tNFA3JjDDxFpUt908ad9L",
  _type: "product",
  _updatedAt: "2025-10-29T11:35:35Z",
  archived: false,
  categories: [
    {
      _key: "bed38e52719a",
      _ref: "printable-category", // links to printables category
      _type: "reference",
    },
  ],
  description: [
    {
      _key: "1d2696758201",
      _type: "block",
      children: [
        {
          _key: "6ab5ab54c1cf",
          _type: "span",
          marks: ["em"],
          text: "Movies & TV Shows Tracker | Ultimate Bundle for A4, A5, Letter | Binder Printables, To Watch, Favorites List, Films and Series Reviews",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "7d5b7244dc43",
      _type: "block",
      children: [
        {
          _key: "bcec94264f91",
          _type: "span",
          marks: [],
          text: "Easily keep track of your watched Movies & TV Shows with this complete template bundle. Plan your To Watch list, record your favorites, review them, and much more.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "63201d30774b",
      _type: "block",
      children: [
        {
          _key: "65e82bcd1687",
          _type: "span",
          marks: [],
          text: "What's in it?",
        },
      ],
      markDefs: [],
      style: "h2",
    },
  ],
  download: "https://drive.google.com/uc?export=download&id=xxx",
  imageGallery: [
    {
      asset: {
        _id: "image-xxx-1125x1500-webp",
        metadata: {
          _type: "sanity.imageMetadata",
          blurHash: "dDNB44Ki%LyD-pSiw0XSUW-;R6M{BNbX%gof1YR4bcoJ",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1500,
            width: 1125,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEBQYH/8QAJBAAAgICAQQBBQAAAAAAAAAAAQIDBAARBRITIVExFEFSU3H/xAAYAQACAwAAAAAAAAAAAAAAAAAAAwECBf/EACERAAIBAwMFAAAAAAAAAAAAAAABAgMREgQTIRQxQUKh/9oADAMBAAIRAxEAPwD3KevDLMzu5ffgfHjEmjW0w7hVtbA0My57DIx2SPeWcTYMtaaRmTYfQLesmwhUKb5sUULsvY00bHpYgfzDLuMnazW7oVApYgePke8MWoSXsNltX4h9ZmcjwMfIOemd4yfxyKpw12jDPXaaOSBjvrcecVBfteR3m1jJLtkg7mY5bJGdHWU12TNqgxr1UhbS9HgAD7YZz31tj9rYYZIOtg/DP//Z",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#466d5f",
              foreground: "#fff",
              population: 3.96,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#7c2307",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#466d5f",
              foreground: "#fff",
              population: 3.96,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#b9d3cc",
              foreground: "#000",
              population: 3.87,
              title: "#000",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#94f8d4",
              foreground: "#000",
              population: 0,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#749c8c",
              foreground: "#fff",
              population: 0.16,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#f58461",
              foreground: "#000",
              population: 0.54,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      },
    },
    {
      asset: {
        _id: "image-xxx-1125x1500-webp",
        metadata: {
          _type: "sanity.imageMetadata",
          blurHash: "dYN1iaR5%f$j~qozRPW;PSo}t8OCMeV[xao2J5jFV@oM",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1500,
            width: 1125,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAYFAgMEBwj/xAAkEAACAgIBAwQDAAAAAAAAAAABAgMEABEhBQYSEyIxYRVRU//EABcBAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAeEQACAQQDAQAAAAAAAAAAAAAAARECBBIhBSIyQf/aAAwDAQACEQMRAD8A6Gu1Vef2FlA44yiagqOAjyHY+dnE+13JYqX6qSPuKRiGH1k+erQz1TLXl3o6IwJypF1WvbFpSMkNaMRKHA3r94ZFwuzRKSTsjDCT5pag1l3JA6pBY8WKox9wHA4y10GzNND6YYyEsOFGMMs8k0RjlbyQ/IIGYVJFrSloFCH6zE6gUuVXqNj5WBFeMHg+IwxV/IWv7NhhyJHd0v4f/9k=",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#57806f",
              foreground: "#fff",
              population: 2.31,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#067e4f",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#7fb1a0",
              foreground: "#000",
              population: 13.68,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#cdbba1",
              foreground: "#000",
              population: 0.67,
              title: "#fff",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#c4fce6",
              foreground: "#000",
              population: 0.25,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#7fb1a0",
              foreground: "#000",
              population: 13.68,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#0cf298",
              foreground: "#000",
              population: 0,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      },
    },
    {
      asset: {
        _id: "image-xxx-1125x1500-webp",
        metadata: {
          _type: "sanity.imageMetadata",
          blurHash: "daLhJAs,-UtR_NRjRjs:K}o#S#RjM|t7t7WBX4V@o1oL",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1500,
            width: 1125,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAwf/xAAlEAACAQMDBAIDAAAAAAAAAAABAgADBBEFEyEGEhQxUXEkMmH/xAAXAQEBAQEAAAAAAAAAAAAAAAADAQIF/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAEQMFEgT/2gAMAwEAAhEDEQA/AO43Dah5LbNS32T+ob2IBdTVyRs9p+SZGdRXtW3tGqU2YMGXGD/ZQaf1MjW9LyeamMcSKeoeTyhDVx5aC42fynTdzz2+oRLeairXDFGIU4xzCZL0ajLriwB6kx1LRLabU7uMMpGPuTta5YVkCHOPiVoAei1NwChHIMUCxtkclaSgyq1TnHZowsgzZaxdVLE5wIRhQAWmAFGPqEFkJN3HXeKoA5M//9k=",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#815053",
              foreground: "#fff",
              population: 1.25,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#245f47",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d1aeb1",
              foreground: "#000",
              population: 12.48,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d1aeb1",
              foreground: "#000",
              population: 12.48,
              title: "#fff",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d4fcec",
              foreground: "#000",
              population: 0.06,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#9c5c6c",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#73c9a6",
              foreground: "#000",
              population: 3.46,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      },
    },
  ],
  name: "Movie Journal",
  price: 6,
  slug: {
    _type: "slug",
    current: "movie-journal",
  },
};

export const productWithoutIdAndCategories = {
  // _id: "b054fbdd-802f-48da-a575-f9e8047e02c7",
  // categories: [
  //   {
  //     _key: "bed38e52719a",
  //     _ref: "printable-category",
  //     _type: "reference",
  //   },
  // ],
  _createdAt: "2025-10-06T11:47:26Z",
  _rev: "1tNFA3JjDDxFpUt908ad9L",
  _type: "product",
  _updatedAt: "2025-10-29T11:35:35Z",
  archived: false,
  description: [
    {
      _key: "1d2696758201",
      _type: "block",
      children: [
        {
          _key: "6ab5ab54c1cf",
          _type: "span",
          marks: ["em"],
          text: "Movies & TV Shows Tracker | Ultimate Bundle for A4, A5, Letter | Binder Printables, To Watch, Favorites List, Films and Series Reviews",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "7d5b7244dc43",
      _type: "block",
      children: [
        {
          _key: "bcec94264f91",
          _type: "span",
          marks: [],
          text: "Easily keep track of your watched Movies & TV Shows with this complete template bundle. Plan your To Watch list, record your favorites, review them, and much more.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "63201d30774b",
      _type: "block",
      children: [
        {
          _key: "65e82bcd1687",
          _type: "span",
          marks: [],
          text: "What's in it?",
        },
      ],
      markDefs: [],
      style: "h2",
    },
  ],
  download: "https://drive.google.com/uc?export=download&id=xxx",
  imageGallery: [
    {
      asset: {
        _id: "image-xxx-1125x1500-webp",
        metadata: {
          _type: "sanity.imageMetadata",
          blurHash: "dDNB44Ki%LyD-pSiw0XSUW-;R6M{BNbX%gof1YR4bcoJ",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1500,
            width: 1125,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEBQYH/8QAJBAAAgICAQQBBQAAAAAAAAAAAQIDBAARBRITIVExFEFSU3H/xAAYAQACAwAAAAAAAAAAAAAAAAAAAwECBf/EACERAAIBAwMFAAAAAAAAAAAAAAABAgMREgQTIRQxQUKh/9oADAMBAAIRAxEAPwD3KevDLMzu5ffgfHjEmjW0w7hVtbA0My57DIx2SPeWcTYMtaaRmTYfQLesmwhUKb5sUULsvY00bHpYgfzDLuMnazW7oVApYgePke8MWoSXsNltX4h9ZmcjwMfIOemd4yfxyKpw12jDPXaaOSBjvrcecVBfteR3m1jJLtkg7mY5bJGdHWU12TNqgxr1UhbS9HgAD7YZz31tj9rYYZIOtg/DP//Z",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#466d5f",
              foreground: "#fff",
              population: 3.96,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#7c2307",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#466d5f",
              foreground: "#fff",
              population: 3.96,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#b9d3cc",
              foreground: "#000",
              population: 3.87,
              title: "#000",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#94f8d4",
              foreground: "#000",
              population: 0,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#749c8c",
              foreground: "#fff",
              population: 0.16,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#f58461",
              foreground: "#000",
              population: 0.54,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      },
    },
    {
      asset: {
        _id: "image-xxx-1125x1500-webp",
        metadata: {
          _type: "sanity.imageMetadata",
          blurHash: "dYN1iaR5%f$j~qozRPW;PSo}t8OCMeV[xao2J5jFV@oM",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1500,
            width: 1125,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAYFAgMEBwj/xAAkEAACAgIBAwQDAAAAAAAAAAABAgMEABEhBQYSEyIxYRVRU//EABcBAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAeEQACAQQDAQAAAAAAAAAAAAAAARECBBIhBSIyQf/aAAwDAQACEQMRAD8A6Gu1Vef2FlA44yiagqOAjyHY+dnE+13JYqX6qSPuKRiGH1k+erQz1TLXl3o6IwJypF1WvbFpSMkNaMRKHA3r94ZFwuzRKSTsjDCT5pag1l3JA6pBY8WKox9wHA4y10GzNND6YYyEsOFGMMs8k0RjlbyQ/IIGYVJFrSloFCH6zE6gUuVXqNj5WBFeMHg+IwxV/IWv7NhhyJHd0v4f/9k=",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#57806f",
              foreground: "#fff",
              population: 2.31,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#067e4f",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#7fb1a0",
              foreground: "#000",
              population: 13.68,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#cdbba1",
              foreground: "#000",
              population: 0.67,
              title: "#fff",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#c4fce6",
              foreground: "#000",
              population: 0.25,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#7fb1a0",
              foreground: "#000",
              population: 13.68,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#0cf298",
              foreground: "#000",
              population: 0,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      },
    },
    {
      asset: {
        _id: "image-xxx-1125x1500-webp",
        metadata: {
          _type: "sanity.imageMetadata",
          blurHash: "daLhJAs,-UtR_NRjRjs:K}o#S#RjM|t7t7WBX4V@o1oL",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1500,
            width: 1125,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAwf/xAAlEAACAQMDBAIDAAAAAAAAAAABAgADBBEFEyEGEhQxUXEkMmH/xAAXAQEBAQEAAAAAAAAAAAAAAAADAQIF/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAEQMFEgT/2gAMAwEAAhEDEQA/AO43Dah5LbNS32T+ob2IBdTVyRs9p+SZGdRXtW3tGqU2YMGXGD/ZQaf1MjW9LyeamMcSKeoeTyhDVx5aC42fynTdzz2+oRLeairXDFGIU4xzCZL0ajLriwB6kx1LRLabU7uMMpGPuTta5YVkCHOPiVoAei1NwChHIMUCxtkclaSgyq1TnHZowsgzZaxdVLE5wIRhQAWmAFGPqEFkJN3HXeKoA5M//9k=",
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#815053",
              foreground: "#fff",
              population: 1.25,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#245f47",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d1aeb1",
              foreground: "#000",
              population: 12.48,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d1aeb1",
              foreground: "#000",
              population: 12.48,
              title: "#fff",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d4fcec",
              foreground: "#000",
              population: 0.06,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#9c5c6c",
              foreground: "#fff",
              population: 0,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#73c9a6",
              foreground: "#000",
              population: 3.46,
              title: "#fff",
            },
          },
        },
        url: "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      },
    },
  ],
  name: "Movie Journal",
  price: 6,
  slug: {
    _type: "slug",
    current: "movie-journal",
  },
};

export const products = [
  {
    _id: "1",
    categories: [
      {
        _key: "9e340dd7a435",
        _ref: "printable-category",
        _type: "reference",
      },
    ],
    ...productWithoutIdAndCategories,
  },
  {
    _id: "2",
    categories: [
      {
        _key: "ced5a0a6b95e",
        _ref: "printable-category",
        _type: "reference",
      },
    ],

    ...productWithoutIdAndCategories,
  },
  {
    _id: "3",
    categories: [
      {
        _key: "bed38e52719a",
        _ref: "spreadsheets-category",
        _type: "reference",
      },
    ],
    ...productWithoutIdAndCategories,
  },
] as ALL_PRODUCTS_QUERYResult; // Force type, as it is difficult to create mocks that are completely compatible with Sanity custom types
