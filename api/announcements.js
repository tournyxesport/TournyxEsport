import { supabase } from "../lib/supabase.js";

export default async function handler(req,res){

  if(req.method === "GET"){

    const { data } =
      await supabase
      .from("announcements")
      .select("*");

    return res.json(data);

  }

  if(req.method === "POST"){

    const { data } =
      await supabase
      .from("announcements")
      .insert([req.body]);

    return res.json(data);

  }

}