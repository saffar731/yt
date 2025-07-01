// Profile dropdown toggle
const profileToggle = document.getElementById('profileToggle');
const profileDropdown = document.getElementById('profileDropdown');

profileToggle.addEventListener('click', () => {
  profileDropdown.style.display =
    profileDropdown.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown on outside click
document.addEventListener('click', function (event) {
  if (!profileToggle.contains(event.target) && !profileDropdown.contains(event.target)) {
    profileDropdown.style.display = 'none';
  }
});

function toggleSearchInput() {
    const container = document.querySelector('.search-container');
    container.classList.toggle('active');

    const input = container.querySelector('.search-input');
    if (container.classList.contains('active')) {
      input.focus();
    } else {
      input.value = '';
      filterContent();
    }
  }

  function filterContent() {
    const input = document.querySelector('.search-input');
    const filter = input.value.toLowerCase();
    const contents = document.querySelectorAll('.main-content');

    contents.forEach(content => {
      const text = content.innerText.toLowerCase();
      content.style.display = text.includes(filter) ? 'block' : 'none';
    });
  }

  const chatBtn = document.getElementById('chat-btn');
  const chatWindow = document.getElementById('chat-window');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatForm = document.getElementById('chat-form');

  // Toggle chat window visibility
  function openChat() {
    chatWindow.style.display = 'flex';
    chatWindow.setAttribute('aria-hidden', 'false');
    chatInput.focus();
  }
  function closeChat() {
    chatWindow.style.display = 'none';
    chatWindow.setAttribute('aria-hidden', 'true');
    chatBtn.focus();
  }

  chatBtn.addEventListener('click', () => {
    if (chatWindow.style.display === 'flex') {
      closeChat();
    } else {
      openChat();
    }
  });

  chatCloseBtn.addEventListener('click', closeChat);

  // Append message to chat
  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    if (sender === 'user') {
      msgDiv.classList.add('user-msg');
    } else {
      msgDiv.classList.add('bot-msg');
    }
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Basic bot responses
  function botResponse(userText) {
    const text = userText.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else if (text.includes('Tell me about your website?')) {
      return "Our website name is WebTutorials.";
    } else if (text.includes('help')) {
      return 'Sure! Please tell me what you need help with.';
    } else if (text.includes('bye') || text.includes('thank you')) {
      return 'You’re welcome! Have a great day!';
    } else {
      return "Sorry, I didn't understand that. Can you Contact this number: 9474227563";
    }
  }

  // Send message handler
  function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    appendMessage(userText, 'user');
    chatInput.value = '';

    // Simulate bot thinking delay
    setTimeout(() => {
      const botReply = botResponse(userText);
      appendMessage(botReply, 'bot');
    }, 600);
  }

  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    sendMessage();
  });