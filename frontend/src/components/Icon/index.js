import React from 'react'

import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';

export function Icon(props) {
  switch (props.name) {
    case "pass":
      return <FiLock size={props.size} color={props.color} />;
    case "user":
      return <FiUser size={props.size} color={props.color} />;
    case "mail":
      return <FiMail size={props.size} color={props.color} />;
    case "eye":
      return <FiEye size={props.size} color={props.color} />;
    case "eye-off":
      return <FiEyeOff size={props.size} color={props.color} />;
    default:
      return <FiUser size={props.size || 24} color={props.color} />;
  }
}
