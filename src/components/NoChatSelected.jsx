import { MessageCircle } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="max-w-md text-center space-y-6 animate-fade-in">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300"
            >
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
          Welcome to ChatMe
        </h2>
        <p className="text-base-content/70 text-lg transition-opacity duration-500 hover:opacity-80">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
