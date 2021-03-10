import {ContentType} from './ContentType'
import {MessageStatus} from './MessageStatus'

export interface MessageBuilder{
    senderId: string;
    content: string;
    containsText: boolean;
    constainsUrl: boolean;
    mediatype: ContentType | null
    status: MessageStatus
}