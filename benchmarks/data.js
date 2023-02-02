window.BENCHMARK_DATA = {
  "lastUpdate": 1675367400641,
  "repoUrl": "https://github.com/gofiber/fiber",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René Werner",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "c5691c7de55701400c4636793225058f5192f1dc",
          "message": "change output folder for the benchmarks result (gh-pages)",
          "timestamp": "2023-01-19T21:41:33+01:00",
          "tree_id": "6ab13bce1ff7851f5f105171e2299a3a7c25e866",
          "url": "https://github.com/gofiber/fiber/commit/c5691c7de55701400c4636793225058f5192f1dc"
        },
        "date": 1674161588875,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1014,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1016935 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 6470,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "181568 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6556,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "187555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7424312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 63.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17202162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 84.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13832176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 63.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19111798 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 249.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4730000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 311.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3422546 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 3.348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "362841788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1163,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 826.7,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1424790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3011,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "385224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1468,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "805544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1330,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "820357 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 151.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8648728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7490972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 150.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7579088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 353.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3243952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1989,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "577422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 568.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1953051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9884202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 216.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6101664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 312.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3789142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 282.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4403713 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 472,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2555467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28174094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 95.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12948499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 47.07,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21709687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 50.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24093350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 680.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1742629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 81.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14544187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 412.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3163270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4901,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "223498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69723354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 218.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "5150427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 377.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3248815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 523.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2182874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2645,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "472726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 177.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6608695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1394,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "832915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 310.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3580408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 892.8,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1269597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 873.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1465027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 816.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1416282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 866.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1439928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 233.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5150469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.298,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "196456492 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 61.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18971475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26099049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9777568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10099905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 46.42,
            "unit": "ns/op\t      79 B/op\t       0 allocs/op",
            "extra": "29721241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 186.9,
            "unit": "ns/op\t      95 B/op\t       1 allocs/op",
            "extra": "6185314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 60.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20748391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96556598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4663,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "239049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3822,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "275800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5177,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "211603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4488,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "239092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1492,
            "unit": "ns/op\t     799 B/op\t       8 allocs/op",
            "extra": "747592 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6307,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "193119 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6449,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "169224 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 166.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7417065 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 54.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20623924 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 62.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19110518 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273815924 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.524,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220358961 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 3.887,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "311512422 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1009,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1196367 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1001,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 204.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5855613 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 178.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6537832 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 687.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1771796 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 689.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1711320 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 916248,
            "unit": "ns/op\t  372994 B/op\t    5608 allocs/op",
            "extra": "1288 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 110.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10461960 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 33.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38123733 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.095,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278117144 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.394,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "343383288 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 178.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6387777 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 254.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4801902 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 190.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5793307 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 288901,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4153 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 248174,
            "unit": "ns/op\t   24576 B/op\t    1000 allocs/op",
            "extra": "4756 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 211165,
            "unit": "ns/op\t     719 B/op\t       0 allocs/op",
            "extra": "5972 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 546.2,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2241634 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 457.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2581954 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 960.2,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1273999 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 572.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2112463 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2513,
            "unit": "ns/op\t     334 B/op\t       7 allocs/op",
            "extra": "672315 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 3040,
            "unit": "ns/op\t     609 B/op\t       7 allocs/op",
            "extra": "620512 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1514,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "737244 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2336,
            "unit": "ns/op\t     278 B/op\t       5 allocs/op",
            "extra": "662389 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2255,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "757722 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 150.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8652430 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 133.5,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9081772 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 67.34,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "17282614 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 25.61,
            "unit": "ns/op\t 507.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "47470344 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 56.28,
            "unit": "ns/op\t 231.01 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21390576 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 829.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1448811 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 164.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7336246 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 563.2,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2114076 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 381.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3240020 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 408.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2981322 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 725.1,
            "unit": "ns/op\t      14 B/op\t       1 allocs/op",
            "extra": "1635606 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 454.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2546672 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 840.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1448026 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28772,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "42235 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 29439,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "41665 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 57.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20422135 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 167.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7409836 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21329828 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 149.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7905306 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 22.39,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49306098 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.28,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53013937 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 23.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54521774 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 25.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44113968 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 36.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32079794 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.31,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "27977097 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 115.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10438424 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3150303 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 77.47,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14760084 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 554.3,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2269332 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 37.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32876138 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 30.32,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35986180 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.811,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "639311977 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 36.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32001248 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 85.52,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13191540 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 92.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12311416 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5844382 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 79.87,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14129043 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132587577 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897882908 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 14.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85140668 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 33.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34085438 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 78.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "15204343 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 106.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11200962 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 170.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "7295899 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 110,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11142541 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 310.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3787648 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 107.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10302885 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3987882 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 2.603,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "476339263 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.458,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210720548 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "366207996 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199539974 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "135404373 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130794320 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 91.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13378956 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 312.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3771868 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3717,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22178870 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dozheiny@gmail.com",
            "name": "Iliya",
            "username": "dozheiny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0004cf8a82d57a00d7078b8cdbdbbe356934957",
          "message": "🔥 write integer Query Parser. (#2306)\n\n* Feature: write integer Query Parser.\r\n\r\n* request changes on https://github.com/gofiber/fiber/pull/2306#discussion_r1082171003\r\n\r\n* ref(test): separate test cases for QueryInt",
          "timestamp": "2023-01-23T19:06:12+01:00",
          "tree_id": "26625ba2ad16be96c9a6d7e99815dd7d92030413",
          "url": "https://github.com/gofiber/fiber/commit/a0004cf8a82d57a00d7078b8cdbdbbe356934957"
        },
        "date": 1674497842231,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1449,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "768720 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7411,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "154491 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7579,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "162650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 178.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6809748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17562300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13310421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 267.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4638418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 328.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3551422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "468425943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1185,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "977707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 891,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1359915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3161,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "354349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1609,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "685198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1469,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "751962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 145.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8180142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6860683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7909887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 364.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3283040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1903,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "566721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 644.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1893552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 148.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8182750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5495685 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 303.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3964137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 286.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4076086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 542.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2297695 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 48.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24148592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 98.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12564825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 44.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "24766395 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 54.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21692905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 801.8,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1502421 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 80.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14379597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 358.8,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3153482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5338,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "214827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65040763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 191.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6108762 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 357.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3353445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 504.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2302704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2359,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "463304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 174.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6471325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1389,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "859294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 291.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4110942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 938.2,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1269313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 907.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1310376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 885,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1364449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 866.8,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1398123 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 234.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5053303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.485,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184726642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 65.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17290909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23589618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 113.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10573092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 123.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9592125 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 57.61,
            "unit": "ns/op\t      66 B/op\t       0 allocs/op",
            "extra": "17973868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 201,
            "unit": "ns/op\t      96 B/op\t       1 allocs/op",
            "extra": "6093315 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 58.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19760886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 11.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4594,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "232286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3975,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "292002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4970,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "222144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5098,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "230208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1397,
            "unit": "ns/op\t     784 B/op\t       8 allocs/op",
            "extra": "783021 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7189,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "153338 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7611,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "154839 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170.3,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7016199 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 54.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "21722336 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 70.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16773686 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275628884 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203305051 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.596,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "215361669 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1069,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1068,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 205.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5879510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 187.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6521797 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 660,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1780681 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 676.9,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1820707 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 838253,
            "unit": "ns/op\t  373004 B/op\t    5608 allocs/op",
            "extra": "1446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10914853 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 30.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39675220 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.894,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "303636690 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "383789728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 180.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6505810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 250.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4831470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 186.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6527484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 302986,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3817 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 234065,
            "unit": "ns/op\t   24597 B/op\t    1000 allocs/op",
            "extra": "5162 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 192904,
            "unit": "ns/op\t     663 B/op\t       0 allocs/op",
            "extra": "6141 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 565.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2121816 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 479.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2543722 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 947.1,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1205614 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 589.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2042474 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2318,
            "unit": "ns/op\t     325 B/op\t       7 allocs/op",
            "extra": "724348 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2723,
            "unit": "ns/op\t     621 B/op\t       7 allocs/op",
            "extra": "702360 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1624,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "753326 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1968,
            "unit": "ns/op\t     272 B/op\t       5 allocs/op",
            "extra": "696134 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2037,
            "unit": "ns/op\t     263 B/op\t       5 allocs/op",
            "extra": "754914 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 135.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8809038 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 122.6,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9840074 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 60.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "19299002 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 23.92,
            "unit": "ns/op\t 543.43 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "48956082 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 55.75,
            "unit": "ns/op\t 233.20 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21209366 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 856.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1376536 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 155.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7710748 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 550.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2146141 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 361.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3290838 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 419.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2866766 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 789.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1528935 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 467.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2540281 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 821,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1455331 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 28193,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "43795 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 28254,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "42543 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 72.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17075296 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 150.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7901425 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 55.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21000088 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 168.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7041903 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 21.68,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "50447910 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 22.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49729724 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 21.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51720637 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 24.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47677485 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 34.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33944959 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 36.48,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31022834 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 121.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9665793 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 350.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3309218 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 81.21,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14626831 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 571.6,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2126726 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 39.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30639976 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8928,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "30794572 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.012,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "596200748 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 39.34,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "28573249 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 90.66,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "13208463 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 97.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12083332 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 194.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6268594 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 83.23,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14435397 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "130702057 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.385,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "867205167 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 12.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83101117 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 31.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36055963 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 80.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14333984 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 104.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11624107 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 176.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6984745 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 118.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10137025 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 304.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3912338 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 98.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10592233 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 312.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3932724 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270916100 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "225614181 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "359042656 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198228328 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132437754 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.799,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "136301419 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 98.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12181531 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 299.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3948556 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4463,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 69.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17646075 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pan93412@gmail.com",
            "name": "pan93412",
            "username": "pan93412"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66cc869b1f76905368696ba6c53397bbd6f45ca4",
          "message": "Doc: Remove the redundant space beside a comma (#2309)\n\n📚 Doc: Remove the redundant space beside a comma",
          "timestamp": "2023-01-25T20:35:00+01:00",
          "tree_id": "a5ac38b3ee1b93eb3422d81fe5e204d664ae81e5",
          "url": "https://github.com/gofiber/fiber/commit/66cc869b1f76905368696ba6c53397bbd6f45ca4"
        },
        "date": 1674675964659,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1452,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "733915 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 7656,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "163455 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7761,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "148972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 185.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6537519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17516384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 97.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13069100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17129340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 280.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4282065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 351.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3455608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.772,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "433797031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1187,
            "unit": "ns/op\t     145 B/op\t       7 allocs/op",
            "extra": "913124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 885,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1366178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 3125,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "351526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1584,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "716806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1496,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "730807 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8240497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6764332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7979140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 371.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3250910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2046,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "526516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 673.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1836832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 154.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8094714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 222.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5344508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 311.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3785370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 292.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4030034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 518,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2226637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 48.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24477229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 96.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11974976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 46.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25971712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21126165 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 799.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1497926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 81.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14067664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 369.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3148426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 5289,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "221119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64900914 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 191.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6193746 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 356.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3364999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 502.4,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2322368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2434,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "448606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 177.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6392791 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1401,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "741051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 294.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4049856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 932,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1347732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 884.3,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1299008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 881.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1370121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 904.1,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1306755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 233.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4860888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 6.569,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171410202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 67.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17120476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23779202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 122.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9843254 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 131.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9646051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 61.84,
            "unit": "ns/op\t      68 B/op\t       0 allocs/op",
            "extra": "17650016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 204.8,
            "unit": "ns/op\t      91 B/op\t       1 allocs/op",
            "extra": "5185657 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 60.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19555300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 12.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99532999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4833,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "237981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 4130,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "278390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 5339,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "227514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 5351,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "218629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1675,
            "unit": "ns/op\t     801 B/op\t       8 allocs/op",
            "extra": "754760 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7695,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "152575 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7985,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "155226 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6516826 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 59.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "20341275 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 74.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16814500 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.791,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "256636598 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 5.996,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199362278 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.734,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200559151 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 1142,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1091,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 211.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5745507 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 201.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6098571 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 697.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1711858 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 688.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1688164 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 929372,
            "unit": "ns/op\t  373009 B/op\t    5608 allocs/op",
            "extra": "1272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 115.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10770830 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 32.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37815745 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 4.021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284560152 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.362,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "352213794 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 205.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6075273 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 264.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4599661 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 192.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6360140 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 335911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3542 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 247274,
            "unit": "ns/op\t   24538 B/op\t    1000 allocs/op",
            "extra": "4764 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 196829,
            "unit": "ns/op\t     674 B/op\t       0 allocs/op",
            "extra": "6060 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 589.2,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2041628 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 506.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2421318 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 1013,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "998487 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 619.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "1949317 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 2495,
            "unit": "ns/op\t     327 B/op\t       7 allocs/op",
            "extra": "707774 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2625,
            "unit": "ns/op\t     599 B/op\t       7 allocs/op",
            "extra": "635234 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1616,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "734730 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 2182,
            "unit": "ns/op\t     286 B/op\t       5 allocs/op",
            "extra": "629001 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 2185,
            "unit": "ns/op\t     274 B/op\t       5 allocs/op",
            "extra": "682250 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 145.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8491386 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 130.3,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "9301501 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 65.06,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "15820177 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 24.52,
            "unit": "ns/op\t 530.15 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "48848359 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 55.48,
            "unit": "ns/op\t 234.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20735240 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 868.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1406966 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 158.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7099404 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 602.3,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "1959015 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 382.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3108700 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 471.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2588083 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 826.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1452002 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 506.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2482299 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 999.4,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "1227361 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 29133,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "39769 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 30091,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "41204 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 77.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16355317 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 154.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7590573 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 57.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20947770 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 175.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "6829672 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 23.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "52453993 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 23.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47342275 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 22.19,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47245350 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 25.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39805105 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 35.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "33206820 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 35.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "31877596 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9331326 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3432933 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 78.16,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "14493019 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 564.7,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2172757 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 39.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31126532 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "32992603 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 2.065,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "565641124 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 38.12,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "28867555 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 86.19,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "12830264 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 91.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12871489 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6417183 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 81.82,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14368713 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 9.617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132081680 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.387,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "831530752 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 13.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85825362 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 32.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38007270 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 81.33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14275927 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 114.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10785582 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 174.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6590228 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 117.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10081581 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 313.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3732950 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 100,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11911651 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3814832 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 4.301,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277342794 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 5.076,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "235592103 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.319,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357316510 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "195763434 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 9.634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "126126150 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.528,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "139740774 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 98.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12139069 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 298.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4070695 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4616,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 67.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17640742 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66315042+rhabichl@users.noreply.github.com",
            "name": "Limux",
            "username": "rhabichl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2cb81ddd31c76689deb351b3da665f84e8795e7",
          "message": "🚨 added testcases and minor algorithm improvment (#2308)\n\n* Deleted redundant check for an ipv4 address octet block that is bigger than 255 in utils/ip.go. Also added a testcase for octetblocks that are bigger than 255.\n\n* Added extra testcases",
          "timestamp": "2023-01-25T20:38:29+01:00",
          "tree_id": "701367d82b5f96bc7da53826e19d503d803a14ff",
          "url": "https://github.com/gofiber/fiber/commit/e2cb81ddd31c76689deb351b3da665f84e8795e7"
        },
        "date": 1674676156258,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 836,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1298935 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3334,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "344157 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3372,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "339207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 146.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8250970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 51.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23203652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 71.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16708969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22227949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 210.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5677128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 284.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4211744 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "525409275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 1022,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1207158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 782.1,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1535181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2672,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "420772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1387,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "791506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1247,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "877542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 114.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10578414 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 137.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8286913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 115.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10378904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 294.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4071681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1689,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "653828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 509.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2303067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10398583 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 155.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7663051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 234,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5116935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 214.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5518171 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 426.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2815748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31923259 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 82.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14330658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 36.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "30654519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 44.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25830334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 650.5,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1863012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16142269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 307.7,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3975538 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4577,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "252062 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77107273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 141.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8554177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 297.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4061764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 418.6,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2945683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2032,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "550827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 155.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7448037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1155,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "1041050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 234.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5081151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 756.4,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1573184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 780.6,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1525988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 767.9,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1568968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 757.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1585976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 184.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6416334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211757787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22133815 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28498530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 95.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11934030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 104.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11403324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 44.97,
            "unit": "ns/op\t      78 B/op\t       0 allocs/op",
            "extra": "29981158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 146.5,
            "unit": "ns/op\t      91 B/op\t       1 allocs/op",
            "extra": "8130632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24803790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128203668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 4014,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "260185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3530,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "325875 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4368,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264103 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4419,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "262579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1192,
            "unit": "ns/op\t     797 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3360,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "340525 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3423,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "336628 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 144.3,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8322667 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 44.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "26101129 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 60.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19749944 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296284354 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171083503 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.723,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201872953 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 901.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1331523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 864.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1405425 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7469005 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8042656 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 621.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1916677 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 623.7,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1942570 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 712190,
            "unit": "ns/op\t  373005 B/op\t    5608 allocs/op",
            "extra": "1512 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13046082 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45367257 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373254548 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "430712706 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 149.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8234037 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 213.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5411718 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 145.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7840380 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 248086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4701 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212824,
            "unit": "ns/op\t   24576 B/op\t    1000 allocs/op",
            "extra": "5344 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 180209,
            "unit": "ns/op\t     677 B/op\t       0 allocs/op",
            "extra": "6636 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 449.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2669613 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 408.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2949864 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 817.8,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1475691 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 508.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2288326 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1787,
            "unit": "ns/op\t     311 B/op\t       7 allocs/op",
            "extra": "830671 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2221,
            "unit": "ns/op\t     573 B/op\t       7 allocs/op",
            "extra": "795848 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1435,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "845013 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1578,
            "unit": "ns/op\t     253 B/op\t       5 allocs/op",
            "extra": "838419 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1884,
            "unit": "ns/op\t     348 B/op\t       5 allocs/op",
            "extra": "901418 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 108.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10597256 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 97.91,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "12187329 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 47.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "25147105 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 20,
            "unit": "ns/op\t 650.01 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "59986142 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 45.62,
            "unit": "ns/op\t 284.99 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23185765 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 714,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1665090 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9906284 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 480.3,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2485725 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 323.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3752314 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 361.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3240624 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 683.7,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1696497 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 407.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2890029 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 798.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1516693 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23809,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50854 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 24288,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50536 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18204645 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 139.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8605718 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 42.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29069460 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 155.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7672002 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53914383 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "55680800 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58692282 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53114478 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 30.25,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38175496 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37203220 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11557910 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 281.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4240958 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 62.46,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18580468 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 442.1,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2710470 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 33.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34658078 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.809,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.93,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43703920 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.626,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "742551948 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 29.53,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37379949 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 67.65,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "17238698 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 78.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15204252 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 149.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8095618 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 67.57,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17988028 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "148446328 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995154270 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 12.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99450106 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46421311 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 69.62,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17289889 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 100.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11721680 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 143.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8047987 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11427680 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 328.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3675535 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.64,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14692544 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 316.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3769898 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "368815878 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.582,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "260881723 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372843896 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.268,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "221668936 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.036,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149330924 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.629,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124619487 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12458521 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 264.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4814187 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.424,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21825927 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pan93412@gmail.com",
            "name": "pan93412",
            "username": "pan93412"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b564f944013ca239f90250c050b2ab2eed6daa99",
          "message": "📚 Doc: Correct the figure link in READMEs (#2312)",
          "timestamp": "2023-01-26T11:57:25+03:00",
          "tree_id": "44265bd252c76e11484339b56f197d3215df81e2",
          "url": "https://github.com/gofiber/fiber/commit/b564f944013ca239f90250c050b2ab2eed6daa99"
        },
        "date": 1674724090339,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 674.5,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1643281 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3275,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "345202 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3356,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "341178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7937221 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 51.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21686688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 70.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16951276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22365656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 210.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5684935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 274.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3663330 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "535991053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 978.9,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1215718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 767.3,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1566895 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2676,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "411982 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1380,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "787270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1247,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "893186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 114.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10307083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8603990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 115.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10356032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 290.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4118056 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1713,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "716688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 513.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2351499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 113.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10386364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 154.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7659752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 229.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5148423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 212.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5103398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 423.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2816460 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31453370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 82.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14472042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 36.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "31138006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 42.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28784988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 689.2,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1727613 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16125096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 298.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4009558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4446,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "255075 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77496705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 137.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8648089 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 292,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4080405 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 403.1,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2968605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2024,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "552554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 155.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7447580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1147,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "899566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 232.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5113702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 747.4,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1597570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 785.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1503354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 779.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1518991 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 775.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1547205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 183.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6533989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.673,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211467294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22202571 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 39.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29996064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 92.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12757317 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 103.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11514258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 37.78,
            "unit": "ns/op\t      67 B/op\t       0 allocs/op",
            "extra": "27743806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 156.5,
            "unit": "ns/op\t      92 B/op\t       1 allocs/op",
            "extra": "8090949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24197410 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 10.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3953,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "281346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3478,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "325117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4329,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4339,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "263427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1121,
            "unit": "ns/op\t     784 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3307,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "344252 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3382,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "338666 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 141.4,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8483205 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 46.24,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25786992 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 60.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19897650 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "296688000 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.015,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "159102040 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.772,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192076456 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 970.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1284687 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 848.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1414508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 155.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7580392 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7940996 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 613.6,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1957590 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 611.8,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1953247 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 678776,
            "unit": "ns/op\t  372992 B/op\t    5608 allocs/op",
            "extra": "1729 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 92.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13087239 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45992006 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373374379 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.757,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "434196554 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 143.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8322409 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 207.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5678275 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 144.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8256361 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 249265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4706 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212072,
            "unit": "ns/op\t   24550 B/op\t    1000 allocs/op",
            "extra": "5590 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 178969,
            "unit": "ns/op\t     737 B/op\t       0 allocs/op",
            "extra": "6603 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 447.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2678179 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 401.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2993800 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 826.5,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1475492 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 508.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2362879 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1775,
            "unit": "ns/op\t     311 B/op\t       7 allocs/op",
            "extra": "835638 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2277,
            "unit": "ns/op\t     569 B/op\t       7 allocs/op",
            "extra": "805068 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1439,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "865284 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1605,
            "unit": "ns/op\t     259 B/op\t       5 allocs/op",
            "extra": "784663 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1807,
            "unit": "ns/op\t     348 B/op\t       5 allocs/op",
            "extra": "904330 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 111.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10619883 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 97.35,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "12230008 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 46.88,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "25206747 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.89,
            "unit": "ns/op\t 653.57 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "60332862 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 45.28,
            "unit": "ns/op\t 287.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26470604 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 732.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1699819 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 123.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9936476 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 471.4,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2546378 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 314,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3794700 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 363.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3264162 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 691.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1747981 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 410.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2894587 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 786.9,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "1460142 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23306,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23362,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50760 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18182325 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 137.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8690702 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29075817 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 157.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7761548 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58663785 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 19.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "55409215 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.42,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "59805181 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53533321 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 29.76,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37829444 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.29,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37368680 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12445671 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 281.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4229144 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 62.98,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18791898 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 437.6,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2720058 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 32.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36148986 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8037,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.55,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "43957814 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.608,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746904105 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 29.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38511159 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 67.47,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "16809312 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 80.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14927842 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 148.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8022376 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17777076 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147519672 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "995927419 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 9.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "120836692 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 27.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45012500 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 66.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17588114 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 105.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11832879 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 141,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8423524 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 104,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11530396 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 324.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3699303 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 80.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14678132 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 318,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3753807 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.241,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372755986 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.595,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "262751456 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373037916 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.426,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "220308492 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149397705 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.636,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "124435605 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12452584 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 247.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4968660 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4267,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21807991 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pan93412@gmail.com",
            "name": "pan93412",
            "username": "pan93412"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7327a17951228f6ea8e36b160e78218f7dbd46ed",
          "message": "📚 Docs: Rework Chinese (Taiwan) translation of documentation (#2310)\n\n* 📚 Doc: Reset zh_TW translation\r\n\r\n* 📚 Doc: 1st revision of Chinese (Taiwan) translation\r\n\r\n* 📚 Doc: Language Flag\r\n\r\n* 📚 Doc: 2nd rev. of Chinese (Taiwan) translation\r\n\r\n* 📚 Doc: Translated the middlewares list\r\n\r\n* Docs: Fixup space\r\n\r\n* 📚 Doc: Correct the figure link in READMEs\r\n\r\n* 📚 Doc: Update according to review suggestions\r\n\r\n* 📚 Doc: Update according to review suggestions",
          "timestamp": "2023-01-27T00:30:49+08:00",
          "tree_id": "2e184fca894f4c40378f82f666250575dde4fc3e",
          "url": "https://github.com/gofiber/fiber/commit/7327a17951228f6ea8e36b160e78218f7dbd46ed"
        },
        "date": 1674751309258,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1154,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3294,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "352183 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3351,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "334706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 143.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8276683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16984486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 71.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16741723 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 53.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22597462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 210.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5677630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 276.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3979348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.249,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "525922371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 984.5,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1216683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 765,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1562899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2698,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "420565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1385,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "785442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1253,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "870718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 115.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10457406 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 140.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8532379 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10410258 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 293.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "4105755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1666,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "627568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 511.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2341339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 114.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10389776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 156.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7527632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 230.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5140705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 214.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5600744 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 423.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "2823226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 37.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31053327 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 82.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14382693 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 36.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "31506812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 41.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28606162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 693.1,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1788530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16400652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 299.2,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "3987276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4452,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "255268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77624162 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 137.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8654702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 291.7,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4073904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 405.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "2929108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2003,
            "unit": "ns/op\t    4584 B/op\t      10 allocs/op",
            "extra": "521226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 155.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7457624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1155,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "896773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 233.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5100504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 748.1,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1595955 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 799.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1504081 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 795.4,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1537705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 776.7,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1543452 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 184.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6455035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211700652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 54.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22122538 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 39.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30933562 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 92.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12863413 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 103.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11456466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 39.12,
            "unit": "ns/op\t      70 B/op\t       0 allocs/op",
            "extra": "26492512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 149.6,
            "unit": "ns/op\t      94 B/op\t       1 allocs/op",
            "extra": "7841166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 48.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24824974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "127766937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3961,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "286622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3515,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "308653 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4378,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264501 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4360,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "264002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1175,
            "unit": "ns/op\t     785 B/op\t       8 allocs/op",
            "extra": "899610 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3338,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "341787 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3415,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "334489 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 142,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8421273 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 44.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "25825556 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 60.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19938986 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.061,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "297246022 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.438,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "159957454 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.727,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "208309910 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 938.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1303882 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 855.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1402141 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 156.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7471050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8205963 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 618.5,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1950420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 616,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1942730 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 706539,
            "unit": "ns/op\t  373001 B/op\t    5608 allocs/op",
            "extra": "1705 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13142415 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45127534 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373150171 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.764,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "427253139 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 146.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8235206 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 209,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5742076 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 143.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8216864 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 248983,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4742 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 212196,
            "unit": "ns/op\t   24524 B/op\t    1000 allocs/op",
            "extra": "5557 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 178774,
            "unit": "ns/op\t     676 B/op\t       0 allocs/op",
            "extra": "6654 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 448.8,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2672936 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 400.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "3007170 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 811.4,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1493362 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 505.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2366227 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1822,
            "unit": "ns/op\t     316 B/op\t       7 allocs/op",
            "extra": "791634 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2036,
            "unit": "ns/op\t     588 B/op\t       7 allocs/op",
            "extra": "764505 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1435,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "852652 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1625,
            "unit": "ns/op\t     255 B/op\t       5 allocs/op",
            "extra": "821174 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1894,
            "unit": "ns/op\t     351 B/op\t       5 allocs/op",
            "extra": "890346 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 107.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10922175 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 101.3,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "12185905 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 47.43,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "25189070 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.99,
            "unit": "ns/op\t 650.23 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "60488736 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 45.25,
            "unit": "ns/op\t 287.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26538686 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 704.5,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1694226 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9857053 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 472.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2528968 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 316.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3762402 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 361.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3293251 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 692.6,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1737144 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 407.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2925210 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 730.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1646721 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 23386,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50967 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 23510,
            "unit": "ns/op\t    8662 B/op\t     208 allocs/op",
            "extra": "50726 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18204182 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 142.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8433751 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29059480 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 153.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7767596 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 19.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57879566 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.07,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "56363418 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.49,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58408357 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 20.77,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "53277202 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 29.96,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37916959 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 30.45,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37546808 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12432073 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 284.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4198450 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 63.03,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18489097 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 441.2,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2740429 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 33.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35699510 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.77,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44382298 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746210964 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 29.41,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38286418 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 67.68,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "17428582 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 77.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15469934 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 150.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8072078 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 66.68,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17582413 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147258892 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994989200 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 9.154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129717628 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 26.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44667276 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 67.41,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17532218 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 101.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11832240 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 142,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8356479 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 103.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11362148 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 325.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3668390 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 79.95,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14826049 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 319.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3740146 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "368242773 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.611,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "254960462 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373102917 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 5.424,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "218776676 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.066,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149291758 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 9.594,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "125364072 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12345396 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 249.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4807771 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4249,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 57.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20822338 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "committer": {
            "email": "efectn@protonmail.com",
            "name": "Muhammed Efe Çetin",
            "username": "efectn"
          },
          "distinct": true,
          "id": "d5ecf06286968ec93a37693dbde3d338cd70dfd8",
          "message": "fix benchmarks",
          "timestamp": "2023-02-02T22:37:59+03:00",
          "tree_id": "da236d195f16932cae562b9f58d5627ab211ae12",
          "url": "https://github.com/gofiber/fiber/commit/d5ecf06286968ec93a37693dbde3d338cd70dfd8"
        },
        "date": 1675367346774,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AcquireCtx",
            "value": 1271,
            "unit": "ns/op\t    1568 B/op\t       5 allocs/op",
            "extra": "790476 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag",
            "value": 3286,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "348064 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 3336,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "343958 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7950756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20168169 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 81.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14825235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 59.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19983547 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 244.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4934842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Attachment",
            "value": 270.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "4345384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 2.285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "517251074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Body_With_Compression",
            "value": 959.6,
            "unit": "ns/op\t     144 B/op\t       7 allocs/op",
            "extra": "1245500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_JSON",
            "value": 746.6,
            "unit": "ns/op\t     240 B/op\t       6 allocs/op",
            "extra": "1603662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_XML",
            "value": 2593,
            "unit": "ns/op\t    1160 B/op\t      24 allocs/op",
            "extra": "439426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_Form",
            "value": 1415,
            "unit": "ns/op\t     360 B/op\t      13 allocs/op",
            "extra": "773316 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyParser_MultipartForm",
            "value": 1305,
            "unit": "ns/op\t     328 B/op\t      12 allocs/op",
            "extra": "898984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 117.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10198738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 139.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8558536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9464604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 302.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "3914950 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1860,
            "unit": "ns/op\t    4480 B/op\t       7 allocs/op",
            "extra": "584053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_StaleEtag",
            "value": 572.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2107465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Fresh_WithNoCache",
            "value": 133.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8981466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 150.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "7883712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6",
            "value": 224.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5314161 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_With_IP_Validation",
            "value": 200.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5966593 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs_v6_With_IP_Validation",
            "value": 396.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "3015805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader",
            "value": 43.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26784801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP_With_ProxyHeader_and_IP_Validation",
            "value": 87.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13684921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IP",
            "value": 37.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "31007563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 45.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26096133 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_MultipartForm",
            "value": 643.6,
            "unit": "ns/op\t      48 B/op\t       4 allocs/op",
            "extra": "1855401 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17090565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AllParams",
            "value": 291.9,
            "unit": "ns/op\t     336 B/op\t       2 allocs/op",
            "extra": "4086981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ParamsParse",
            "value": 4302,
            "unit": "ns/op\t     816 B/op\t      39 allocs/op",
            "extra": "268816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 14.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82222342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 136.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8676051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 288.9,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "4214835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 395.5,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3041365 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XML",
            "value": 2237,
            "unit": "ns/op\t    4600 B/op\t      10 allocs/op",
            "extra": "512656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 140.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8172146 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderWithLocalsAndBinding",
            "value": 1175,
            "unit": "ns/op\t     448 B/op\t       7 allocs/op",
            "extra": "880605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRoute",
            "value": 235.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "5055852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RedirectToRouteWithQueries",
            "value": 731.3,
            "unit": "ns/op\t     376 B/op\t       4 allocs/op",
            "extra": "1642994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderLocals",
            "value": 780,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1532002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_RenderBind",
            "value": 769.5,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1556404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Render_Engine",
            "value": 762,
            "unit": "ns/op\t     416 B/op\t       5 allocs/op",
            "extra": "1576407 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Get_Location_From_Route",
            "value": 178.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6696442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 5.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226073518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Set",
            "value": 58.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20571757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 43.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27706826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 100.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11868318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 112.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10513732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 40.99,
            "unit": "ns/op\t      76 B/op\t       0 allocs/op",
            "extra": "24446208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Writef",
            "value": 141.3,
            "unit": "ns/op\t      82 B/op\t       1 allocs/op",
            "extra": "7429495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_XHR",
            "value": 53.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22024078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_SendString_B",
            "value": 9.405,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "126876422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser",
            "value": 3792,
            "unit": "ns/op\t     856 B/op\t      38 allocs/op",
            "extra": "301809 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_parseQuery",
            "value": 3314,
            "unit": "ns/op\t     752 B/op\t      29 allocs/op",
            "extra": "346093 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_QueryParser_Comma",
            "value": 4130,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "276765 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_ReqHeaderParser",
            "value": 4112,
            "unit": "ns/op\t     928 B/op\t      44 allocs/op",
            "extra": "280603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BodyStreamWriter",
            "value": 1202,
            "unit": "ns/op\t     794 B/op\t       8 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 3345,
            "unit": "ns/op\t    1044 B/op\t       3 allocs/op",
            "extra": "352024 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 3389,
            "unit": "ns/op\t    1068 B/op\t       4 allocs/op",
            "extra": "340642 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 143.6,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8359701 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_Unescape",
            "value": 51.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "23072899 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_IsNoCache",
            "value": 58.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20530340 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/indexBytes",
            "value": 4.023,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298170654 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/forEach",
            "value": 7.158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "161416250 times\n2 procs"
          },
          {
            "name": "Benchmark_SlashRecognition/IndexRune",
            "value": 5.894,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201419161 times\n2 procs"
          },
          {
            "name": "Benchmark_App_MethodNotAllowed",
            "value": 900.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1334985 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 891.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1347352 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 162.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7475055 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 148.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8123402 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 614,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1952876 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_WithCompression",
            "value": 611.2,
            "unit": "ns/op\t      48 B/op\t       3 allocs/op",
            "extra": "1952868 times\n2 procs"
          },
          {
            "name": "Benchmark_Startup_Process",
            "value": 704679,
            "unit": "ns/op\t  373001 B/op\t    5608 allocs/op",
            "extra": "1687 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 91.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13055349 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 26.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46347338 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 3.213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373462233 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 2.734,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "437932846 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8119444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Unescape",
            "value": 225.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5261336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 147.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8196387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 246703,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4743 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory/fiber_memory",
            "value": 218578,
            "unit": "ns/op\t   24570 B/op\t    1000 allocs/op",
            "extra": "5410 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory",
            "value": 176618,
            "unit": "ns/op\t     669 B/op\t       0 allocs/op",
            "extra": "6727 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_BasicAuth",
            "value": 481.3,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2488143 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache",
            "value": 431.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2772028 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_Storage",
            "value": 862.9,
            "unit": "ns/op\t     176 B/op\t       5 allocs/op",
            "extra": "1466258 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_AdditionalHeaders",
            "value": 537.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "2231031 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Disabled",
            "value": 1789,
            "unit": "ns/op\t     310 B/op\t       7 allocs/op",
            "extra": "844185 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/Unlim",
            "value": 2013,
            "unit": "ns/op\t     569 B/op\t       7 allocs/op",
            "extra": "805856 times\n2 procs"
          },
          {
            "name": "Benchmark_Cache_MaxSize/LowBounded",
            "value": 1451,
            "unit": "ns/op\t     231 B/op\t       7 allocs/op",
            "extra": "768990 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_Check",
            "value": 1787,
            "unit": "ns/op\t     355 B/op\t       5 allocs/op",
            "extra": "877918 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_CSRF_GenerateToken",
            "value": 1780,
            "unit": "ns/op\t     347 B/op\t       5 allocs/op",
            "extra": "908857 times\n2 procs"
          },
          {
            "name": "Benchmark_Etag",
            "value": 121.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9777912 times\n2 procs"
          },
          {
            "name": "Benchmark_Middleware_Favicon",
            "value": 105.7,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "11242616 times\n2 procs"
          },
          {
            "name": "BenchmarkMarshalMsgresponse",
            "value": 48.26,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "24584059 times\n2 procs"
          },
          {
            "name": "BenchmarkAppendMsgresponse",
            "value": 19.31,
            "unit": "ns/op\t 673.37 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "60931130 times\n2 procs"
          },
          {
            "name": "BenchmarkUnmarshalresponse",
            "value": 42.83,
            "unit": "ns/op\t 303.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "28037823 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/hit",
            "value": 715.1,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "1670835 times\n2 procs"
          },
          {
            "name": "Benchmark_Idempotency/skip",
            "value": 129.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9246453 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter_Custom_Store",
            "value": 491.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "2450288 times\n2 procs"
          },
          {
            "name": "Benchmark_Limiter",
            "value": 330.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "3684494 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/Base",
            "value": 376,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3219212 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/DefaultFormat",
            "value": 704.4,
            "unit": "ns/op\t      15 B/op\t       1 allocs/op",
            "extra": "1710230 times\n2 procs"
          },
          {
            "name": "Benchmark_Logger/WithTagParameter",
            "value": 415,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2892016 times\n2 procs"
          },
          {
            "name": "Benchmark_Monitor",
            "value": 751,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "1470331 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/default",
            "value": 22963,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51624 times\n2 procs"
          },
          {
            "name": "Benchmark_Session/storage",
            "value": 22996,
            "unit": "ns/op\t    8534 B/op\t     207 allocs/op",
            "extra": "51204 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/fiber",
            "value": 65.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18062281 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLowerBytes/default",
            "value": 139.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8571852 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/fiber",
            "value": 41.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28972820 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpperBytes/default",
            "value": 154,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "7696045 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/fiber",
            "value": 20.28,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57237532 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRightBytes/default",
            "value": 20.92,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "54162717 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/fiber",
            "value": 18.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "58540400 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeftBytes/default",
            "value": 21.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "51324909 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/fiber",
            "value": 28.25,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40336747 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimBytes/default",
            "value": 29.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "38416047 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/fiber",
            "value": 96.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12443816 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFoldBytes/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10257698 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/fiber",
            "value": 63.86,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "18387258 times\n2 procs"
          },
          {
            "name": "Benchmark_UUID/default",
            "value": 438.7,
            "unit": "ns/op\t     168 B/op\t       6 allocs/op",
            "extra": "2726149 times\n2 procs"
          },
          {
            "name": "Benchmark_ConvertToBytes/fiber",
            "value": 30.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39170949 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/unsafe",
            "value": 0.8035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeString/default",
            "value": 25.03,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44682000 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/unsafe",
            "value": 1.607,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "746283447 times\n2 procs"
          },
          {
            "name": "Benchmark_UnsafeBytes/default",
            "value": 31.61,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "35939076 times\n2 procs"
          },
          {
            "name": "Benchmark_ToString",
            "value": 75.29,
            "unit": "ns/op\t      40 B/op\t       2 allocs/op",
            "extra": "15664862 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/fiber",
            "value": 72.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16463012 times\n2 procs"
          },
          {
            "name": "Benchmark_GetMIME/default",
            "value": 150.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7949239 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/vendorContentType",
            "value": 64.75,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "18135823 times\n2 procs"
          },
          {
            "name": "Benchmark_ParseVendorSpecificContentType/defaultContentType",
            "value": 8.046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146568510 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/fiber",
            "value": 1.206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "994733004 times\n2 procs"
          },
          {
            "name": "Benchmark_StatusMessage/default",
            "value": 4.017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298401398 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/fiber",
            "value": 26.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43597441 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv4/default",
            "value": 70.11,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16755733 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/fiber",
            "value": 102.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11664026 times\n2 procs"
          },
          {
            "name": "Benchmark_IsIPv6/default",
            "value": 140.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "8464028 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/fiber",
            "value": 102.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "11295082 times\n2 procs"
          },
          {
            "name": "Benchmark_ToUpper/default",
            "value": 383.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3149524 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/fiber",
            "value": 82.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14522472 times\n2 procs"
          },
          {
            "name": "Benchmark_ToLower/default",
            "value": 310,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "3845856 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/fiber",
            "value": 3.253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "369405552 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimRight/default",
            "value": 4.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "258208456 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/fiber",
            "value": 3.638,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "331214241 times\n2 procs"
          },
          {
            "name": "Benchmark_TrimLeft/default",
            "value": 6.027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199158508 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/fiber",
            "value": 8.032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "149201959 times\n2 procs"
          },
          {
            "name": "Benchmark_Trim/default",
            "value": 8.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "144102128 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/fiber",
            "value": 96.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12362641 times\n2 procs"
          },
          {
            "name": "Benchmark_EqualFold/default",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10326009 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.4218,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 54.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21900726 times\n2 procs"
          }
        ]
      }
    ]
  }
}