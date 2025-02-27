import { Skeleton } from "@heroui/react";

export default function PaymentSkeleton() {
  return (
    <div className="mt-10 p-5">
      <h2 className="text-xl font-bold mb-4">
        <Skeleton className="w-48 h-6 rounded-md" />
      </h2>
      <Skeleton className="w-full h-12 rounded-lg mb-3" />
      <Skeleton className="w-full h-12 rounded-lg mb-3" />
      <Skeleton className="w-full h-12 rounded-lg mb-3" />
      <Skeleton className="w-32 h-8 rounded-md" />
    </div>
  );
}
