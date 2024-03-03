import Block from './Block';

interface Props {
  x: number;
  y: number;
  z: number;
}

export default function RandomColorGrass({
  x,
  y,
  z,
}: Props) {
  return (
    <Block x={x} y={y} z={z} color={chooseGrassColor()} />
  );
}

export function chooseGrassColor(): string {
  const colors = ['rgb(0, 255, 127)', 'rgb(0, 191, 95)'];

  return Math.random() >= 0.5 ? colors[0] : colors[1];
}
