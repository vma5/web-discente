
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home() {

  const appDirectory = path.join(process.cwd(), 'app');

  // Filtra os diretórios que têm uma página `page.tsx` dentro
  const routes = fs
    .readdirSync(appDirectory, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        fs.existsSync(path.join(appDirectory, dirent.name, 'page.tsx'))
    )
    .map((dirent) => dirent.name);

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20  sm:p-20  ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span>Alunos WEB  <a href="https://www.ifnmg.edu.br/cursos-sal1/cursos-superiores/373-portal/salinas/salinas-cursos-superiores/bacharelado-em-sistemas-de-informacao/14671-bacharelado-em-sistemas-de-informacao">BSI IFNMG <i>Campus</i> Salinas</a>.</span>
        <Link href="https://github.com/arthurfporto">Professor &#128073; Arthur Faria Porto</Link>

        <h1 className='text-xl'>DISCENTES &#128071;</h1>
        <ul>
          {routes.map((route) => (
            <li key={route}>
              <Link href={`/${route}`}>{route}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

