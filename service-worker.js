{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 self.addEventListener('install', (event) => \{\
    event.waitUntil(\
        caches.open('my-cache').then((cache) => \{\
            return cache.addAll([\
                '/',\
                '/index.html',\
                '/style.css',\
                '/script.js',\
                '/icon-192x192.png',\
                '/icon-512x512.png'\
            ]);\
        \})\
    );\
\});\
\
self.addEventListener('fetch', (event) => \{\
    event.respondWith(\
        caches.match(event.request).then((response) => \{\
            return response || fetch(event.request);\
        \})\
    );\
\});\
}