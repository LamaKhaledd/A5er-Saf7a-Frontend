import { AppShell, AppShellFooter } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AuthHeader from './auth-header/auth-header';
import AuthFooter from './auth-footer/auth-footer';

const Layout=()=> {
  return (
    <AppShell>
      <AppShell.Header>
        <AuthHeader />
      </AppShell.Header>
      <AppShellFooter>
        <AuthFooter></AuthFooter>
      </AppShellFooter>
    </AppShell>
  );
}
export default Layout;