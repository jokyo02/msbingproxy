// src/index.ts
import { proxyLinkHttp,usIps } from "./proxyLinkHttp.js";
import CopilotInjection from "./CopilotInjection.html";
import CFTuring from "./CFTuring.html";
import CFTNormalUring from "./CFTNormalUring.html";
import MusicInJection from "./MusicInJection.html";
import ImagesCreateInJection from "./ImagesCreateInJection.html";
import LoginInJectionBody from "./LoginInJectionBody.html";
let XForwardedForIP = usIps[Math.floor(Math.random() * usIps.length)][0];
console.log(XForwardedForIP);



export async function onRequest(context) {
  const { request, env } = context;
  // 处理 CORS 请求
  if (request.method === 'OPTIONS') {
    return handleOptions(request);
  }
  // 处理普通 HTTP 请求
  return handleRequest(request, env);
}

function handleOptions(request) {
  // 设置 CORS 头部
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': request.headers.get('Access-Control-Request-Headers') || '',
    'Access-Control-Max-Age': '86400',
  };
  return new Response(null, { headers: corsHeaders });
}

//var src_default = {
//  async fetch(request, env, ctx) {
async function handleRequest(request, env,ctx) {
    const upgradeHeader = request.headers.get("Upgrade");
    if (upgradeHeader && upgradeHeader == "websocket") {
      return websocketPorxy(request);
    }

 

    const url = new URL(request.url);
    const porxyHostName = url.hostname;
    const porxyOrigin = url.origin;
    const porxyPort = url.port;
    const porxyProtocol = url.protocol;
    return proxyLinkHttp(request, [
      async (config) => {
        const url2 = new URL(config.url);
        url2.port = "";
        url2.protocol = "https:";
        config.url = url2;
        config.init.headers = new Headers(config.init.headers);
        return config;
      },
      async (config) => {
        const url2 = config.url;
        const p = url2.pathname;
        if (p.startsWith("/sydney/")) {
      //    url2.hostname = "prosyd.pages.dev";
          url2.hostname = "aiu.pages.dev";
        }
      //  if (p == "/" || p.startsWith("/rp/") || p.startsWith("/chat") || p.startsWith("/search") || p == "/favicon.ico" || p.startsWith("/fd/") || p.startsWith("/rewardsapp/") || p.startsWith("/notifications/") || p.startsWith("/sa/") || p.startsWith("/rs/") || p.startsWith("/sharing/") || p.startsWith("/sydchat/") || p.startsWith("/turing/") || p.startsWith("/th") || p.startsWith("/Identity/") || p.startsWith("/hamburger/") || p.startsWith("/secure/") || p == "/bingufsync" || p == "/passport.aspx" || p.startsWith("/images") || p.startsWith("/idp/") || p.startsWith("/cdx/") || p.startsWith("/pwa/") || p.startsWith("/videos") || p.startsWith("/welcomescreenassets") || p.startsWith("/geolocation") || p.startsWith("/maps")) {
          if (p == "/" || p.startsWith("/rp/") || p.startsWith("/chat") || p.startsWith("/search") || p == "/favicon.ico" || p.startsWith("/fd/") || p.startsWith("/rewardsapp/") || p.startsWith("/notifications/") || p.startsWith("/sa/") || p.startsWith("/rs/") || p.startsWith("/sharing/") || p.startsWith("/sydchat/") || p.startsWith("/turing/") || p.startsWith("/th") || p.startsWith("/Identity/") || p.startsWith("/hamburger/") || p.startsWith("/secure/") || p == "/bingufsync" || p == "/passport.aspx" || p.startsWith("/images") || p.startsWith("/idp/") || p.startsWith("/cdx/") || p.startsWith("/pwa/") || p.startsWith("/videos") || p.startsWith("/maps")) {
            url2.hostname = "www.bing.com";
        }

     //      if ( p.startsWith("/shux") || p.startsWith("/wpt") || p.startsWith("/deepsearch") || p.startsWith("/copilotsearch")  || p.startsWith("/consumers") || p.startsWith("/web")) {
     //       url2.hostname = "www.bing.com";
     //   }

           if (  p.startsWith("/deepsearch") || p.startsWith("/copilotsearch")) {
            url2.hostname = "www.bing.com";
        }
    //    if (p == "/GetCredentialType.srf" || p.startsWith("/ppsecure/") || p == "/login.srf" || p == "/GetOneTimeCode.srf" || p == "/GetSessionState.srf" || p == "/GetExperimentAssignments.srf" || p == "/logout.srf") {
    //      url2.hostname = "login.live.com";
    //    }
        if (p.startsWith("/users/")) {
          url2.hostname = "storage.live.com";
        }
        if (p.startsWith("/turnstile/") || p.startsWith("/pocybig/")) {
          url2.hostname = "challenges.cloudflare.com";
          url2.pathname = url2.pathname.replace("/pocybig/", "/cdn-cgi/");
        }
        return config;
      },
      async (config) => {
        const resHeaders = config.init.headers;
        resHeaders.set("X-forwarded-for", XForwardedForIP);
        return config;
      },
      async (config) => {
        const resHeaders = config.init.headers;
        const origin = resHeaders.get("Origin");
        if (origin) {
          const url2 = config.url;
          const originUrl = new URL(origin);
          originUrl.protocol = "https:";
          originUrl.port = "";
          originUrl.hostname = "www.bing.com";
      //    if (url2.pathname == "/GetCredentialType.srf" || url2.pathname.startsWith("/ppsecure/") || url2.pathname == "/GetExperimentAssignments.srf" || url2.pathname == "/secure/Passport.aspx") {
      //      originUrl.hostname = "login.live.com";
      //    }
          if (url2.pathname.startsWith("/pocybig/")) {
            originUrl.hostname = "www.bing.com";
          }
          resHeaders.set("Origin", originUrl.origin);
        }
        return config;
      },
      async (config) => {
        const resHeaders = config.init.headers;
        const referer = resHeaders.get("Referer");
        if (referer) {
          const url2 = config.url;
          let refererUrl = new URL(referer);
          refererUrl.protocol = "https:";
          refererUrl.port = "";
          refererUrl.hostname = "www.bing.com";
      //   if (url2.pathname == "/secure/Passport.aspx" || url2.pathname.startsWith("/ppsecure/") || url2.pathname == "/GetExperimentAssignments.srf" || url2.pathname == "/GetCredentialType.srf") {
      //      refererUrl.hostname = "login.live.com";
      //    }
          if (url2.pathname.startsWith("/pocybig/")) {
            refererUrl.hostname = "challenges.cloudflare.com";
            refererUrl.pathname = refererUrl.pathname.replace("/pocybig/", "/cdn-cgi/");
            if (url2.pathname.endsWith("/normal")) {
              refererUrl = "https://www.bing.com/";
            }
          }
          resHeaders.set("Referer", refererUrl.toString());
        }
        return config;
      },
      /*
      async (config) => {
        const url2 = config.url;
        const p = url2.pathname;
        if (p == "/secure/Passport.aspx" || p == "/passport.aspx") {
          let requrl = url2.searchParams.get("requrl");
          if (requrl) {
            url2.searchParams.set("requrl", requrl.replace(porxyOrigin, "https://www.bing.com"));
          }
        }
        if (p == "/fd/auth/signin") {
          let requrl = url2.searchParams.get("return_url");
          if (requrl) {
            url2.searchParams.set("return_url", requrl.replace(porxyOrigin, "https://www.bing.com"));
          }
        }
        if (p == "/Identity/Dropdown" || p == "/Identity/Hamburger") {
          let requrl = url2.searchParams.get("ru");
          if (requrl) {
            url2.searchParams.set("ru", requrl.replace(porxyOrigin, "https://www.bing.com"));
          }
        }
        if (p == "/login.srf") {
          let requrl = url2.searchParams.get("wreply");
          if (requrl) {
            url2.searchParams.set("wreply", requrl.replace(porxyOrigin, "https://www.bing.com"));
          }
        }
        return config;
      },
      */
      async (config, req) => {
        const url2 = config.url;
        const p = url2.pathname;
        if (p == "/sydney/UpdateConversation") {
          let bodyjson = await req.text();
          bodyjson = bodyjson.replaceAll(porxyOrigin, "https://www.bing.com");
          config.init.body = bodyjson;
        }
        return config;
      },
      async (config) => {
        const url2 = config.url;
        const p = url2.pathname;
        if (p != "/fd/ls/l") {
          return config;
        }
        let sdata = url2.searchParams.get("DATA");
        if (sdata) {
          sdata = sdata.replaceAll(porxyOrigin, "https://www.bing.com");
          url2.searchParams.set("DATA", sdata);
        }
        return config;
      },
      async (config) => {
        const url2 = config.url;
        if (url2.searchParams.has("cprt")) {
          url2.hostname = url2.searchParams.get("cprt");
          url2.searchParams.delete("cprt");
          return config;
        }
        if (url2.searchParams.has("cprtp")) {
          url2.port = url2.searchParams.get("cprtp");
          url2.searchParams.delete("cprtp");
        }
        if (url2.searchParams.has("cprtl")) {
          url2.protocol = url2.searchParams.get("cprtl");
          url2.searchParams.delete("cprtl");
        }
        return config;
      }
    ], [
      async (config) => {
        config.init.headers = new Headers(config.init.headers);
        return config;
      },
      async (config) => {
        const resHeaders = config.init.headers;
        const newheaders = new Headers();
        for (const headerPer of resHeaders) {
          const key = headerPer[0];
          let value = headerPer[1];
          if (key.toLocaleLowerCase() == "set-cookie") {
            value = value.replace(/[Dd]omain=\.?[0-9a-z]*\.?microsoft\.com/, `Domain=.${porxyHostName}`);
            value = value.replace(/[Dd]omain=\.?[0-9a-z]*\.?live\.com/, `Domain=.${porxyHostName}`);
            value = value.replace(/[Dd]omain=\.?[0-9a-z]*\.?bing\.com/, `Domain=.${porxyHostName}`);
          }
          newheaders.append(key, value);
        }
        config.init.headers = newheaders;
        return config;
      },
      async (config, res) => {
        const resHeaders = config.init.headers;
        const contentType = res.headers.get("Content-Type");
        if (!contentType || !contentType.startsWith("text/") && !contentType.startsWith("application/javascript") && !contentType.startsWith("application/json")) {
          return config;
        }
        resHeaders.delete("Content-Md5");
        let retBody = await res.text();
        const resUrl = new URL(res.url);
        if (!resUrl.pathname.startsWith("/turing/captcha/") && !resUrl.pathname.startsWith("/turnstile/") && !resUrl.pathname.startsWith("/cdn-cgi/")) {
          retBody = retBody.replace(/https?:\/\/sydney\.bing\.com(:[0-9]{1,6})?/g, `${porxyOrigin}`);
          retBody = retBody.replace(/https?:\/\/login\.live\.com(:[0-9]{1,6})?/g, `${porxyOrigin}`);
          retBody = retBody.replace(/https?:\/\/copilot\.microsoft\.com(:[0-9]{1,6})?/g, `${porxyOrigin}`);
          retBody = retBody.replace(/https?:\/\/www\.bing\.com(:[0-9]{1,6})?/g, `${porxyOrigin}`);
          retBody = retBody.replace(/https:\\\/\\\/r\.bing\.com(:[0-9]{1,6})?/g, `${porxyOrigin}`);
          retBody = retBody.replace(/https?:\/\/storage\.live\.com(:[0-9]{1,6})?/g, `${porxyOrigin}`);
        }
        if( (resUrl.pathname == "/") || resUrl.pathname.startsWith("/chat") || resUrl.pathname.startsWith("/search")){
          retBody = injectionHtmlToHead(retBody, CopilotInjection);
        }
        if (resUrl.pathname == "/turing/captcha/challenge") {
          retBody = retBody.replaceAll("https://challenges.cloudflare.com", `${porxyOrigin}`);
          retBody = injectionHtmlToHead(retBody, CFTuring);
        }
        if (resUrl.pathname == "/videos/music") {
          retBody = injectionHtmlToHead(retBody, MusicInJection);
        }
        if (resUrl.pathname == "/images/create" || resUrl.pathname.startsWith("/images/create/") && !resUrl.pathname.startsWith("/images/create/async/")) {
          retBody = injectionHtmlToHead(retBody, ImagesCreateInJection);
        }
        if (resUrl.pathname.startsWith("/turnstile/") && resUrl.pathname.endsWith("/api.js")) {
          retBody = retBody.replaceAll("https://challenges.cloudflare.com", `${porxyOrigin}`);
          retBody = retBody.replaceAll("/cdn-cgi/", "/pocybig/");
          retBody = retBody.replaceAll("location", "myCFLocation");
        }
        if (resUrl.pathname.startsWith("/cdn-cgi/challenge-platform/")) {
          retBody = retBody.replaceAll("/cdn-cgi/", "/pocybig/");
          if (resUrl.pathname.endsWith("/normal")) {
            retBody = injectionHtmlToHead(retBody, CFTNormalUring);
          }
        }
        if (resUrl.pathname == "/login.srf") {
          retBody = injectionHtmlToBody(retBody, LoginInJectionBody);
        }
        config.body = retBody;
        return config;
      },
      async (config, res) => {
        if (res.status < 300 || res.status >= 400) {
          return config;
        }
        const resHeaders = config.init.headers;
        const loto = resHeaders.get("Location");
        if (!loto) {
          return config;
        }
        if (!loto.toLowerCase().startsWith("http")) {
          return config;
        }
        const lotoUrl = new URL(loto);
        lotoUrl.hostname = porxyHostName;
        lotoUrl.port = porxyPort;
        lotoUrl.protocol = porxyProtocol;
        resHeaders.set("Location", lotoUrl.toString());
        return config;
      },
      async (config, res) => {
      config.init.headers = new Headers(config.init.headers);

      const resUrl = new URL(res.url);
      if (resUrl.pathname.startsWith("/copilotsearch")) {
        
        // 从 bcct.pages.dev 获取 cookies 并写入当前站点
      const cctresp = await fetch('https://bcct.pages.dev');
      const bBING_COOKIE = await cctresp.text();
      const data = JSON.parse(bBING_COOKIE);
      const Uallcookies = data.result.cookies;
      const keyValuePairs = Uallcookies.split(';');
   
      keyValuePairs.forEach(pair => {
        const [key, value] = pair.trim().split('=');
          // 只处理键名为 cct 的 cookie
        if (key.toLowerCase() === "cct") {
          config.init.headers.append('Set-Cookie', `${key}=${value}; Domain=.${porxyHostName}; Path=/`);
        }
       });
    }
      return config;
    }
    ]);
  }
//};
async function websocketPorxy(request) {
  const reqUrl = new URL(request.url);
  reqUrl.hostname = "sydney.bing.com";
  reqUrl.protocol = "https:";
  reqUrl.port = "";
  const headers = new Headers(request.headers);
  if (headers.get("origin")) {
    headers.set("origin", "https://www.bing.com");
  }
  headers.append("X-forwarded-for", XForwardedForIP);
  return fetch(reqUrl, {
    body: request.body,
    headers,
    method: request.method
  });
}
function injectionHtmlToHead(html, sc) {
  return html.replace("<head>", `<head>${sc}`);
}
function injectionHtmlToBody(html, sc) {
  return html.replace("<body>", `<body>${sc}`);
}
