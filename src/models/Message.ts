import { MessageStatus } from "./MessageStatus";

export interface Message{
    senderId: string;
    recieverId: string;
    userMessage: string;
    status: MessageStatus;
    containsLink: boolean;
    linkPreview?: any
}