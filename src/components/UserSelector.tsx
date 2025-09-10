import React, { useState } from 'react';
import { User } from '../types/User';

interface Props {
  users: User[];
  selectedUser: null | User;
  setSelectedUser: (user: User) => void;
}

export const UserSelector: React.FC<Props> = ({
  users,
  selectedUser,
  setSelectedUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-cy="UserSelector"
      className={`dropdown ${isOpen ? 'is-active' : ''}`}
    >
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {selectedUser ? (
            <span>{selectedUser.name}</span>
          ) : (
            <span>Choose a user</span>
          )}

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {users.map(user => (
            <a
              href="#user-5"
              key={user.id}
              className="dropdown-item"
              onClick={() => {
                setSelectedUser(user);
                setIsOpen(false);
              }}
            >
              {user.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
