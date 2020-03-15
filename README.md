# Integrating Google Tag Manager to the Google Chome extension
- Step #1: Create the Google Analytics data stream;
- Step #2: Create the Google Tag Manager tag;
- Step #3: While creating the tag, connect this tag to the Google Analytics data stream. 

Besides creating the Google Tag, it is necessary to add the following values to the field set:

```javascript
checkProtocolTask : false
```

```javascript
page : "/"
```
