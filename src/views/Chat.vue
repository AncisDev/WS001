<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              Conversaciones
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li
                  v-for="conversation in conversations"
                  :key="conversation.id"
                  class="list-group-item"
                  :class="{ active: conversation.id === selectedConversationId }"
                  @click="selectConversation(conversation.id)"
                >
                  {{ conversation.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              {{ selectedConversationName }}
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li
                  v-for="message in messages"
                  :key="message.id"
                  class="list-group-item"
                  :class="{ 'text-right': message.sender === currentUser.id }"
                >
                  {{ message.content }}
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <form @submit.prevent="sendMessage">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Escribe un mensaje"
                    v-model="newMessageContent"
                  >
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>