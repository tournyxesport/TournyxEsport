import { supabase } from "../lib/supabase.js";

export default async function handler(req,res){

  if(req.method === "GET"){

    const { data } =
      await supabase
      .from("tournaments")
      .select("*");

    return res.json(data);

  }

  if(req.method === "POST"){

    const { data } =
      await supabase
      .from("tournaments")
      .insert([req.body]);

    return res.json(data);

  }

}