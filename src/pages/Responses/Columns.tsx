import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Response = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  birthDate: Date;
  aboutYourself: string;
};

export const columns: ColumnDef<Response>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "birthDate",
    header: "Birth day",
    cell({ row }) {
      return (
        <div>{moment(row.getValue("birthDate")).format("YYYY/MM/DD")}</div>
      );
    },
  },
  {
    accessorKey: "aboutYourself",
    header: "About Your Self",
  },
];
