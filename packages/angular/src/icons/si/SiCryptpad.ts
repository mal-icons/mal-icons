import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cryptpad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCryptpad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.36 0 0.010.720.15 12.23c0.05 3.67 1.53 6.09 3.43 7.69 1.9 1.6 4.17 2.44 5.84 3.22l0.320.150.31-0.16c1.49-0.79 3.78-1.62 5.72-3.21 1.94-1.58 3.52-4 3.52-7.69V5.97L15.22 0Zm9.73 1.42h1.6v6.02h6.54v3.88H15.4c-0.05 1.09-0.59 1.93-1.26 2.48l0.94 4.97h-2.99v3.66l-0.020.01c-1.69-0.76-3.65-1.55-5.21-2.87-1.65-1.4-2.88-3.32-2.92-6.63l-0.02-1.62h4.67c0-0.05-0.01-0.11-0.01-0.16a3.42 3.42 0 0 1 3.41-3.41l0.10zm3.020.41 4.51 4.19h-4.51zm-3.11 6.91a2.41 2.41 0 0 0-1.04 4.59l-0.84 4.45h3.77l-0.84-4.45a2.41 2.41 0 0 0-1.04-4.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCryptpad;
