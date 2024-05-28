
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type KeyRole = keyof typeof UserRole
type RoleDescriptionType = Record<KeyRole, string>

const RoleDescription: RoleDescriptionType = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
