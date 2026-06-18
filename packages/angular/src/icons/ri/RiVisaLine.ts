import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-visa-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVisaLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.22 15.77L22 14.64L19.48 14.64L19.08 15.76L17.07 15.76C18.36 12.65 19.32 10.35 19.95 8.85C20.12 8.46 20.41 8.26 20.84 8.26C21.16 8.26 21.7 8.26 22.44 8.26L24 15.76L22.22 15.77ZM20.05 13.1H21.67L21.06 10.28L20.05 13.1ZM7.06 8.26L9.09 8.26L5.95 15.77L3.9 15.77C3.21 13.09 2.7 11.1 2.38 9.81C2.28 9.41 2.08 9.14 1.7 9.01C1.36 8.89 0.79 8.71 0 8.47V8.26C1.48 8.26 2.56 8.26 3.24 8.26C3.8 8.26 4.12 8.53 4.23 9.09C4.33 9.64 4.6 11.06 5.03 13.34L7.06 8.26ZM11.87 8.26L10.27 15.77L8.34 15.76C8.38 15.58 8.91 13.08 9.94 8.26L11.87 8.26ZM15.78 8.12C16.36 8.12 17.08 8.3 17.5 8.47L17.17 10.02C16.79 9.87 16.17 9.66 15.64 9.67C14.88 9.68 14.41 10 14.41 10.31C14.41 10.81 15.23 11.06 16.07 11.6C17.03 12.22 17.15 12.78 17.14 13.39C17.13 14.64 16.07 15.88 13.83 15.88C12.81 15.86 12.44 15.78 11.61 15.48L11.96 13.86C12.81 14.21 13.17 14.33 13.89 14.33C14.56 14.33 15.13 14.06 15.13 13.59C15.13 13.26 14.93 13.1 14.19 12.68C13.44 12.27 12.4 11.71 12.41 10.56C12.43 9.1 13.82 8.12 15.78 8.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVisaLine;
