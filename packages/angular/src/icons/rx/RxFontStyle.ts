import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-font-style",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxFontStyle {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.04 9.98C0.93 9.66 1.12 9.38 1.4 9.25C1.68 9.12 2.09 9.13 2.27 9.45C2.85 10.51 3.65 10.73 4.49 10.73C5.53 10.73 6.3 10.26 6.3 9.45C6.3 8.8 5.91 8.46 4.87 8.14L4.16 7.92C2.65 7.45 1.89 6.69 1.89 5.46C1.89 3.8 3.28 2.69 5.24 2.69C6.92 2.69 7.97 3.34 8.44 4.31C8.57 4.59 8.58 4.91 8.23 5.19C7.88 5.47 7.52 5.35 7.23 5.04C6.47 4.23 6 4.05 5.26 4.05C4.14 4.05 3.55 4.64 3.55 5.28C3.55 5.87 3.96 6.23 4.95 6.53L5.68 6.76C7.23 7.23 7.97 7.96 7.97 9.17C7.97 10.77 6.69 12.09 4.46 12.09C2.87 12.09 1.4 11.11 1.04 9.98ZM11.85 8.78C10.66 8.4 10.16 7.86 10.16 6.99C10.16 5.87 11.16 5.05 12.61 5.05C13.85 5.05 14.66 5.63 14.98 6.63C15.04 6.85 14.96 6.98 14.75 7.05C14.54 7.12 14.32 7.1 14.24 6.9C13.94 6.12 13.35 5.76 12.6 5.76C11.65 5.76 11.01 6.25 11.01 6.92C11.01 7.45 11.35 7.75 12.25 8.04L12.83 8.23C14.06 8.63 14.55 9.14 14.55 10.02C14.55 11.2 13.48 12.04 11.99 12.04C10.64 12.04 9.66 11.28 9.42 10.34C9.37 10.12 9.41 10.03 9.7 9.96C9.99 9.89 10.07 9.9 10.17 10.14C10.46 10.81 11.15 11.33 12.03 11.33C12.99 11.33 13.68 10.78 13.68 10.06C13.68 9.54 13.4 9.29 12.44 8.98L11.85 8.78Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxFontStyle;
