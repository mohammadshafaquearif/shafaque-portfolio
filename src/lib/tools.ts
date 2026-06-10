/** Devicon paths: folder/variant — colored SVGs from devicons CDN */
const DEVICON_MAP: Record<string, string> = {
  react: 'react/react-original',
  'react.js': 'react/react-original',
  node: 'nodejs/nodejs-original',
  'node.js': 'nodejs/nodejs-original',
  javascript: 'javascript/javascript-original',
  typescript: 'typescript/typescript-original',
  java: 'java/java-original',
  mern: 'react/react-original',
  'mern stack': 'react/react-original',
  express: 'express/express-original',
  'express.js': 'express/express-original',
  'socket.io': 'socketio/socketio-original',
  socketio: 'socketio/socketio-original',
  docker: 'docker/docker-original',
  kubernetes: 'kubernetes/kubernetes-plain',
  k8s: 'kubernetes/kubernetes-plain',
  jenkins: 'jenkins/jenkins-original',
  'argo cd': 'argocd/argocd-original',
  argocd: 'argocd/argocd-original',
  helm: 'helm/helm-original',
  'ci/cd': 'githubactions/githubactions-original',
  cicd: 'githubactions/githubactions-original',
  'github actions': 'githubactions/githubactions-original',
  terraform: 'terraform/terraform-original',
  aws: 'amazonwebservices/amazonwebservices-plain-wordmark',
  'amazon web services': 'amazonwebservices/amazonwebservices-plain-wordmark',
  linux: 'linux/linux-original',
  github: 'github/github-original',
  'git & github': 'github/github-original',
  git: 'git/git-original',
  sonarqube: 'sonarqube/sonarqube-original',
  mongodb: 'mongodb/mongodb-original',
  'tailwind css': 'tailwindcss/tailwindcss-plain',
  tailwind: 'tailwindcss/tailwindcss-plain',
  'three.js': 'threejs/threejs-original',
  threejs: 'threejs/threejs-original',
  netlify: 'netlify/netlify-original',
  cloudinary: 'cloudinary/cloudinary-original',
  oracle: 'oracle/oracle-original',
  postgresql: 'postgresql/postgresql-original',
  mysql: 'mysql/mysql-original',
  redis: 'redis/redis-original',
  nginx: 'nginx/nginx-original',
  prometheus: 'prometheus/prometheus-original',
  grafana: 'grafana/grafana-original',
  python: 'python/python-original',
};

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export function getToolSlug(name: string): string | null {
  const key = name.trim().toLowerCase();
  return DEVICON_MAP[key] ?? null;
}

export function getToolIconUrl(name: string): string {
  const path = getToolSlug(name);
  if (path) return `${DEVICON_BASE}/${path}.svg`;
  return '';
}

export function hasToolIcon(name: string): boolean {
  return getToolSlug(name) !== null;
}
