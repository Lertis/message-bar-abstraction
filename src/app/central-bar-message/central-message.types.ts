import { InjectionToken } from "@angular/core";

export enum MessageType { Success, Warning, Error }

export interface Message {
	type: MessageType;
	message: string;
}

export interface MessageLogger {
	log(message: Message): void;
}

export interface CentralMessageConfig {
  enableLoggers: boolean
}

export const MESSAGE_LOGGERS = new InjectionToken<MessageLogger[]>("MESSAGE_LOGGERS");

