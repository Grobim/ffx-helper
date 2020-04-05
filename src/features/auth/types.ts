interface UserProfile {
  avatarUrl: string;
  displayName: string;
  email: string;
  providerData: Record<string, any>[];
}

export type { UserProfile };
