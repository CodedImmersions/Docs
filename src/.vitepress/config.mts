import {defineConfig} from 'vitepress'

const projects = [
    {text: 'MirrorVR', link: '/mirrorvr/'},
    {text: 'EOSTransport', link: '/eostransport/'},
    {text: 'CI Obfuscator', link: '/ci-obfuscator/'},
    {text: 'Vercidium Audio for Unity', link: '/vaudio-unity/'},
]

export default defineConfig({
    outDir: '../docs',

    title: 'Coded Immersions Docs',
    description: 'Documentation for Coded Immersions projects.',

    lastUpdated: true,
    cleanUrls: true,

    head: [
        ['link', {rel: 'icon', type: 'image/webp', href: '/logo-ci.webp'}],
    ],
    themeConfig: {
        nav: [
            {text: 'Projects', items: projects},
            {text: 'Main Website', link: 'https://codedimmersions.com/'},
        ],
        sidebar: {
            '/mirrorvr/': [{
                text: 'MirrorVR',
                items: [
                    {text: 'Overview', link: '/mirrorvr/'}
                ]
            }],
            '/eostransport/': [{
                text: 'EOSTransport',
                items: [
                    {text: 'Overview', link: '/eostransport/'}
                ]
            }],
            '/ci-obfuscator/': [{
                text: 'CI Obfuscator',
                items: [
                    {text: 'Overview', link: '/ci-obfuscator/'}
                ]
            }],
            '/vaudio-unity/': [{
                base: '/vaudio-unity/',
                text: 'Vercidium Audio for Unity',
                items: [
                    {text: 'Overview', link: '/'},
                    {text: 'Getting Started', link: '/getting-started'}
                ]
            }]
        },
        socialLinks: [{icon: 'github', link: 'https://github.com/CodedImmersions'}],
        search: {provider: 'local'},
    },
    sitemap: {
        hostname: 'https://docs.codedimmersions.com'
    }
})