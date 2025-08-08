
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Loading...</h2>
          <p className="text-sm text-muted-foreground">Please wait while we load the page</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
