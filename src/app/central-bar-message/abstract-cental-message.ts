import { TemplateRef } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Message } from "./central-message.types";

export abstract class AbstractCentralMessage {
	protected _messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
	protected _messagesQueue: Message[] = [];

	readonly messages$: Observable<Message[]> = this._messages.asObservable();

	abstract setMessage(message: Message): void;
	abstract removeMessage(message: Message): void;
	abstract get template(): TemplateRef<any> | null;
}
