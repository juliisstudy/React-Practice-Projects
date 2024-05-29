"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}) {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3>{post.creator.username}</h3>
          <p>{post.creator.email}</p>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <Image
            src={
              copied === post.prompt
                ? "/assests/icons/tick.svg"
                : "/assests/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="copy"
          />
          <p>{post.prompt}</p>
          <p onClick={() => handleTagClick && handleTagClick(post.tag)}>
            {post.tag}
          </p>
        </div>
      </div>
    </div>
  );
}
