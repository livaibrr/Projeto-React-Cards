// src/students.ts


export interface Student {
  name: string;
  time: string;
  github: string;
  photo: string; 
}

export const students: Student[] = [
  {
    name: "Levi Luz Sousa",
    time: "Ciência da Computação",
    github: "https://github.com/livaibrr",
    photo: "/images/levi.png" 
  },

  {
    name: "Yara Fernandes Ribeiro",
    time: "Engenharia de Software",
    github: "https://github.com/Yarafr",
    photo: "/images/yara.png" 
  },
  {
    name: "João Pedro A. de Carvalho",
    time: "Engenharia de Software",
    github: "https://github.com/trodat3",
    photo: "/images/joao.jpg" 
  },
];