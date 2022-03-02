import Image from 'next/image';
import {
  ApolloIcon,
  DockerIcon,
  GraphqlIcon,
  ReactIcon,
  SassIcon,
  TypescriptIcon
} from '../../icons';

import classes from './Skill.module.css';

export enum Skills {
  APOLLO = 'apollo',
  DOCKER = 'docker',
  GRAPHQL = 'graphql',
  REACT = 'react',
  SASS = 'sass',
  TYPESCRIPT = 'typescript',
}

type SkillType = Record<Skills, StaticImageData>;

const skills: SkillType = {
  [Skills.APOLLO]: ApolloIcon,
  [Skills.DOCKER]: DockerIcon,
  [Skills.GRAPHQL]: GraphqlIcon,
  [Skills.REACT]: ReactIcon,
  [Skills.SASS]: SassIcon,
  [Skills.TYPESCRIPT]: TypescriptIcon,
}

export default function Skill({ name }: { name: Skills }) {
  return (
    <div className={classes.skill}>
      <Image width={64} height={64} src={skills[name]} alt="skill" />
    </div>
  );
}
