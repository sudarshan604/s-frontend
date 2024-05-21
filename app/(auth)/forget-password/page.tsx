import React from "react";
import TextInput from "@/components/shared/TextInput";

const page = () => {
  return (
    <div>
      <TextInput label="email" name="email" type="email" register={register} />
    </div>
  );
};

export default page;
