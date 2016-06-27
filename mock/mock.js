

module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin1$/,
      respondwith: './livelist1.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin2$/,
      respondwith: './livelist2.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin3$/,
      respondwith: './livelist3.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin4$/,
      respondwith: './livelist4.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh$/,
      respondwith: './livelist-refresh.json'
    },
    {
      pattern: /\/api\/getLiveDetail.php\?id=1$/,
      respondwith: './detail.json'
    },
    {
      pattern: /\/api\/getLiveDetail.php\?id=2$/,
      respondwith: './detail2.json'
    }
  ]
};
