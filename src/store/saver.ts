import { getSession } from "../storage/session";
import { storage } from "../firebase";
import { Middleware, UnknownAction } from "@reduxjs/toolkit";

const saver: Middleware = (store) => (next) => (action: UnknownAction) => {
  if (action.type === "canvas/pushSave") {
    const getId = () => {
      const dateString = Date.now().toString(36);
      const randomness = Math.random().toString(36).substr(2);
      return dateString + randomness;
    };
    const info = getSession().email;
    storage
      .ref(`/images${info}/${getId()}`)
      .putString((action.payload as string).split(",")[1], "base64", {
        contentType: "image/png",
      });
  }
  return next(action);
};

export type Saver = ReturnType<typeof saver>;

export default saver;
