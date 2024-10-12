import { ActionPoints } from "./actionPoints";
import { AssetClasses } from "./assetClasses";
import { Brands } from "./brands";
import { DownloadApp } from "./downloadApp";
import { HeroSection } from "./hero";
import { JoinCommunity } from "./joinCommunity";
import { Regulation } from "./regulation";
import { SaveFuture } from "./saveFuture";
import { Testimonials } from "./testimonials";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <Brands />
      <ActionPoints />
      <AssetClasses />
      <SaveFuture />
      <Regulation />
      <Testimonials />
      <JoinCommunity />
      <DownloadApp />
    </>
  );
};

export { HomeUI };
