import { icons } from "lucide-react";

export default[
    {
        name:'Blog Title',
        desc:'An AI Tool that generates content depending on your requirement',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2799/2799954.png',
        aiPrompt:'Give me 5 blog topic ideas',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI Tool that generates blog content depending on your requirement',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt:'Give me blog content based on given topic',
        slug:'blog-content-generator',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI Tool that generates Ideas for your blog',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187544.png',
        aiPrompt:'Give me 5 blog topic ideas',
        slug:'blog-topic-generator',
        form:[
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            },
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI Tool that generates Title for your youtube  which ranks good on SEO',
        category:'youtube tools',
        icon:'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
        aiPrompt:'Give me 5 titles based on given keywords',
        slug:'youtube-seo-generator',
        form:[
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI Tool that generates Description for your youtube video',
        category:'Youtube tool',
        icon:'https://cdn-icons-png.flaticon.com/128/16393/16393962.png',
        aiPrompt:'Give me description for youtube video based on given title',
        slug:'youtube-description',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube video outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI Tool that generates tags depending on your requirement',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/1383/1383260.png',
        aiPrompt:'Give me 5 tags for youtube based on given title',
        slug:'youtube-tag',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube video outline here(Optional)',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Rewrite Aricle (Plagiarism Free)',
        desc:'An AI Tool that helps to rewrite your article',
        category:'Rewriting Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/2704/2704034.png',
        aiPrompt:'Rewrite the article based on given article',
        slug:'rewrite-article',
        form:[
            {
                label:'Enter your Article/Blogpost',
                field:'textarea',
                name:'article',
                required:true
            },
        ]
    },
    {
        name:'Text Improver',
        desc:'An AI Tool that makes your text better',
        category:'Writing assistant',
        icon:'https://cdn-icons-png.flaticon.com/128/14648/14648379.png',
        aiPrompt:'Generate better text based on given text',
        slug:'text-improver',
        form:[
            {
                label:'Enter your text area you want to improve or re-write',
                field:'textarea',
                name:'texttoimprove',
                required:true
            },
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI Tool that generates Instagram Post depending on your requirement',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        aiPrompt:'Generate 3 instagram post depending on given keyword',
        slug:'instagram-post-generator',
        form:[
            {
                label:'Enter keywords for your post',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },

    {
        name:'Code Generator',
        desc:'An AI Tool that generates Code for you',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        aiPrompt:'Generate code depending on given input',
        slug:'code-generator',
        form:[
            {
                label:'Enter code you want to generate',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },

    {
        name:'Code Improver',
        desc:'An AI Tool that improves your code',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1006/1006363.png',
        aiPrompt:'Improve the given code',
        slug:'code-improver',
        form:[
            {
                label:'Enter code you want to improve',
                field:'textarea',
                name:'keywords',
                required:true
            },
        ]
    },

    {
        name:'Instagram Hashtag Generator',
        desc:'An AI Tool that generates Hashtag for your Instagram Post',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        aiPrompt:'Generate hashtag for Instagram for given keyword ',
        slug:'hashtag-generator',
        form:[
            {
                label:'Enter keyword for your Instagram Hashtag',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'Code Explainer',
        desc:'An AI Tool that explains you code',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2409/2409387.png',
        aiPrompt:'Explain the given code',
        slug:'code-explainer',
        form:[
            {
                label:'Enter the code',
                field:'textarea',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'Email Generator',
        desc:'An AI Tool that generates Email for you',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2965/2965306.png',
        aiPrompt:'Generate email depending on given input',
        slug:'email-generator',
        form:[
            {
                label:'Enter email you want to generate',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },

    {
        name:'Email Improver',
        desc:'An AI Tool that improves your mail',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1161/1161833.png',
        aiPrompt:'Improve the given email',
        slug:'email-improver',
        form:[
            {
                label:'Enter email you want to improve',
                field:'textarea',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'LinkedIn Post Generator',
        desc:'An AI Tool that generates your LinkedIn Post',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/174/174857.png',
        aiPrompt:'Generate LinkedIn post depending on given keyword',
        slug:'linked-post-generator',
        form:[
            {
                label:'Enter keywords for your post',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'Podcast Script Generator',
        desc:'An AI Tool that generates script for your Podcast',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2368/2368447.png',
        aiPrompt:'Generate podcast script depending on given keyword',
        slug:'podcast-script-generator',
        form:[
            {
                label:'Enter your Podcast Idea',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'eBook Outline Generator',
        desc:'An AI Tool that generates outline for your ebook',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1945/1945963.png',
        aiPrompt:'generates outline for ebook depending on given keyword',
        slug:'ebook-outline-generator',
        form:[
            {
                label:'What is your ebook about? ',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'Tweet Generator',
        desc:'Craft engaging tweets for Twitter',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/5968/5968830.png',
        aiPrompt:'Craft engaging tweets for Twitter depending on given keyword',
        slug:'tweet-generator',
        form:[
            {
                label:'Enter keywords for your tweet',
                field:'input',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'Video Script Generator',
        desc:'Write scripts for YouTube or other video platforms',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/10266/10266594.png',
        aiPrompt:'Generate script for depending on given keyword',
        slug:'video-script-generator',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube video outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'SEO Keyword Suggestion',
        desc:'Provide keyword suggestions for SEO optimization',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4104/4104723.png',
        aiPrompt:'Suggest some SEO kewords',
        slug:'seo-keyword-generator',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'Slogan and Tagline Generator',
        desc:'Create catchy slogans and taglines for brands',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1998/1998087.png',
        aiPrompt:'Create catchy slogans and taglines based on given input',
        slug:'slogan-generator',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'Social Media Caption Generator',
        desc:'Create engaging captions for various social media platforms',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2065/2065157.png',
        aiPrompt:' Create engaging captions for various social media platforms based on given input',
        slug:'caption-generator',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'Social Media Post Ideas',
        desc:'Generate creative post ideas for various platforms',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4187/4187336.png',
        aiPrompt:' Generate creative post ideas for various platforms based on given input',
        slug:'post-idea-generator',
        form:[
            {
                label:'Enter your Title',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },


]