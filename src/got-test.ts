import * as got from "got";

// HIBP breach interface.
interface IBreach {
  AddedDate: Date;
  BreachDate: Date;
  DataClasses: string[];
  Description: string;
  Domain: string;
  IsFabricated: boolean;
  IsRetired: boolean;
  IsSensitive: boolean;
  IsSpamList: boolean;
  IsVerified: boolean;
  LogoPath: string;
  ModifiedDate: Date;
  Name: string;
  PwnCount: number;
  Title: string;
}

main();

async function main(): Promise<IBreach[]> {
  const res: got.Response<object> = await got.get("https://haveibeenpwned.com/api/v2/breaches", {
    json: true,
  });
  const body: IBreach[] = res.body as IBreach[];
  console.log(body.length);
  return body;
}
