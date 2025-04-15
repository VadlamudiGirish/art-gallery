import CardList from "@/components/CardList/CardList";
import useSWR from "swr";

export default function Spotlight({ element }) {
  return <CardList elements={[element]} elementName={"art-piece"} />;
}
