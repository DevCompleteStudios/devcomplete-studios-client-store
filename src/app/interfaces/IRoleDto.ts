
type role = 'ROLE_ADMIN' | 'ROLE_DEVELOPER' | 'ROLE_USER' | 'ROLE_SUPPORT';

export interface IRoleDto {
  role: role;
  id: number;
}
