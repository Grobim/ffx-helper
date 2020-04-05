interface UserProfile {
  avatarUrl: string;
  displayName: string;
  email: string;
  providerData: Record<string, any>[];
  role?: string;
}

export type { UserProfile };
