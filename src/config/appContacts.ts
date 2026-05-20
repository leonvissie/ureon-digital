import { site } from "./site";

export type AppContactChannels = {
  general: string;
  support: string;
  privacy: string;
  dataProtection: string;
  legal: string;
};

export const defaultAppContacts: AppContactChannels = {
  general: site.email,
  support: site.email,
  privacy: site.email,
  dataProtection: site.email,
  legal: site.email
};

export const appContacts: Partial<Record<"cinlo" | "guncerts", Partial<AppContactChannels>>> = {
  cinlo: {
    general: "ureondigital@gmail.com",
    support: "ureondigital@gmail.com",
    privacy: "ureondigital@gmail.com",
    dataProtection: "ureondigital@gmail.com",
    legal: "ureondigital@gmail.com"
  },
  guncerts: {}
};

export function getAppContacts(appSlug: "cinlo" | "guncerts"): AppContactChannels {
  return {
    ...defaultAppContacts,
    ...appContacts[appSlug]
  };
}
