import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const authMessages = (
    await import(
      `../../src/app/[locale]/(auth)/_lib/translations/${locale}.json`
    )
  ).default;

  return {
    locale,
    messages: {
      ...authMessages,
    },
  };
});
