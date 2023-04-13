import type { TinaField } from "tinacms";
export function autheurFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Nom du groupe",
    },
    {
      type: "string",
      name: "titleColor",
      label: "Couleur du titre",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "image",
      name: "bg_image",
      label: "Image de Background",
    },
    {
      type: "object",
      name: "social",
      label: "Reseaux Sociaux",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "link",
          label: "Lien",
        },
      ],
    },
    {
      type: "object",
      name: "divers",
      label: "Galerie de videos",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Affichage",
        },
        {
          type: "string",
          name: "titre",
          label: "Titre",
        },
        {
          type: "object",
          name: "videos",
          label: "Videos",
          list: true,
          fields: [
            {
              type: "string",
              name: "custom_id",
              nameOverride: "id",
              label: "Id de la video",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "picture",
      label: "Galerie de Photos",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Affichage",
        },
        {
          type: "string",
          name: "titre",
          label: "Titre",
        },
        {
          type: "object",
          name: "images",
          label: "Galeries",
          list: true,
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function config_siteFields() {
  return [
    {
      type: "string",
      name: "baseURL",
      label: "baseURL",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "timeZone",
      label: "timeZone",
    },
    {
      type: "string",
      name: "paginate",
      label: "paginate",
    },
    {
      type: "string",
      name: "summaryLength",
      label: "summaryLength",
    },
    {
      type: "string",
      name: "googleAnalytics",
      label: "googleAnalytics",
    },
    {
      type: "string",
      name: "disqusShortname",
      label: "disqusShortname",
    },
    {
      type: "string",
      name: "defaultContentLanguage",
      label: "defaultContentLanguage",
    },
    {
      type: "string",
      name: "disableLanguages",
      label: "disableLanguages",
      list: true,
    },
    {
      type: "boolean",
      name: "hasCJKLanguage",
      label: "hasCJKLanguage",
    },
    {
      type: "object",
      name: "module",
      label: "module",
      fields: [
        {
          type: "object",
          name: "hugoVersion",
          label: "hugoVersion",
          fields: [
            {
              type: "boolean",
              name: "extended",
              label: "extended",
            },
            {
              type: "string",
              name: "min",
              label: "min",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "outputs",
      label: "outputs",
      fields: [
        {
          type: "string",
          name: "home",
          label: "home",
          list: true,
        },
      ],
    },
    {
      type: "object",
      name: "imaging",
      label: "imaging",
      fields: [
        {
          type: "number",
          name: "quality",
          label: "quality",
        },
      ],
    },
    {
      type: "object",
      name: "caches",
      label: "caches",
      fields: [
        {
          type: "object",
          name: "images",
          label: "images",
          fields: [
            {
              type: "string",
              name: "dir",
              label: "dir",
            },
            {
              type: "string",
              name: "maxAge",
              label: "maxAge",
            },
          ],
        },
        {
          type: "object",
          name: "assets",
          label: "assets",
          fields: [
            {
              type: "string",
              name: "dir",
              label: "dir",
            },
            {
              type: "string",
              name: "maxAge",
              label: "maxAge",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "markup",
      label: "markup",
      fields: [
        {
          type: "object",
          name: "goldmark",
          label: "goldmark",
          fields: [
            {
              type: "object",
              name: "renderer",
              label: "renderer",
              fields: [
                {
                  type: "boolean",
                  name: "unsafe",
                  label: "unsafe",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "tableOfContents",
          label: "tableOfContents",
          fields: [
            {
              type: "number",
              name: "startLevel",
              label: "startLevel",
            },
            {
              type: "number",
              name: "endLevel",
              label: "endLevel",
            },
            {
              type: "boolean",
              name: "ordered",
              label: "ordered",
            },
          ],
        },
        {
          type: "object",
          name: "highlight",
          label: "highlight",
          fields: [
            {
              type: "string",
              name: "style",
              label: "style",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "mediaTypes",
      label: "mediaTypes",
      fields: [
        {
          type: "object",
          name: "application_manifest_json",
          nameOverride: "application/manifest+json",
          label: "application/manifest+json",
          fields: [
            {
              type: "string",
              name: "suffixes",
              label: "suffixes",
              list: true,
            },
          ],
        },
        {
          type: "object",
          name: "text_netlify",
          nameOverride: "text/netlify",
          label: "text/netlify",
          fields: [
            {
              type: "string",
              name: "delimiter",
              label: "delimiter",
            },
            {
              type: "string",
              name: "suffixes",
              label: "suffixes",
              list: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "outputFormats",
      label: "outputFormats",
      fields: [
        {
          type: "object",
          name: "WebAppManifest",
          label: "WebAppManifest",
          fields: [
            {
              type: "string",
              name: "mediaType",
              label: "mediaType",
            },
            {
              type: "string",
              name: "rel",
              label: "rel",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function configuration_gFields() {
  return [
    {
      type: "string",
      name: "baseURL",
      label: "baseURL",
    },
    {
      type: "string",
      name: "languageCode",
      label: "languageCode",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "object",
      name: "module",
      label: "module",
      fields: [
        {
          type: "object",
          name: "imports",
          label: "imports",
          list: true,
          fields: [
            {
              type: "boolean",
              name: "disable",
              label: "disable",
            },
            {
              type: "string",
              name: "path",
              label: "path",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "params",
      label: "params",
      fields: [
        {
          type: "object",
          name: "plugins",
          label: "plugins",
          fields: [
            {
              type: "object",
              name: "css",
              label: "css",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
            {
              type: "object",
              name: "js",
              label: "js",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "variables",
          label: "variables",
          fields: [
            {
              type: "string",
              name: "black",
              label: "black",
            },
            {
              type: "string",
              name: "body_color",
              label: "body_color",
            },
            {
              type: "string",
              name: "border_color",
              label: "border_color",
            },
            {
              type: "string",
              name: "color_overlay",
              label: "color_overlay",
            },
            {
              type: "string",
              name: "color_primary",
              label: "color_primary",
            },
            {
              type: "string",
              name: "color_secondary",
              label: "color_secondary",
            },
            {
              type: "string",
              name: "color_third",
              label: "color_third",
            },
            {
              type: "string",
              name: "font_icon",
              label: "font_icon",
            },
            {
              type: "string",
              name: "font_primary",
              label: "font_primary",
            },
            {
              type: "string",
              name: "font_primary_type",
              label: "font_primary_type",
            },
            {
              type: "string",
              name: "font_scale",
              label: "font_scale",
            },
            {
              type: "string",
              name: "font_secondary",
              label: "font_secondary",
            },
            {
              type: "string",
              name: "font_secondary_type",
              label: "font_secondary_type",
            },
            {
              type: "string",
              name: "font_size",
              label: "font_size",
            },
            {
              type: "string",
              name: "footer",
              label: "footer",
            },
            {
              type: "string",
              name: "green",
              label: "green",
            },
            {
              type: "string",
              name: "light",
              label: "light",
            },
            {
              type: "string",
              name: "text_color",
              label: "text_color",
            },
            {
              type: "string",
              name: "text_dark",
              label: "text_dark",
            },
            {
              type: "string",
              name: "text_light",
              label: "text_light",
            },
            {
              type: "string",
              name: "white",
              label: "white",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function indexFields() {
  return [
    {
      type: "object",
      name: "slider",
      label: "Section Carrousel",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Affichage",
        },
        {
          type: "object",
          name: "images",
          label: "Carrousel images",
          list: true,
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
            },
            {
              type: "string",
              name: "titre",
              label: "Titre",
            },
            {
              type: "string",
              name: "titreColor",
              label: "Couleur Titre",
              ui: {
                component: "color",
              },
            },
            {
              type: "string",
              name: "texte",
              label: "texte",
            },
            {
              type: "string",
              name: "texteColor",
              label: "Couleur Description",
              ui: {
                component: "color",
              },
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "event",
      label: "Section Evénements",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Affichage",
        },
        {
          type: "string",
          name: "titre",
          label: "Titre",
        },
        {
          type: "object",
          name: "evenements",
          label: "evenements",
          list: true,
          fields: [
            {
              type: "datetime",
              name: "date",
              label: "Date",
              required: true,
            },
            {
              type: "string",
              name: "nom",
              label: "Nom du groupe",
              required: true,
            },
            {
              type: "string",
              name: "titre",
              label: "Titre de l'événement",
              required: true,
            },
            {
              type: "string",
              name: "texte",
              label: "Description de l'événement",
              ui: {
                component: "textarea",
              },
              required: true,
            },
            {
              type: "image",
              name: "image",
              label: "Image",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "food",
      label: "Section Menus",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Affichage",
        },
        {
          type: "string",
          name: "titre",
          label: "Titre de section",
        },
        {
          type: "object",
          name: "menus",
          label: "Un Menu",
          list: true,
          fields: [
            {
              type: "string",
              name: "titre",
              label: "Titre du menu",
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "object",
              name: "sous_menus",
              label: "Sous menu",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "nom_fr",
                  label: "Nom FR",
                },
                {
                  type: "string",
                  name: "nom_en",
                  label: "Nom EN ",
                },
                {
                  type: "object",
                  name: "pricing_item",
                  label: "Item sur le menu",
                  list: true,
                  fields: [
                    {
                      type: "string",
                      name: "titre_fr",
                      label: "Nom du plat FR",
                    },
                    {
                      type: "string",
                      name: "titre_en",
                      label: "Nom du plat EN",
                    },
                    {
                      type: "boolean",
                      name: "enable",
                      label: "Afficher",
                    },
                    {
                      type: "string",
                      name: "description_fr",
                      label: "Les ingredients FR",
                      ui: {
                        component: "textarea",
                      },
                    },
                    {
                      type: "string",
                      name: "description_en",
                      label: "Les ingredients En",
                    },
                    {
                      type: "string",
                      name: "prix",
                      label: "Le prix",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "insta",
      label: "Instagram",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Affichage",
        },
        {
          type: "string",
          name: "titre",
          label: "Titre de section",
        },
        {
          type: "string",
          name: "custom_id",
          nameOverride: "id",
          label: "Identifiant Behold",
        },
      ],
    },
    {
      type: "object",
      name: "fork",
      label: "The Forks",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Afficher",
        },
      ],
    },
    {
      type: "object",
      name: "pub",
      label: "Publicité",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Afficher",
        },
        {
          type: "object",
          name: "pubs",
          label: "Commerce",
          list: true,
          fields: [
            {
              type: "string",
              name: "titre",
              label: "Titre",
            },
            {
              type: "string",
              name: "lien",
              label: "Url",
            },
            {
              type: "image",
              name: "image",
              label: "Image",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function pramFields() {
  return [
    {
      type: "boolean",
      name: "address_descriptors",
      label: "address_descriptors",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "copyright",
      label: "copyright",
    },
    {
      type: "string",
      name: "custom_script",
      label: "custom_script",
    },
    {
      type: "image",
      name: "favicon",
      label: "favicon",
    },
    {
      type: "string",
      name: "google_tag_manager",
      label: "google_tag_manager",
    },
    {
      type: "string",
      name: "keywords",
      label: "keywords",
    },
    {
      type: "string",
      name: "location",
      label: "location",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "boolean",
      name: "navbar_fixed",
      label: "navbar_fixed",
    },
    {
      type: "string",
      name: "phoneRestaurant",
      label: "Restaurant phone",
    },
    {
      type: "string",
      name: "phonePizza",
      label: "Pizza Phone",
    },
    {
      type: "object",
      name: "baidu",
      label: "baidu",
      fields: [
        {
          type: "string",
          name: "analytics_id",
          label: "analytics_id",
        },
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "contact",
      fields: [
        {
          type: "object",
          name: "form",
          label: "form",
          fields: [
            {
              type: "string",
              name: "action",
              label: "action",
            },
            {
              type: "boolean",
              name: "enable",
              label: "enable",
            },
            {
              type: "image",
              name: "success_image",
              label: "success_image",
            },
            {
              type: "boolean",
              name: "use_netlify",
              label: "use_netlify",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "cookies",
      label: "cookies",
      fields: [
        {
          type: "string",
          name: "button",
          label: "button",
        },
        {
          type: "string",
          name: "content",
          label: "content",
        },
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "number",
          name: "expire_days",
          label: "expire_days",
        },
      ],
    },
    {
      type: "object",
      name: "counter",
      label: "counter",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "username",
          label: "username",
        },
      ],
    },
    {
      type: "object",
      name: "gmap",
      label: "gmap",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "gmap_api",
          label: "gmap_api",
        },
        {
          type: "string",
          name: "map_latitude",
          label: "map_latitude",
        },
        {
          type: "string",
          name: "map_longitude",
          label: "map_longitude",
        },
        {
          type: "image",
          name: "map_marker",
          label: "map_marker",
        },
      ],
    },
    {
      type: "object",
      name: "matomo",
      label: "matomo",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "custom_id",
          nameOverride: "id",
          label: "id",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
    {
      type: "object",
      name: "navigation_button",
      label: "navigation_button",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "label",
          label: "label",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "osm",
      label: "osm",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "map",
          label: "map",
        },
      ],
    },
    {
      type: "object",
      name: "plausible",
      label: "plausible",
      fields: [
        {
          type: "string",
          name: "domain",
          label: "domain",
        },
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
      ],
    },
    {
      type: "object",
      name: "preloader",
      label: "preloader",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "preloader",
          label: "preloader",
        },
      ],
    },
    {
      type: "object",
      name: "site_verification",
      label: "site_verification",
      fields: [
        {
          type: "string",
          name: "baidu",
          label: "baidu",
        },
        {
          type: "string",
          name: "bing",
          label: "bing",
        },
        {
          type: "string",
          name: "google",
          label: "google",
        },
      ],
    },
    {
      type: "object",
      name: "widgets",
      label: "widgets",
      fields: [
        {
          type: "string",
          name: "sidebar",
          label: "sidebar",
          list: true,
        },
      ],
    },
  ] as TinaField[];
}
