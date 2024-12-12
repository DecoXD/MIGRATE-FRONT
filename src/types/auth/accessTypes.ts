export type RegisterUserProps = {
  name:string,
  password:string,
  email:string
}

export type LoginUserProps = {
  email:string,
  password:string
}

export type RegisterInputs = {
  name: string;
  placeholder: string;
  type: string;
  icon: string;
}



export type AuthFormProps = {
  title: string;
  subtitle: string;
  inputs: any; // Substitua 'any' pelo tipo específico dos inputs, se disponível
  link: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>,name:string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formItens: any; // Substitua 'any' pelo tipo específico dos formItens, se disponível
  action: string;
  isPending: boolean;
};