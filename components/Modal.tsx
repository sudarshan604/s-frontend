import React from "react";
import FocusLock from "react-focus-lock";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { cx } from "@/utils";
// import { createPortal } from "react-dom";
import { ButtonProps } from "./Button";
import Button from "./Button";
interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  size: "small" | "medium" | "large";
  tone: ButtonProps["tone"];
  slideFrom?: "top" | "right" | "bottom" | "left";
  actions?: {
    cancel?: {
      label: string;
      action: () => void;
    };
    confirm?: {
      label: string;
      action: () => void;
    };
  };
}

const SizeClasses: Record<ModalProps["size"], string> = {
  small: "sm:max-w-sm",
  medium: "sm:max-w-lg",
  large: "sm:max-w-2xl",
};

const toneClasses: Record<ModalProps["tone"], string> = {
  default: "bg-indigo-300",
  danger: "bg-red-300",
  success: "bg-green-300",
};

const Modal = ({
  children,
  onClose,
  open = false,
  size = "medium",
  title,
  tone = "default",
  actions,
}: ModalProps) => {
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const currentlyFocusELement = document.activeElement;
    closeBtnRef.current?.focus();

    return () => {
      currentlyFocusELement?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!open) {
    return <></>;
  }

  return (
    <FocusLock>
      <RemoveScrollBar />
      <div className="relative z-10">
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={cx(
              "fixed inset-0 bg-opacity-75 transition-opacity",
              toneClasses[tone]
            )}
            onClick={onClose}
          ></div>
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={cx(
                "relative w-full overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8",
                SizeClasses[size]
              )}
            >
              <div className="bg-white p-4 sm:p-6">
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-semibold leading-6 text-slate-900">
                    {title}
                  </h2>
                  {children}
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t p-4 sm:flex-row-reverse">
                {actions?.confirm && (
                  <Button
                    tone={tone}
                    impact={"bold"}
                    size={"small"}
                    shape={"square"}
                    onClick={actions?.confirm.action}
                  >
                    <span>{actions?.confirm.label}</span>
                  </Button>
                )}
                {actions?.cancel && (
                  <Button
                    ref={closeBtnRef}
                    impact="none"
                    tone={tone}
                    size={"small"}
                    shape={"square"}
                    onClick={actions.cancel.action}
                  >
                    <span>{actions.cancel.label}</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusLock>
  );
};

export default Modal;
