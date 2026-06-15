import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxStar {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.98 1.25L6.96 1.3L5.59 4.6C5.54 4.7 5.45 4.78 5.33 4.78L1.77 5.07L1.72 5.07L1.39 5.1L1.09 5.12C0.82 5.15 0.71 5.48 0.91 5.65L1.14 5.85L1.4 6.06L1.44 6.1L4.15 8.42C4.24 8.5 4.27 8.61 4.25 8.72L3.42 12.2L3.41 12.25L3.33 12.57L3.26 12.87C3.2 13.13 3.48 13.33 3.71 13.19L3.96 13.03L4.25 12.86L4.3 12.83L7.34 10.97C7.44 10.91 7.56 10.91 7.66 10.97L10.71 12.83L10.75 12.86L11.04 13.03L11.29 13.19C11.52 13.33 11.8 13.13 11.74 12.87L11.67 12.57L11.59 12.25L11.58 12.2L10.75 8.72C10.73 8.61 10.76 8.5 10.85 8.42L13.56 6.1L13.6 6.06L13.86 5.85L14.09 5.65C14.29 5.48 14.18 5.15 13.91 5.12L13.61 5.1L13.28 5.07L13.23 5.07L9.67 4.78C9.55 4.78 9.46 4.7 9.41 4.6L8.04 1.3L8.02 1.25L7.89 0.94L7.78 0.67C7.67 0.42 7.33 0.42 7.22 0.67L7.11 0.94L6.98 1.25ZM7.5 2.6L6.51 4.98C6.32 5.43 5.9 5.74 5.41 5.78L2.84 5.99L4.8 7.66C5.17 7.98 5.33 8.48 5.22 8.95L4.62 11.46L6.82 10.12C7.24 9.86 7.76 9.86 8.18 10.12L10.38 11.46L9.78 8.95C9.67 8.48 9.83 7.98 10.2 7.66L12.16 5.99L9.59 5.78C9.1 5.74 8.68 5.43 8.49 4.98L7.5 2.6Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxStar;
