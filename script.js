{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function calculateNearestGrams() \{\
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);\
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);\
    let desiredKopeck = document.getElementById('desiredKopeck').value;\
\
    if (!pricePerKg || !totalAmount) \{\
        alert('\uc0\u1041 \u1091 \u1076 \u1100  \u1083 \u1072 \u1089 \u1082 \u1072 , \u1074 \u1074 \u1077 \u1076 \u1110 \u1090 \u1100  \u1074 \u1089 \u1110  \u1085 \u1077 \u1086 \u1073 \u1093 \u1110 \u1076 \u1085 \u1110  \u1076 \u1072 \u1085 \u1110 .');\
        return;\
    \}\
\
    const pricePerGram = pricePerKg / 1000;\
    const maxGrams = Math.floor(totalAmount / pricePerGram);\
\
    if (desiredKopeck === "") \{\
        desiredKopeck = Math.round((totalAmount % 1) * 100);\
    \} else \{\
        desiredKopeck = parseInt(desiredKopeck, 10);\
    \}\
\
    let nearestGrams = null;\
    let nearestSum = null;\
\
    for (let grams = maxGrams; grams >= 0; grams--) \{\
        const currentSum = pricePerGram * grams;\
        const currentKopeck = Math.round((currentSum % 1) * 100);\
\
        if (currentKopeck === desiredKopeck || (desiredKopeck === 0 && currentKopeck % 10 === 0)) \{\
            if (currentSum <= totalAmount) \{\
                nearestGrams = grams;\
                nearestSum = currentSum;\
                break;\
            \}\
        \}\
    \}\
\
    if (nearestGrams !== null && nearestSum !== null) \{\
        document.getElementById('resultGrams').innerText = `\uc0\u1043 \u1088 \u1072 \u1084  \u1085 \u1077 \u1086 \u1073 \u1093 \u1110 \u1076 \u1085 \u1086 : $\{nearestGrams\}`;\
        document.getElementById('resultSum').innerText = `\uc0\u1057 \u1091 \u1084 \u1072 : $\{nearestSum.toFixed(2)\}`;\
    \} else \{\
        document.getElementById('resultGrams').innerText = `\uc0\u1053 \u1077  \u1079 \u1085 \u1072 \u1081 \u1076 \u1077 \u1085 \u1086  \u1087 \u1110 \u1076 \u1093 \u1086 \u1076 \u1103 \u1097 \u1086 \u1075 \u1086  \u1079 \u1085 \u1072 \u1095 \u1077 \u1085 \u1085 \u1103 .`;\
        document.getElementById('resultSum').innerText = ``;\
    \}\
\}\
}