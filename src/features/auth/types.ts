enum Role {
  ADMIN = "Admin",
}

interface UserProfile {
  avatarUrl: string;
  displayName: string;
  email: string;
  providerData: Record<string, any>[];
  role?: string;
  settings: UserSettings;
}

interface UserSettings {}

export type { UserProfile };
export { Role };
