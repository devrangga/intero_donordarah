export interface Register {
  title: string;
  placeholder: string;
  name: string;
  logo: "nurse" | "user" | "phone" | "lock";
  isPassword: boolean;
}

export const register: Register[] = [
  {
    title: "Name",
    placeholder: "Masukkan Nama Faskes",
    name: "name",
    logo: "nurse",
    isPassword: false,
  },
  {
    title: "Address",
    placeholder: "Masukkan Username",
    name: "address",
    logo: "user",
    isPassword: false,
  },
  {
    title: "Phone Number",
    placeholder: "Masukkan Nama Faskes",
    name: "phone_number",
    logo: "phone",
    isPassword: false,
  },
  {
    title: "Email",
    placeholder: "Masukkan Nama Faskes",
    name: "email",
    logo: "phone",
    isPassword: false,
  },
  {
    title: "Password",
    placeholder: "Masukkan Password",
    name: "password",
    logo: "lock",
    isPassword: true,
  },
];

export interface Login {
  title: string;
  placeholder: string;
  name: string;
  logo: "user" | "lock";
  isPassword: boolean;
}

export const login: Login[] = [
  {
    title: "Email",
    placeholder: "Masukkan Email",
    name: "email",
    logo: "user",
    isPassword: false,
  },
  {
    title: "Password",
    placeholder: "Masukkan Password",
    name: "password",
    logo: "lock",
    isPassword: true,
  },
];

export interface Sidebar {
  name: "Dashboard" | "Kelola Kadar" | "Permintaan Kadar" | "Profile";
  label: string;
  icon: "dashboard" | "medicine-bottle" | "hand-heart" | "user";
}

export const sidebar: Sidebar[] = [
  {
    name: "Dashboard",
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    name: "Kelola Kadar",
    label: "Kelola Kadar",
    icon: "medicine-bottle",
  },
  {
    name: "Permintaan Kadar",
    label: "Permintaan Kadar",
    icon: "hand-heart",
  },
  {
    name: "Profile",
    label: "Profile",
    icon: "user",
  },
];
