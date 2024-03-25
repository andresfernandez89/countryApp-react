import WorldSvg from "../assets/globe-world.svg";
export const Home = () => {
  return (
    <div className="grid grid-cols-2 rounded bg-neutral p-2 md:p-5">
      <section className="bg-base-100 pb-[25px] pl-[23px] pr-[25px] pt-[30px]">
        La Tierra alberga 195 países soberanos, cada uno con su propia historia,
        cultura, geografía y desafíos únicos. Desde microestados como Mónaco
        hasta gigantes como Rusia, cada nación aporta algo diferente al tapiz
        global. Algunos países son potencias económicas, mientras que otros
        luchan por el desarrollo. Algunos disfrutan de una paz duradera,
        mientras que otros enfrentan conflictos y agitación. La diversidad de
        idiomas, religiones, tradiciones y formas de vida es asombrosa. En lugar
        de intentar un resumen superficial, es mejor explorar paííses
        específicos o regiones que te interesen. Cada nación tiene una historia
        que contar, y vale la pena dedicar tiempo a escucharla.
      </section>
      <img src={WorldSvg} />
    </div>
  );
};
