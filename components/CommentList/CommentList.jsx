import { format } from "date-fns";

export default function CommentList({ comments }) {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
      {comments.length === 0 ? (
        <p className="text-gray-500">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <ul className="space-y-3">
          {comments.map((comment) => (
            <li key={comment.id} className="border-b pb-3">
              <p className="text-gray-800">{comment.text}</p>
              <p className="text-sm text-gray-500 mt-1">
                {format(new Date(comment.date), "MMM dd, yyyy - h:mm a")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
