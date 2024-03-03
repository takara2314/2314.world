import { type ReactNode, useEffect, useState } from 'react';
import RandomColorGrass from './RandomColorGrass';
import RandomColorStone from './RandomColorStone';
import world from './world.json';

export default function Ground() {
  const [groundBlocks, setGroundBlocks] = useState<
    ReactNode[]
  >([]);

  useEffect(() => {
    const blocks: ReactNode[] = [];
    const offset: number[] = [0, -30, 0];

    for (const y in world.area) {
      for (const x in world.area[y].hit) {
        for (const z in world.area[y].hit[x]) {
          if (world.area[y].hit[x][z]) {
            const factX: number =
              Number(x) -
              Math.floor(world.area[y].hit.length / 2) +
              offset[0];

            const factY: number = Number(y) + offset[1];

            const factZ: number =
              Number(z) -
              Math.floor(world.area[y].hit[x].length / 2) +
              offset[2];

            if (world.area[y].block === 'grass') {
              blocks.push(
                <RandomColorGrass
                  x={factX}
                  y={factY}
                  z={factZ}
                  key={
                    Number(x) * 10000 +
                    Number(y) * 100 +
                    Number(z)
                  }
                />,
              );
            } else if (world.area[y].block === 'stone') {
              blocks.push(
                <RandomColorStone
                  x={factX}
                  y={factY}
                  z={factZ}
                  key={
                    Number(x) * 10000 +
                    Number(y) * 100 +
                    Number(z)
                  }
                />,
              );
            }
          }
        }
      }
    }

    setGroundBlocks(blocks);
  }, []);

  return groundBlocks;
}
