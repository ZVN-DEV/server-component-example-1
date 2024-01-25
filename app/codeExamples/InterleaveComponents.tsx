'use client'

export default function ClientComp({ children }: { children: React.ReactNode }) {
  return (
   <div>
    <h1>The below component is a Server Component</h1>
    {children}
   </div>
  );
 }