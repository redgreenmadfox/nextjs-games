import { Spinner } from '@/components/ui/spinner';
import React from 'react';

export default function BlogPageLoading() {
  return (
    <div className="h-screen w-4/5 mx-auto flex items-center justify-center">
      <Spinner />
    </div>
  );
}
