import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ThumbsUp, MessageSquare, Share2, Send, MoreHorizontal, X } from "lucide-react";
import { Button } from "../ui/button";

const POSTS = [
  {
    id: 1,
    author: "Claude AI",
    headline: "AI Assistant at Anthropic",
    time: "2h • Edited",
    content: "Just helped a developer build a LinkedIn clone in record time! 🚀 The power of AI-assisted development is real. #coding #react #productivity",
    image: null,
    likes: 420,
    comments: 69
  },
  {
    id: 2,
    author: "Teta",
    headline: "Project Lead at Teta.so",
    time: "5h",
    content: "Check out this amazing new feature we just shipped. It allows for seamless integration between design and code.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    likes: 1200,
    comments: 340
  }
];

export default function Feed() {
  return (
    <div className="space-y-2">
        {POSTS.map(post => (
            <Post key={post.id} post={post} />
        ))}
    </div>
  )
}

function Post({ post }: { post: any }) {
    return (
        <Card className="shadow-sm border-gray-200">
            <CardHeader className="p-3 pb-2 flex flex-row items-start gap-3 space-y-0">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt="Profile" className="w-12 h-12 rounded-full border border-gray-100" />
                 <div className="flex-1">
                     <div className="flex justify-between items-start">
                         <div>
                             <h3 className="text-sm font-semibold hover:text-blue-600 hover:underline cursor-pointer">{post.author}</h3>
                             <p className="text-xs text-gray-500">{post.headline}</p>
                             <div className="flex items-center gap-1 text-xs text-gray-500">
                                 <span>{post.time}</span>
                                 <span>•</span>
                                 <GlobeIcon />
                             </div>
                         </div>
                         <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:bg-gray-100 rounded-full"><MoreHorizontal className="w-5 h-5" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></Button>
                         </div>
                     </div>
                 </div>
            </CardHeader>
            <CardContent className="p-3 pt-1">
                <p className="text-sm mb-2 whitespace-pre-line">{post.content}</p>
                {post.image && (
                    <div className="mt-2 -mx-3">
                         <img src={post.image} alt="Post content" className="w-full object-cover max-h-[500px]" />
                    </div>
                )}
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500 px-1">
                    <div className="flex items-center gap-1">
                        <div className="flex -space-x-1">
                             <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-white">
                                <ThumbsUp className="w-2 h-2 text-white fill-white" />
                             </div>
                        </div>
                        <span className="hover:text-blue-500 hover:underline cursor-pointer ml-1">{post.likes}</span>
                    </div>
                    <div className="hover:text-blue-500 hover:underline cursor-pointer">
                        {post.comments} comments
                    </div>
                </div>
                <div className="h-[1px] bg-gray-200 mt-2"></div>
            </CardContent>
            <CardFooter className="p-1 px-2 flex justify-between">
                <ActionButton icon={<ThumbsUp className="w-5 h-5" />} label="Like" />
                <ActionButton icon={<MessageSquare className="w-5 h-5" />} label="Comment" />
                <ActionButton icon={<Share2 className="w-5 h-5" />} label="Repost" />
                <ActionButton icon={<Send className="w-5 h-5" />} label="Send" />
            </CardFooter>
        </Card>
    )
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <Button variant="ghost" className="flex-1 py-6 hover:bg-gray-100 gap-2 text-gray-600 font-semibold rounded-md">
            {icon}
            <span className="text-sm hidden sm:block">{label}</span>
        </Button>
    )
}

function GlobeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="w-3 h-3 text-gray-500" width="16" height="16" focusable="false">
            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 5.5l-.53-.53a.25.25 0 00-.18-.07h-.76a.25.25 0 00-.18.07l-.53.53a.25.25 0 00-.07.18v.76a.25.25 0 00.07.18l.53.53a.25.25 0 00.18.07h.76a.25.25 0 00.18-.07l.53-.53a.25.25 0 00.07-.18v-.76a.25.25 0 00-.07-.18zM12 8a.75.75 0 00-.22-.53l-.56-.56a.75.75 0 01-.22-.53V6a.75.75 0 01.22-.53l.56-.56a.75.75 0 01.53-.22h.69a.75.75 0 01.53.22l.56.56a.75.75 0 01.22.53V8a.75.75 0 01-.22.53l-.56.56a.75.75 0 01-.53.22h-.69a.75.75 0 00-.53.22z"></path>
        </svg>
    )
}
