import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      content: 'This is really helpful! Thanks for sharing.',
      timestamp: '2 hours ago',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      author: 'Mike Chen',
      content: 'Great explanation. I was struggling with this concept but now it makes sense.',
      timestamp: '4 hours ago',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      author: 'Emma Davis',
      content: 'Could you elaborate more on the implementation details?',
      timestamp: '1 day ago',
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
        avatar: '😊'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#0D0E11]">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Comments</h2>
        <p className="text-gray-400">{comments.length} comment{comments.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Add Comment Form */}
      <div className="mb-8">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg">
            😊
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write a comment..."
              className="w-full p-3 bg-[#0D0E11] border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-[#2A9F8D] focus:border-transparent outline-none text-white placeholder-gray-500"
              rows="3"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                Press Enter to post, Shift+Enter for new line
              </span>
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-[#2A9F8D] text-white rounded-lg hover:bg-[#238f7d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
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
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg text-white">
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="bg-[#0D0E11] border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-white">{comment.author}</h4>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        </div>
      )}
    </div>
  );
}