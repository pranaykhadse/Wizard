import PhoneIcon from "@mui/icons-material/Phone";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import MultiLineComponent from "../components/Fields/MultiLineComponent";
import InputIcon from '@mui/icons-material/Input';
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputField from "../components/Fields/InputField";
import TwoGridField from "../components/Fields/Sections/TwoGridField";
import ThreeGridField from "../components/Fields/Sections/ThreeGridField";

const fieldElement = [
    {
        label: "Single Line",
        input: "TextField",
        inputType: "text",
        icon: TextFieldsIcon,
        comp: InputField,
    },
    {
        label: "Multi Line",
        input: "Textfield",
        inputType: "text",
        icon: InputIcon,
        comp: MultiLineComponent,
    },
    {
        label: "Name",
        input: "Textfield",
        inputType: "text",
        icon: PersonIcon,
        comp: InputField,
    },
    {
        label: "Address",
        input: "Textfield",
        inputType: "text",
        icon: PermContactCalendarIcon,
        comp: InputField,
    },
    {
        label: "Phone",
        input: "Textfield",
        inputType: "number",
        icon: PhoneIcon,
        comp: InputField,
    },
    {
        label: "Email",
        input: "Textfield",
        inputType: "email",
        icon: EmailIcon,
        comp: InputField,
    },
    {
        label: "Date",
        input: "Textfield",
        inputType: "date",
        icon: DateRangeIcon,
        comp: InputField,
    },
    {
        label: "Two Section",
        input: "Textfield",
        inputType: "section",
        icon: DateRangeIcon,
        comp: TwoGridField,
    },
    {
        label: "Three Section",
        input: "Textfield",
        inputType: "section",
        icon: DateRangeIcon,
        comp: ThreeGridField,
    },

]

export default fieldElement;