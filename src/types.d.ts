import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "conversation";
    readonly columns: readonly [];
  },
  {
    readonly name: "messages";
    readonly columns: readonly [];
  },
  {
    readonly name: "notes";
    readonly columns: readonly [];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Conversation = InferredTypes["conversation"];
export type ConversationRecord = Conversation & XataRecord;
export type Messages = InferredTypes["messages"];
export type MessagesRecord = Messages & XataRecord;
export type Notes = InferredTypes["notes"];
export type NotesRecord = Notes & XataRecord;
export type DatabaseSchema = {
  conversation: ConversationRecord;
  messages: MessagesRecord;
  notes: NotesRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
