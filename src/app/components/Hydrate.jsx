"use client";
import React from "react";
import { HydrationBoundary } from "@tanstack/react-query";

function Hydrate(props) {
	return <HydrationBoundary {...props} />;
}

export default Hydrate;
