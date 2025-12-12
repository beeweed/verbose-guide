import { Card, CardContent } from "../ui/card";
import { Image, Calendar, Newspaper } from "lucide-react";

export default function CreatePost() {
  return (
    <Card className="mb-2 shadow-sm border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
            <img src="https://github.com/shadcn.png" alt="Profile" className="w-12 h-12 rounded-full" />
             <button className="flex-1 text-left rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition-colors font-semibold text-gray-500 pl-4 text-sm">
                Start a post
             </button>
        </div>
        <div className="flex justify-between items-center px-1 md:px-4 pt-1">
             <ActionButton icon={<Image className="w-5 h-5 text-blue-500" />} label="Media" />
             <ActionButton icon={<Calendar className="w-5 h-5 text-yellow-600" />} label="Event" />
             <ActionButton icon={<Newspaper className="w-5 h-5 text-red-400" />} label="Write article" />
        </div>
      </CardContent>
    </Card>
  )
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <button className="flex items-center gap-2 hover:bg-gray-100 px-2 md:px-3 py-3 rounded-md transition-colors">
            {icon}
            <span className="text-sm font-semibold text-gray-500">{label}</span>
        </button>
    )
}
