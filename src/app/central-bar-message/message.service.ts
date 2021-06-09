import { Inject, Injectable, Optional, TemplateRef } from "@angular/core";
import { AbstractCentralMessage } from "./abstract-cental-message";
import { CentralMessageConfigurationService } from "./central-message-configuration.service";
import { MESSAGE_LOGGERS, MessageLogger, Message } from "./central-message.types";

@Injectable()
export class MessageService extends AbstractCentralMessage {
	constructor(
		@Inject(MESSAGE_LOGGERS) @Optional() private readonly loggers: MessageLogger[],
		private readonly centralMessageConfigurationService: CentralMessageConfigurationService) {
		super();
	}

	get template(): TemplateRef<any> | null {
		return null;
	}

	setMessage(message: Message) {
		this._messagesQueue.push(message);
		this._messages.next([...this._messagesQueue]);

		if (this.centralMessageConfigurationService?.configuration?.enableLoggers) {
			if (this.loggers?.length > 0) {
				this.loggers.forEach(el => el.log(message));
			}
		}
	}

	removeMessage(message: Message): void {
		const index = this._messagesQueue.indexOf(message);
		this._messagesQueue.splice(index, 1);
		this._messages.next([...this._messagesQueue]);
	}
}
