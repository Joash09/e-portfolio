import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  BlogPosts: BlogPost[] = [
    { id: 'WebAssembly', title: 'Porting my Lisp interpreter (written in C) to Webassembly', date: '02-08-2022', thumbnail: 'webassembly.png' },
    { id: 'KernelManagement', title: 'Managing multiple linux kernel configurations', date: '30-07-2022', thumbnail: 'kernel.jpg' },
    { id: 'ChrootAndNspawn', title: 'Chroot jail and systemd-nspawn containers', date: '11-07-2022', thumbnail: 'jail.jpg' },
    { id: 'DeployStaticSite', title: 'How I deployed this website', date: '11-07-2022', thumbnail: 'website.jpg' },
    { id: 'PostgreSQLEnum', title: 'PostgreSQL Enums', date: '24-07-2022', thumbnail: 'postgres.jpg'},
    { id: 'NLayerApplications', title: 'N-Layer application design with an object-relational mapper', date: '09-09-2021', thumbnail: 'objectmapping.jpg' },
    { id: 'Microblaze', title: 'Microblaze softcore on Arty A7', date: '09-09-2021', thumbnail: 'microblaze.png' },
    { id: 'DockerDevelopmentEnvironment', title: 'Docker as a development environment', date: '09-09-2021', thumbnail: 'docker.jpg' },
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
