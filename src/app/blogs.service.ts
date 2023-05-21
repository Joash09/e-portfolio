import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  BlogPosts: BlogPost[] = [
    {
      id: 'Containers',
      title: 'Application sandboxes. From chroot jail to Firejail',
      date: '18-05-2023',
      thumbnail: 'jail.jpg',
      description: 'Investigating a first principals approach to containers with chroot and systemd-nspawn tools',
      keywords: ['chroot', 'jail', 'systemd-nspawn', 'containers', 'Linux', 'Kernel namespace', 'Firejail', 'iptables', 'firewall', 'networking', 'bridge', 'systemd networkd', 'Xephyr', 'Xorg']
    },
    {
      id: 'NetworkingOverview',
      title: 'Understanding networking through the OSI model',
      date: '23-01-2023',
      thumbnail: 'osi_model.jpg',
      description: 'What is the OSI model and how does it work. Discussion of the physical, data, network, transport and application layers.',
      keywords: ['OSI', 'networking', 'TCP', 'IP', 'UDP', 'gateway', 'switch', 'LAN', 'Internet']
    },
    {
      id: 'EverythingIKnowAboutETFs',
      title: 'Everything I know about ETFs (so far)',
      date: '19-12-2022',
      thumbnail: 'etf.jpg',
      description: 'Discussing the history, pros and cons of passive investing with ETFs',
      keywords: ['passive', 'investing', 'ETFs', 'active', 'finance', 'grossman-stigletz paradox', 'ETF bubble', 'electronically traded funds']
    },
    {
      id: 'KernelDevelopment',
      title: 'Documenting the process of making my first Linux kernel contribution',
      date: '17-09-2022',
      thumbnail: 'Tux.png',
      description: 'Learning the process of finding work to be done on the Linux kernel and submittong patches to the community',
      keywords: ['Linux kernel', 'C Programming Language', 'Drivers', 'Git', 'Gmail', 'Programming collaboration']
    },
    {
      id: 'WebAssembly',
      title: 'Porting my Lisp interpreter (written in C) to Webassembly',
      date: '02-08-2022',
      thumbnail: 'webassembly.png',
      description: 'Learning how to port a Lisp interpreter, wriiten in C, to Webassembly in Angular',
      keywords: ['WebAssembly', 'WASM', 'Emscripten', 'Angular', 'Lisp', 'C']
    },
    {
      id: 'KernelManagement',
      title: 'Managing multiple Linux kernel configurations',
      date: '30-07-2022',
      thumbnail: 'kernel.jpg',
      description: 'Learning how to update the kernel and create a second configuration for managing NVIDIA drivers with GRUB2 bootloader templates',
      keywords: ['Linux', 'Linux kernel', 'NVIDIA drivers', 'Gentoo', 'systemd', 'modprobe', 'kernel modules', 'GRUB2', 'GRUB2 configuration', 'graphics switching', 'multiple Linux kernels', 'kernel paramters']
    },
    {
      id: 'DeployStaticSite',
      title: 'How I deployed this website with server side rendering',
      date: '11-07-2022',
      thumbnail: 'website.jpg',
      description: 'Learning best practises for deploying an Angular website with Azure\'s static cloud storage solution',
      keywords: ['Angular', 'Azure', 'Webpack analyzer', 'Server side rendering', 'Google Domains']
    },
    {
      id: 'PostgreSQLEnum',
      title: 'PostgreSQL Enums',
      date: '24-07-2022',
      thumbnail: 'postgres.jpg',
      description: 'A look into PostgreSQL\'s enums feature and how migrate using Microsoft EntityFramework Core',
      keywords: ['Enums', 'Database', 'PostgreSQL', 'EntityFramework Core']
    },
    {
      id: 'NLayerApplications',
      title: 'N-Layer application design with an object-relational mapper',
      date: '09-09-2021',
      thumbnail: 'objectmapping.jpg',
      description: 'A guide on how to build a N-layer application from scratch with ASP.NET Core',
      keywords: ['N Layer Application', 'Application Design', 'Backend design', 'Object Relational Mapper', 'EntityFramework Core', 'AutoMapper', 'ASP.NET', 'Data hiding', 'Data Transfer Objects']
    },
    {
      id: 'Microblaze',
      title: 'Microblaze softcore on Arty A7',
      date: '09-09-2021',
      thumbnail: 'microblaze.png',
      description: 'A brief overview on how to deploy a Microblaze software to ArtyA7 FPGA development board',
      keywords: ['FPGA', 'Xilinx', 'Vivado', 'Microblaze', 'softcore processor']
    },
    {
      id: 'DockerDevelopmentEnvironment',
      title: 'Docker as a development environment',
      date: '09-09-2021',
      thumbnail: 'docker.jpg',
      description: 'Quick look on how to use Docker based development tools',
      keywords: ['Docker', 'GHDL', 'Docker volumes']
    },
    {
      id: 'IPFS',
      title: 'Exploring a decentralized web with the Interplanetary File System',
      date: '31-07-2021',
      thumbnail: 'ipfs.png',
      description: 'A quick look on get started with IPFS and deploy an Angular app to the decentralized network',
      keywords: ['Interplanetary File System', 'IPFS', 'Angular', 'Decentralized']
    },
    {
      id: 'Fallacies',
      title: 'Identifying my biases and fallacies',
      date: '10-04-2021',
      thumbnail: 'thinking.jpg',
      description: 'Identifying biases and logical fallacies I often fall prey to',
      keywords: ['Fallacies', 'Bias']
    },
    {
      id: 'Bonds',
      title: 'What I learnt about financial bonds',
      date: '05-04-2021',
      thumbnail: 'bond.jpg',
      description: 'Short summary on how financial bonds work and their relation to interest rates',
      keywords: ['Financial', 'Bonds', 'Interest rates', 'Assets', 'Liabilites']
    },
  ];

  constructor() { }

}

export interface BlogPost {
  id: string,
  title: string,
  date: string,
  thumbnail: string, // path to thumbnail
  description: string,
  keywords: string[]
}

export interface MetaTag {
  name: string,
  content: string
}
