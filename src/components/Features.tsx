import { FeatureCard } from "./ui/feature-card";
import { Highlighted } from "./ui/highlighted";
import dashboardExample from "../assets/images/dashboard-example.png";

export const Features = () => {
  return (
    <section className="w-full mt-20 mb-24" id="features">
      <div className="mb-14">
        <FeatureCard
          subtitle="Klijenti"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          title={
            <span>
              Dodaj <Highlighted>neograničen</Highlighted> broj klijenata
            </span>
          }
          description="Pristupi podacima svojih klijenata uvek kada ti zatrebaju."
          image={<img src={dashboardExample} alt="f1" />}
        />
      </div>

      <div className="mb-14">
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          }
          subtitle="Slučajevi"
          title={
            <span>
              <Highlighted>Svi slučajevi</Highlighted> na jednom mestu
            </span>
          }
          description="Dobijaj obaveštenja kada se objavi odluka suda vezana za tvoj predmet kako bi uvek bio u toku sa dešavanjima."
          image={<img src={dashboardExample} alt="f1" />}
        />
      </div>

      <div className="mb-14">
        <FeatureCard
          subtitle="Raspored"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          }
          title={
            <span>
              Kreiraj svoj <Highlighted>raspored</Highlighted> obaveza
            </span>
          }
          description="Raspored je automatski povezan sa tvojim slučajevima tako da možeš da vidis istorijat sudjenja i ročista za svaki slučaj."
          image={<img src={dashboardExample} alt="f1" />}
        />
      </div>
      <div className="mb-14">
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
          }
          subtitle="Dokumenta"
          title={
            <span>
              Dokumenta koja su <Highlighted>uvek</Highlighted> na raspolaganju
            </span>
          }
          description="Kada kreneš na sudjenje sve što je potrebno je tvoj laptop ili telefon i internet konekcija."
          image={<img src={dashboardExample} alt="f1" />}
        />
      </div>
      <div>
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          subtitle="Finansije"
          title={
            <span>
              Stekni <Highlighted>uvid</Highlighted> u svoje finansije
            </span>
          }
          description="Izdaj račune automatski na osnovu svog cenovnika ili na osnovu jedinstvene cene i prati dugovanja i naplate klijenata."
          image={<img src={dashboardExample} alt="f1" />}
        />
      </div>
    </section>
  );
};
