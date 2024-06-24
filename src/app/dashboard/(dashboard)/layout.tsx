import { NavLinksSidebar } from '@/components/nav-links-sidebar';
import { Sidebar } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='flex h-screen flex-1 overflow-hidden'>
      <Sidebar navLinks={<NavLinksSidebar />} />

      <main className='size-full overflow-y-scroll p-12 pb-0'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
