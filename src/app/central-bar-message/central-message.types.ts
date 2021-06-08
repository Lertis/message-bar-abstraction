import { InjectionToken } from "@angular/core";

export enum MessageType { Success, Warning, Error }

export interface Message {
	type: MessageType;
	message: string;
}

export interface MessageLogger {
	log(message: Message): void;
}

export interface MessageConfig {
	logApiErrors: boolean;
}

export const MESSAGE_LOGGERS = new InjectionToken<MessageLogger[]>("MESSAGE_LOGGERS");

