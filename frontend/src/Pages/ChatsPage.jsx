import React, { useState } from 'react';
import { Send, Search, Phone, Heart, Smile, ArrowLeft } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showChatList, setShowChatList] = useState(true);
  const navigate = useNavigate();
  // Mock chat data
  const chats = [
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Thanks for the help earlier!',
      time: '1h',
      unread: 0,
      online: false,
      messages: [
        { id: 1, text: 'Hey, can you help me with the project?', sender: 'them', time: '1:00 PM' },
        { id: 2, text: 'Sure! What do you need?', sender: 'me', time: '1:05 PM' },
        { id: 3, text: 'I\'m stuck on the design part', sender: 'them', time: '1:07 PM' },
        { id: 4, text: 'Let me share some resources', sender: 'me', time: '1:10 PM' },
        { id: 5, text: 'Thanks for the help earlier!', sender: 'them', time: '1:30 PM' }
      ]
    },
    {
      id: 3,
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'See you tomorrow! 🎉',
      time: '3h',
      unread: 1,
      online: true,
      messages: [
        { id: 1, text: 'Are we still on for tomorrow?', sender: 'them', time: '11:00 AM' },
        { id: 2, text: 'Absolutely! What time works for you?', sender: 'me', time: '11:15 AM' },
        { id: 3, text: 'How about 2 PM at the coffee shop?', sender: 'them', time: '11:20 AM' },
        { id: 4, text: 'Perfect! See you there', sender: 'me', time: '11:25 AM' },
        { id: 5, text: 'See you tomorrow! 🎉', sender: 'them', time: '11:30 AM' }
      ]
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Great job on the presentation!',
      time: '1d',
      unread: 0,
      online: false,
      messages: [
        { id: 1, text: 'How did the presentation go?', sender: 'them', time: 'Yesterday' },
        { id: 2, text: 'It went really well! Thanks for asking', sender: 'me', time: 'Yesterday' },
        { id: 3, text: 'Great job on the presentation!', sender: 'them', time: 'Yesterday' }
      ]
    },
    {
      id: 5,
      name: 'Jessica Lee',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Let me know when you\'re free',
      time: '2d',
      unread: 0,
      online: true,
      messages: [
        { id: 1, text: 'Want to grab lunch this week?', sender: 'them', time: '2 days ago' },
        { id: 2, text: 'That sounds great!', sender: 'me', time: '2 days ago' },
        { id: 3, text: 'Let me know when you\'re free', sender: 'them', time: '2 days ago' }
      ]
    }
  ];

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setShowChatList(false); // Hide chat list on mobile when chat is selected
  };

  const handleBackToChats = () => {
    setShowChatList(true);
    // Don't clear selectedChat to maintain state
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      const newMessage = {
        id: selectedChat.messages.length + 1,
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChat.id) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: message,
            time: 'now'
          };
        }
        return chat;
      });
      
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, newMessage]
      });
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-[#0D0E11]">
      {/* Left Sidebar - Chat List */}
      <div className={`w-full md:w-1/4 border-r border-[#1A1D23] flex flex-col bg-[#0D0E11] ${showChatList ? 'block' : 'hidden md:flex'}`}>
        {/* Header */}
        <div className="p-4 border-b border-[#1A1D23]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-white cursor-pointer"
            onClick={() => navigate('/explore')}>DezNov</h1>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1A1D23] text-white placeholder-gray-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] border border-[#2A2D34]"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat)}
              className={`flex items-center p-4 cursor-pointer hover:bg-[#1A1D23] transition-colors ${
                selectedChat?.id === chat.id ? 'bg-[#2A9F8D] bg-opacity-20 border-r-2 border-[#2A9F8D]' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate mt-1">{chat.lastMessage}</p>
              </div>
              
              {chat.unread > 0 && (
                <div className="ml-2 bg-[#2A9F8D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Chat Area */}
      <div className={`flex-1 flex flex-col ${!showChatList ? 'block' : 'hidden md:flex'}`}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-[#1A1D23] flex items-center justify-between bg-[#0D0E11]">
              <div className="flex items-center">
                <button
                  onClick={handleBackToChats}
                  className="md:hidden mr-3 p-2 hover:bg-[#1A1D23] rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <div className="relative">
                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold text-white">{selectedChat.name}</h2>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#2A9F8D] transition-colors" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0D0E11]">
              {selectedChat.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.sender === 'me'
                        ? 'bg-[#2A9F8D] text-white rounded-br-sm'
                        : 'bg-[#1A1D23] text-gray-100 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'me' ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-[#1A1D23] bg-[#0D0E11]">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 pr-12 bg-[#1A1D23] text-white placeholder-gray-400 border border-[#2A2D34] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2A9F8D]"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <Smile className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#2A9F8D] transition-colors" />
                    <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                  </div>
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="p-2 bg-[#2A9F8D] text-white rounded-full hover:bg-[#248A7A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          // No chat selected state - only shows on desktop
          <div className="flex-1 flex items-center justify-center bg-[#0D0E11]">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1A1D23] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Your Messages</h2>
              <p className="text-gray-400">Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;