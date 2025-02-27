 function sendMessage(){
        const messageInput = document.getElementById('message-input');
        const message = messageInput.value.trim();

        if(message !==""){
            const chatMassages = document.getElementById('chat-messages');
            const newMessage = document.createElement('div');
            newMessage.classList.add('Message', 'outgoing');
            newMessage.textContent = message;
            chatMassages.appendChild(newMessage);
            messageInput.value ="";
            messageInput.focus();

            setTimeout(sendReply, 1000);
        }
    }
    function sendReply(){
        const chatMassages = Document.getElementById('chat-messages');
        const replyMessage = document.createElement('div');
        replyMessage.classList.add('message', 'incoming');
        replyMessage.textContent = 'this is a sample reply.';
        chatMassages.appendChild(replyMessage);
    }