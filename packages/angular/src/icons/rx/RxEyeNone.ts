import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-eye-none",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxEyeNone {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.35 2.35C13.55 2.16 13.55 1.84 13.35 1.65C13.16 1.45 12.84 1.45 12.65 1.65L10.68 3.61C9.71 3.22 8.64 3 7.5 3C4.31 3 1.66 4.71 0.08 7.24C-0.03 7.4 -0.03 7.6 0.08 7.77C0.9 9.09 2.02 10.19 3.36 10.93L1.65 12.65C1.45 12.84 1.45 13.16 1.65 13.35C1.84 13.55 2.16 13.55 2.35 13.35L4.32 11.39C5.29 11.78 6.36 12 7.5 12C10.69 12 13.34 10.29 14.92 7.77C15.03 7.6 15.03 7.4 14.92 7.24C14.1 5.91 12.98 4.81 11.64 4.07L13.35 2.35ZM9.9 4.39C9.15 4.14 8.35 4 7.5 4C4.8 4 2.53 5.38 1.1 7.5C1.87 8.65 2.9 9.58 4.1 10.19L9.9 4.39ZM5.1 10.61L10.9 4.81C12.1 5.42 13.13 6.35 13.9 7.5C12.47 9.62 10.2 11 7.5 11C6.65 11 5.85 10.86 5.1 10.61Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxEyeNone;
