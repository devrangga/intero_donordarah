export interface Register {
  title: string;
  placeholder: string;
  name: string;
  logo: "nurse" | "user" | "phone" | "lock";
  isPassword: boolean;
}

export const register: Register[] = [
    {
        title: "Nama Faskes",
        placeholder: "Masukkan Nama Faskes",
        name: "faskes",
        logo: "nurse",
        isPassword : false
    },
    {
        title: "Username",
        placeholder: "Masukkan Username",
        name: "username",
        logo: "user",
        isPassword : false
    },
    {
        title: "Nomor Telfon",
        placeholder: "Masukkan Nama Faskes",
        name: "phone",
        logo: "phone",
        isPassword : false
    },
    {
        title: "Password",
        placeholder: "Masukkan Password",
        name: "password",
        logo: "lock",
        isPassword : true
    },
]

export interface Login {
  title: string;
  placeholder: string;
  name: string;
  logo: "user" | "lock";
  isPassword: boolean;
}

export const login: Login[] = [
    {
        title: "Username",
        placeholder: "Masukkan Username",
        name: "username",
        logo: "user",
        isPassword : false
    },
    {
        title: "Password",
        placeholder: "Masukkan Password",
        name: "password",
        logo: "lock",
        isPassword : true
    },
]

export interface Sidebar {
  name: "dashboard" | "kelolakadar" | "permintaankadar" | "profile";
  label: string;
  icon: "dashboard" | "medicine-bottle" | "hand-heart" | "user";
}

export const sidebar: Sidebar[] = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    name: "kelolakadar",
    label: "Kelola Kadar",
    icon: "medicine-bottle",
  },
  {
    name: "permintaankadar",
    label: "Permintaan Kadar",
    icon: "hand-heart",
  },
  {
    name: "profile",
    label: "Profile",
    icon: "user",
  },
];
