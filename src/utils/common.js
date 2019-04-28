import { Message } from "element-ui";

export const messages = function(type, message) {
  console.log('1233333');
  Message({
    type: type,
    message: message
  });
};
