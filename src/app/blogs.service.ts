import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  BlogPosts: BlogPost[] = [
    { id: 'WebAssembly', title: 'Porting my Lisp Interpreter (written in C) to Webassembly', date: '02-08-2022', thumbnail: 'webassembly.png' },
    { id: 'MultipleKernels', title: 'Managing Multiple Linux Kernel Configurations', date: '30-07-2022', thumbnail: 'kernel.jpg' },
    { id: 'Chroot', title: 'Chroot jail and systemd-nspawn containers', date: '11-07-2022', thumbnail: 'jail.jpg' },
    { id: 'DeploySite', title: 'How I deployed this website', date: '11-07-2022', thumbnail: 'website.jpg' },
    { id: 'PostgresSQLEnum', title: 'PostgreSQL Enums', date: '24-07-2022', thumbnail: 'postgres.jpg'},
    { id: 'ORM', title: 'Working with ORM, DB Migrations and Repository Patterns', date: '09-09-2021', thumbnail: 'objectmapping.jpg' },
    { id: 'Microblaze', title: 'Microblaze softcore on Arty A7', date: '09-09-2021', thumbnail: 'microblaze.png' },
    { id: 'Docker', title: 'Docker for development', date: '09-09-2021', thumbnail: 'docker.jpg' },
    { id: 'AddSwagger', title: 'Adding SwaggerUI to ASP.NET Core', date: '31-07-2021', thumbnail: 'swagger.png' },
    { id: 'IPFS', title: 'A decentralized web', date: '31-07-2021', thumbnail: 'ipfs.png' },
    { id: 'Fallacies', title: 'Identifying my biases and fallacies', date: '10-04-2021', thumbnail: 'thinking.jpg' },
    { id: 'Bonds', title: 'What I learnt about financial bonds', date: '05-04-2021', thumbnail: 'bond.jpg' },
  ];

  constructor() { }

}

export interface BlogPost {
  id: string,
  title: string,
  date: string,
  thumbnail: string, // path to thumbnail
}
