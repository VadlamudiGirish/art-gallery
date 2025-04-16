import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onSubmit(commentText);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Share your thoughts..."
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  );
}
