"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import {CircularProgress} from "@nextui-org/react";

const Signup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isPasswordTooShort = (password: string) => password.length < 8;
  const hasUppercase = (password: string) => /[A-Z]/.test(password);
  const hasSpecialChar = (password: string) => /[^A-Za-z0-9_]/.test(password);

  const validatePassword = (password: string) => {
    if (password.length == 0) {
      return null;
    }
    if (isPasswordTooShort(password)) {
      return "Password is too short. It must be at least 8 characters long.";
    }
    if (!hasUppercase(password)) {
      return "Password must contain at least one uppercase character.";
    }
    if (!hasSpecialChar(password)) {
      return "Password must contain at least one special character.";
    }
    return null;
  };

  const passwordError = React.useMemo(() => {
    return validatePassword(password) || "";
  }, [password]);

  const isPasswordInvalid = React.useMemo(() => {
    return !!passwordError;
  }, [passwordError]);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div
      className="bg-black"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="headphones.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-3xl">Sign up</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Input
            value={email}
            type="email"
            label="Email"
            variant="bordered"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            errorMessage={isInvalid && "Please enter a valid email"}
            onValueChange={setEmail}
            className="w-80 pb-5"
          />
          <Input
            label="Password"
            variant="bordered"
            className="w-80"
            isInvalid={isPasswordInvalid}
            color={passwordError ? "danger" : "success"}
            errorMessage={passwordError}
            onValueChange={setPassword}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <Button size="md" className="bg-amber-600">
                Sign up
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
              <CircularProgress label="Signing up..." />
              </div>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
