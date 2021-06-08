import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractCentralMessage } from "../abstract-cental-message";
import { Message, MessageType } from "../central-message.types";

@Component({
	selector: "app-message-bar",
	templateUrl: "./message-bar.component.html",
	styleUrls: ["./message-bar.component.scss"]
})
export class MessageBarComponent implements OnInit {

	@ViewChild("defaultTemplate", { read: TemplateRef }) defaultTemplate: TemplateRef<{ $implicit: Message }>;

	messages$: Observable<Message[]>;

	constructor(private readonly messageService: AbstractCentralMessage) { }

	ngOnInit(): void {
		this.messages$ = this.messageService.messages$;
	}

	remove(message: Message) {
		this.messageService.removeMessage(message);
	}

	getClass = (message: Message) => message.type === MessageType.Success ? "success-banner" : "warning-error-banner";

}
