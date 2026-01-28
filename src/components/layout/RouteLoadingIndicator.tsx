import { Skeleton } from '@/components/ui/skeleton';

export const RouteLoadingIndicator = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="space-y-6">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-12 w-3/4 max-w-2xl" />
        <div className="space-y-3 pt-8">
          <Skeleton className="h-4 w-full max-w-xl" />
          <Skeleton className="h-4 w-5/6 max-w-xl" />
          <Skeleton className="h-4 w-4/6 max-w-xl" />
        </div>
      </div>
    </div>
  );
};
