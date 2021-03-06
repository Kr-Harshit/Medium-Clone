import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// Set up client for fetching dat ain the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset
 * reference data in your documents
 **/
export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);

// Helper function for using the Current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
