// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _randomPackage_ChatRequest, ChatRequest__Output as _randomPackage_ChatRequest__Output } from '../randomPackage/ChatRequest';
import type { ChatResponse as _randomPackage_ChatResponse, ChatResponse__Output as _randomPackage_ChatResponse__Output } from '../randomPackage/ChatResponse';
import type { NumberRequest as _randomPackage_NumberRequest, NumberRequest__Output as _randomPackage_NumberRequest__Output } from '../randomPackage/NumberRequest';
import type { NumberResponse as _randomPackage_NumberResponse, NumberResponse__Output as _randomPackage_NumberResponse__Output } from '../randomPackage/NumberResponse';
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PongResponse as _randomPackage_PongResponse, PongResponse__Output as _randomPackage_PongResponse__Output } from '../randomPackage/PongResponse';
import type { ToDoRequest as _randomPackage_ToDoRequest, ToDoRequest__Output as _randomPackage_ToDoRequest__Output } from '../randomPackage/ToDoRequest';
import type { ToDoResponse as _randomPackage_ToDoResponse, ToDoResponse__Output as _randomPackage_ToDoResponse__Output } from '../randomPackage/ToDoResponse';

export interface RandomClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  RandomNumbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNumbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNumbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  TodoList(callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  todoList(callback: grpc.requestCallback<_randomPackage_ToDoResponse__Output>): grpc.ClientWritableStream<_randomPackage_ToDoRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_randomPackage_ChatRequest__Output, _randomPackage_ChatResponse>;
  
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PongResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_randomPackage_NumberRequest__Output, _randomPackage_NumberResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_randomPackage_ToDoRequest__Output, _randomPackage_ToDoResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_randomPackage_ChatRequest, _randomPackage_ChatResponse, _randomPackage_ChatRequest__Output, _randomPackage_ChatResponse__Output>
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PongResponse, _randomPackage_PingRequest__Output, _randomPackage_PongResponse__Output>
  RandomNumbers: MethodDefinition<_randomPackage_NumberRequest, _randomPackage_NumberResponse, _randomPackage_NumberRequest__Output, _randomPackage_NumberResponse__Output>
  TodoList: MethodDefinition<_randomPackage_ToDoRequest, _randomPackage_ToDoResponse, _randomPackage_ToDoRequest__Output, _randomPackage_ToDoResponse__Output>
}
