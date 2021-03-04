const elasticsearch=require('elasticsearch');

const client = new elasticsearch.Client( {  
    host:
      'https://elastic:KWdYx92KEP7Zpvf5ryse2OdT@8b73e8748d164187bd8cd906f8ed800f.us-west-2.aws.found.io:9243/'
  });


    // const client = new elasticsearch.Client({
    //     node: 'https://8b73e8748d164187bd8cd906f8ed800f.us-west-2.aws.found.io:9243',
    //     auth: {
    //       username: 'elastic',
    //       password: 'KWdYx92KEP7Zpvf5ryse2OdT'
    //     }
    //   })


async function Index (indexName, jsonObj)
{

    // client.index({  
    //     index:indexName,
    //     body: jsonObj
    //   },function(err,resp) {

    //     if (err)
    //     console.log(err);
    //     else
    //       console.log(resp);
    //   });

    let result = await client.index({  
        index:indexName,
        body: jsonObj
      });
      console.log(indexName);
      console.log(jsonObj);
      console.log(result);

}
  



  module.exports.Index =  Index; 