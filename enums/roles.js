export const ROLES = {
  TALENT: {
    role_id: 3,
    role_name: 'Talent'
  },
  RECRUITER: {
    role_id: 2,
    role_name: 'Recruiter'
  }
};

export const getRoleIdByName = (roleName) => {
  switch (roleName.toLowerCase()) {
    case 'talent':
      return ROLES.TALENT.role_id;
    case 'recruiter':
      return ROLES.RECRUITER.role_id;
    default:
      return ROLES.TALENT.role_id; // Default to talent
  }
};

export const getRoleNameById = (roleId) => {
  switch (roleId) {
    case ROLES.TALENT.role_id:
      return ROLES.TALENT.role_name;
    case ROLES.RECRUITER.role_id:
      return ROLES.RECRUITER.role_name;
    default:
      return ROLES.TALENT.role_name; // Default to talent
  }
};
