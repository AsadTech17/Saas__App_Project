"use client";

import Link from "next/link";
import { useTransition, useState } from "react";
import { addBookmark, removeBookmark } from "@/lib/actions/companion.actions";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  isBookmarked?: boolean; 
}

function CompanionCard({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  isBookmarked = false, 
}: CompanionCardProps) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const handleBookmarkToggle = () => {
    startTransition(async () => {
      try {
        if (bookmarked) {
          await removeBookmark(id, pathname);
          setBookmarked(false);
        } else {
          await addBookmark(id, pathname);
          setBookmarked(true);
        }
      } catch (error) {
        console.error("Bookmark toggle error:", error);
      }
    });
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button
          className="companion-bookmark"
          onClick={handleBookmarkToggle}
          disabled={isPending}
        >
          <img
            src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold truncate">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <img src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">Launch Lesson</button>
      </Link>
    </article>
  );
}

export default CompanionCard;
