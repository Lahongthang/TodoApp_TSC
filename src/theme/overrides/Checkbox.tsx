import { Theme } from '@mui/material'
import { CheckboxIcon, CheckboxCheckedIcon, CheckboxIndeterminateIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          padding: theme.spacing(1),
          ...(ownerState.size === 'small' && {
            '& svg': { width: 20, height: 20 },
          }),
          ...(ownerState.size === 'medium' && {
            '& svg': { width: 24, height: 24 },
          }),
        }),
      },
    },
  };
}
