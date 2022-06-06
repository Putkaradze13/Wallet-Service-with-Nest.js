export const MessageHandler = (message: string) => (target: any, propertyKey: string) => {
  Reflect.defineMetadata(message, propertyKey, target);
};
