import SideNav from '@/app/ui/dashboard/sidenav';

// TypeScript được sử dụng để định nghĩa kiểu của children là React.ReactNode. Kiểu này bao gồm bất kỳ thứ gì có thể được render trong React: văn bản, số, phần tử JSX, mảng các phần tử, v.v.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}