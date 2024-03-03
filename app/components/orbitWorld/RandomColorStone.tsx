import Block from './Block';

interface Props {
  x: number;
  y: number;
  z: number;
}

export default function RandomColorStone({
  x,
  y,
  z,
}: Props) {
  return (
    <Block x={x} y={y} z={z} color={chooseStoneColor()} />
  );
}

export function chooseStoneColor(): string {
  const colors = [
    'rgb(150, 150, 150)',
    'rgb(140, 140, 140)',
  ];

  return Math.random() >= 0.5 ? colors[0] : colors[1];
}
