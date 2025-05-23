import { ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC, ReactNode } from 'react';

type BaseListItemProps = {
  menu?: ReactNode;
  icon?: ReactNode;
  dense?: boolean;
  title?: ReactNode;
  label?: ReactNode;
  avatar?: ReactNode;
  disabled?: boolean;
  subtitle?: string;
  selected?: boolean;
  onClick?: () => void;
};

export const BaseListItem: FC<BaseListItemProps> = (props) => {
  const { menu, icon, dense = false, label, avatar, title, subtitle, disabled, selected, onClick } = props;

  return (
    <ListItem dense={dense} secondaryAction={menu} divider disableGutters sx={{ pr: 0 }}>
      <ListItemButton selected={selected} disabled={disabled} onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        {avatar && <ListItemAvatar>{avatar}</ListItemAvatar>}
        <ListItemText primary={title} secondary={subtitle} />
        {label}
      </ListItemButton>
    </ListItem>
  );
};
