import { ModeProvider } from "@hooks/useMode";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type ProviderProps = {
  mode: string;
  children: ReactNode;
};

const Providers = ({ mode, children }: ProviderProps) => {
  return (
    <ModeProvider mode={mode}>
      <SessionProvider>{children}</SessionProvider>
    </ModeProvider>
  );
};

export default Providers;
