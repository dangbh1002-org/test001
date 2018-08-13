
# Nodejs Test
> Collect ranking words

## Requirement

1. Use nodejs to collect all 86800 words in this website: [Wordcount - Tracking the Way We Use Language](http://www.wordcount.org/main.php)
(REST API: `http://www.wordcount.org/dbquery.php?toFind=0&method=SEARCH_BY_INDEX`)

2. After collect, write all 86800 words to filename `result.json` with following structure:

```json
[
    {"rank": "1", "word": "the", "freq" : "6.510891"},
    {"rank": "2", "word": "of", "freq" : "3.095330"},
    {"rank": "3", "word": "and", "freq" : "2.822903"},
    {"rank": "4", "word": "to", "freq" : "2.693976"},
    {"rank": "5", "word": "a", "freq" : "2.263141"},
    ...
    ...
    {"rank": "86800", "word": "conquistador", "freq": "0.000011"}
]
```
