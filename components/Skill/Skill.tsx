import Image from 'next/image';
import {
  ApolloIcon,
  DockerIcon,
  GraphqlIcon,
  ReactIcon,
  SassIcon,
  TypescriptIcon,
  NodejsIcon,
} from '../../icons';

import classes from './Skill.module.css';

export enum Skills {
  APOLLO = 'apollo',
  DOCKER = 'docker',
  GRAPHQL = 'graphql',
  REACT = 'react',
  SASS = 'sass',
  TYPESCRIPT = 'typescript',
  NODEJS = 'nodejs',
}

type SkillType = Record<Skills, StaticImageData>;

const skills: SkillType = {
  [Skills.APOLLO]: ApolloIcon,
  [Skills.DOCKER]: DockerIcon,
  [Skills.GRAPHQL]: GraphqlIcon,
  [Skills.REACT]: ReactIcon,
  [Skills.SASS]: SassIcon,
  [Skills.TYPESCRIPT]: TypescriptIcon,
  [Skills.NODEJS]: NodejsIcon,
}

export default function Skill({ name }: { name: Skills }) {
  return (
    <div className={classes.skill}>
      <div className={classes.skill__wrapper}>
        <Image layout='fill' src={skills[name]} alt="skill" />
      </div>
    </div>
  );
}
