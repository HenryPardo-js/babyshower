"use client"
import { useState } from "react";
import ButtonPausePlay from "@/components/ButtonPausePlay/ButtonPausePlay";

function ActionButtonPlay() {

  return (
    <div className="fixed top-4 left-4 md:top-4 md:left-4 md:bottom-auto md:right-auto bottom-4 right-4">
      <ButtonPausePlay />
    </div>
  );
}

export default ActionButtonPlay;
