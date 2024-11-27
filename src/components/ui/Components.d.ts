import React from "react";

export interface BadgeType extends React.HTMLAttributes<HTMLSpanElement> {
    variant?:  "custom" | "outline" | "sucess" | "danger" | "beta" | "info" | "discord" 
    props?: React.HTMLAttributes<HTMLSpanElement>
    children?: React.ReactNode;
}

export interface ButtonType extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "outline-info" | "outline-success" | "outline-danger" | "outline-primary" | "outline-secondary" | "outline-warn" | "info" | "success" | "danger" | "primary" |"secondary"
    children?: React.ReactNode;
    props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}