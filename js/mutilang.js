<script type="text/javascript">
    var url;
    var lang = (navigator.appName=='Netscape'?navigator.language:navigator.userLanguage).toLowerCase();
    switch(lang){
        case 'en-us':
            url = '/en/';
            break;
        case 'en':
            url = '/en/';
            break;            
        case 'zh-cn':
            url = '/zh-CN/';
            break;
        case 'zh-tw':
            url = '/zh-TW/';
            break;
        case 'zh-hk':
            url = '/zh-TW/';
            break;
        case 'ja':
            url = '/ja/';
            break;    
        default:
            url = '/';
    }
    alert(url);
</script>