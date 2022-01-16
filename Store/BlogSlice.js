import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "[0] build a spotify connected app",
    postDate: "8 Aug 21",
    professional: true,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box"
  },
  {
    title: "[1] build a facebook connected app that cost smore than your home",
    postDate: "8 Aug 21",
    professional: false,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box lkjdkljksjdfjlskjflksjk kjlsdkjf kljs dlkjf lskj dlk"
  },
  {
    title: "[2] build a spotify connected app",
    postDate: "8 Aug 21",
    professional: false,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box"
  },
  {
    title: "[3] build a facebook connected app that cost smore than your home",
    postDate: "8 Aug 21",
    professional: true,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box lkjdkljksjdfjlskjflksjk kjlsdkjf kljs dlkjf lskj dlk"
  },
  {
    title: "[4] build a facebook connected app that cost smore than your home",
    postDate: "8 Aug 21",
    professional: true,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box lkjdkljksjdfjlskjflksjk kjlsdkjf kljs dlkjf lskj dlk"
  },
  {
    title: "[5] build a facebook connected app that cost smore than your home",
    postDate: "8 Aug 21",
    professional: true,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box lkjdkljksjdfjlskjflksjk kjlsdkjf kljs dlkjf lskj dlk"
  },
  {
    title: "[6] build a facebook connected app that cost smore than your home",
    postDate: "8 Aug 21",
    professional: false,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box lkjdkljksjdfjlskjflksjk kjlsdkjf kljs dlkjf lskj dlk"
  },
  {
    title: "[6] build a facebook connected app that cost smore than your home",
    postDate: "8 Aug 21",
    professional: true,
    img: "projectimage.png",
    stack: ["react", "express", "spotify Api", "styled components"],
    description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. more junk text that no one will read. just need to fill the box lkjdkljksjdfjlskjflksjk kjlsdkjf kljs dlkjf lskj dlk"
  }
];

export const ProjectSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ProjectSlice.actions;

export default ProjectSlice.reducer;
