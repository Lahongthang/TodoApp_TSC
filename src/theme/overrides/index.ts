import { Theme } from '@mui/material'
import Button from "./Button";
import Dialog from "./Dialog";
import MenuItem from "./MenuItem";
import Popover from "./Popover";
import Table from "./Table";
import Card from './Card';
import Typography from './Typography';
import Autocomplete from './Autocomplete';
import DatePicker from './DatePicker';
import Checkbox from './Checkbox';

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Popover(theme),
        MenuItem(theme),
        Dialog(theme),
        Button(theme),
        Table(theme),
        Card(theme),
        Typography(theme),
        Autocomplete(theme),
        DatePicker(theme),
        Checkbox(theme),
    )
}
