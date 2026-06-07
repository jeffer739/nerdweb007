// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/nerdweb007/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nerdweb007/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nerdweb007/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Chuks Clinton — Penetration Tester | Web Application Security",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nerdweb007/cv/";
          },
        },{id: "post-road",
        
          title: "Road",
        
        description: "Road writeup",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/road/";
          
        },
      },{id: "post-pico-walkthrough",
        
          title: "Pico Walkthrough",
        
        description: "PicoCTF",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/pico_writeup/";
          
        },
      },{id: "post-pandora",
        
          title: "Pandora",
        
        description: "Pandora writeup",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/pandora/";
          
        },
      },{id: "post-note",
        
          title: "Note",
        
        description: "A Note writeup",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/note/";
          
        },
      },{id: "post-lampiao",
        
          title: "Lampiao",
        
        description: "Lampiao machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/lampiao/";
          
        },
      },{id: "post-couch",
        
          title: "Couch",
        
        description: "Couch machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/couch/";
          
        },
      },{id: "post-vulversity",
        
          title: "Vulversity",
        
        description: "A Vulversity ctf challenge",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Vulnversity/";
          
        },
      },{id: "post-timing",
        
          title: "Timing",
        
        description: "A HackTheBox Timing machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Timing/";
          
        },
      },{id: "post-solstice",
        
          title: "Solstice",
        
        description: "Proving Grounds Solstice machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Solstice/";
          
        },
      },{id: "post-skynet",
        
          title: "SkyNet",
        
        description: "A TryHackMe Skynet machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Skynet/";
          
        },
      },{id: "post-sar",
        
          title: "Sar",
        
        description: "A Proving grounds Sar machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Sar/";
          
        },
      },{id: "post-routerspace",
        
          title: "Routerspace",
        
        description: "HTB - RouterSpace machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Routerspace/";
          
        },
      },{id: "post-mustacchio",
        
          title: "Mustacchio",
        
        description: "THM - Mustacchio room",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Mustacchio/";
          
        },
      },{id: "post-funboxeasyenum",
        
          title: "FunboxEasyEnum",
        
        description: "A FunboxEasyEnum machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/FunboxEasyEnum/";
          
        },
      },{id: "post-dirtypipe-cve-2022-0847",
        
          title: "DirtyPipe(CVE-2022-0847)",
        
        description: "A writeup on CVE-2022-0847",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/DirtyPipe/";
          
        },
      },{id: "post-clamav",
        
          title: "ClamAV",
        
        description: "ClamAV walkthrough",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/ClamAV/";
          
        },
      },{id: "post-cap",
        
          title: "Cap",
        
        description: "A HackTheBox writeup on Cap machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Cap/";
          
        },
      },{id: "post-tryhackme-cmspit",
        
          title: "TRYHACKME- CMSpit",
        
        description: "CMSpit room on TryhHackMe",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/CMSpit/";
          
        },
      },{id: "post-coridor",
        
          title: "Coridor",
        
        description: "Corridor challenge from Webverse",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/first-post/";
          
        },
      },{id: "post-blue",
        
          title: "Blue",
        
        description: "My Blue walkthrough",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2026/Blue/";
          
        },
      },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nerdweb007/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/nerdweb007/books/the_godfather/";
            },},{id: "news-hipster-list-https-tryhackme-com-https-www-hackthebox-com-https-pentesterlab-com-https-academy-hackthebox-com-https-portswigger-net-web-security-amp-lt-amp-gt-amp-lt-ul-amp-gt-hoodie-thundercats-retro-tote-bag-8-bit-godard-craft-beer-gastropub-truffaut-tumblr-taxidermy-raw-denim-kickstarter-sartorial-dreamcatcher-quinoa-chambray-slow-carb-salvia-readymade-bicycle-rights-90-39-s-yr-typewriter-selfies-letterpress-cardigan-vegan-amp-gt-we-do-not-grow-absolutely-chronologically-we-grow-sometimes-in-one-dimension-and-not-in-another-unevenly-we-grow-partially-we-are-relative-we-are-mature-in-one-realm-childish-in-another-amp-gt-anais-nin-fap-aliqua-qui-scenester-pug-echo-park-polaroid-irony-shabby-chic-ex-cardigan-church-key-odd-future-accusamus-blog-stumptown-sartorial-squid-gastropub-duis-aesthetic-truffaut-vero-pinterest-tilde-twee-odio-mumblecore-jean-shorts-lumbersexual",
          title: 'Hipster list https://tryhackme.com/ https://www.hackthebox.com/ https://pentesterlab.com/ https://academy.hackthebox.com/ https://portswigger.net/web-security&amp;amp;lt;/&amp;amp;gt; &amp;amp;lt;/ul&amp;amp;gt; Hoodie Thundercats retro, tote bag...',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/nerdweb007/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/nerdweb007/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/nerdweb007/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/nerdweb007/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/nerdweb007/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/nerdweb007/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
