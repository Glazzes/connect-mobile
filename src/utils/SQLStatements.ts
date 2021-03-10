export const creataMessagesTableSQLStatement = `
    create table if not exists messages(
    message_id integer serial primary key not null,
    sender_id varchar(32) not null,
    reciever_id varchar(32) not null,
    message_content varchar(200) not null,
    status varchar(10) not null,
    contains_link boolean not null)
`