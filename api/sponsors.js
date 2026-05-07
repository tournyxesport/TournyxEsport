import { supabase } from "../lib/supabase.js";

export default async function handler(req,res){

  if(req.method === "GET"){

    const { data } =
      await supabase
      .from("sponsors")
      .select("*");

    return res.json(data);

  }

  if(req.method === "POST"){

    const { data } =
      await supabase
      .from("sponsors")
      .insert([req.body]);

    return res.json(data);

  }

}