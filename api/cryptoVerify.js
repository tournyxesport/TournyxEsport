const WALLET =
"0x3021AF173Aa69C8b66C7850aa6C6DFc3F66C4233";

export default async function handler(req,res){

  const { txHash, amount } = req.body;

  if(!txHash){

    return res.status(400).json({
      success:false
    });

  }

  return res.json({

    success:true,

    wallet:WALLET,

    amount

  });

}