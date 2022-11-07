import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesList = [
  {
    href: "https://www.leagueoflegends.com/pt-br/",
    imageSrc: "https://static-cdn.jtvnw.net/ttv-boxart/21779-272x380.jpg",
    alt: "League of Legends",
  },
  {
    href: "https://overwatch.blizzard.com/pt-br/",
    imageSrc:
      "https://image.api.playstation.com/vulcan/ap/rnd/202210/0213/iVhWnqD0Km2DXlpJKPooE7Sa.jpg",
    alt: "Overwatch 2",
  },
];

const streamersList = [
  {
    href: "https://www.twitch.tv/keiozin",
    imageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/81c6a1ab-1651-43d5-87a6-de8fe404c5d2-profile_image-300x300.png",
    alt: "Keio",
  },

  {
    href: "https://www.twitch.tv/rangerlol1",
    imageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c72d02fc-3921-4cb3-8208-51983894b3e8-profile_image-300x300.png",
    alt: "Ranger",
  },

  {
    href: "https://www.twitch.tv/kennzy",
    imageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/b417a2df-b224-4869-adc6-61951b5f0d9a-profile_image-300x300.png",
    alt: "Kennzy",
  },

  {
    href: "https://www.twitch.tv/tarzaned",
    imageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/ac27079a-9f80-45ec-81b0-979893c777a0-profile_image-300x300.png",
    alt: "Tarzaned",
  },
];

const socialLinksList = [
  {
    href: "https://github.com/edusmpaio",
    imageSrc: "/images/GithubLogo.svg",
    alt: "Logo Github",
  },

  {
    href: "https://twitter.com/fvsyre",
    imageSrc: "/images/TwitterLogo.svg",
    alt: "Logo Twitter",
  },

  {
    href: "https://www.instagram.com/dusmpaio/",
    imageSrc: "/images/InstagramLogo.svg",
    alt: "Logo Instagram",
  },

  {
    href: "https://www.youtube.com/",
    imageSrc: "/images/LinkedinLogo.svg",
    alt: "Logo Linkedin",
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesList.map((item) => {
            return (
              <ListItem
                href={item.href}
                imageSrc={item.imageSrc}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="streamers-list"
        >
          {streamersList.map((item) => {
            return (
              <ListItem
                href={item.href}
                imageSrc={item.imageSrc}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialLinksList.map((item) => {
            return (
              <ListItem
                href={item.href}
                imageSrc={item.imageSrc}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
