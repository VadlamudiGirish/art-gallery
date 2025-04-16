import { useRouter } from "next/router";
import Card from "../Card/Card";
import ColorPalette from "../ColorPalette/ColorPalette";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import { useCommentStore } from "../../store/commentsStore";

export default function DetailPage({ element }) {
  const router = useRouter();
  const { comments, addComment } = useCommentStore();

  const artworkComments = comments[element.slug] || [];

  const handleSubmitComment = (text) => {
    addComment(element.slug, text);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        data-testid="back-to-gallery"
        aria-label="Back to gallery"
        onClick={(e) => {
          e.preventDefault();
          router.push("/gallery");
        }}
        className="mb-6 cursor-pointer hover:text-indigo-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Card element={element} elementName="artwork" isLink={false} />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{element.name}</h2>
          <p className="text-gray-600 mb-4">{`Artist: ${element.artist}`}</p>
          <p className="text-gray-600 mb-4">{`Year: ${element.year}`}</p>
          <p className="text-gray-600 mb-4">{`Genre: ${element.genre}`}</p>

          <ColorPalette colors={element.colors} />

          <div className="mt-12 border-t pt-8">
            <CommentList comments={artworkComments} />
            <CommentForm onSubmit={handleSubmitComment} />
          </div>
        </div>
      </div>
    </div>
  );
}
