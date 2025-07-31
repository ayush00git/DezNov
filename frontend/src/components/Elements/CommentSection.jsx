import React, { useState } from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';

export default function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      content: 'This is really helpful! Thanks for sharing.',
      timestamp: '2 hours ago',
      likes: 12,
      liked: false,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      author: 'Mike Chen',
      content: 'Great explanation. I was struggling with this concept but now it makes sense.',
      timestamp: '4 hours ago',
      likes: 8,
      liked: true,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      author: 'Emma Davis',
      content: 'Could you elaborate more on the implementation details?',
      timestamp: '1 day ago',
      likes: 3,
      liked: false,
      avatar: '👩‍🎨'
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'You',
        content: newComment,
        timestamp: 'Just now',
        likes: 0,
        liked: false,
        avatar: '😊'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleLike = (id) => {
    setComments(comments.map(comment => {
      if (comment.id === id) {
        return {
          ...comment,
          liked: !comment.liked,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comments</h2>
        <p className="text-gray-600">{comments.length} comment{comments.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Add Comment Form */}
      <div className="mb-8">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
            😊
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write a comment..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              rows="3"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                Press Enter to post, Shift+Enter for new line
              </span>
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                <Send size={16} />
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 ml-4">
                <button
                  onClick={() => handleLike(comment.id)}
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    comment.liked 
                      ? 'text-red-600 hover:text-red-700' 
                      : 'text-gray-500 hover:text-red-600'
                  }`}
                >
                  <Heart 
                    size={16} 
                    className={comment.liked ? 'fill-current' : ''} 
                  />
                  {comment.likes}
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  <MessageCircle size={16} />
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        </div>
      )}
    </div>
  );
}