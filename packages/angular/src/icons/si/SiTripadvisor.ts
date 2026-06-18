import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tripadvisor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTripadvisor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.01 4.3c-2.67 0-5.340.78-7.64 2.35H0l1.96 2.13a6 6 0 0 0 4.04 10.43 5.98 5.98 0 0 0 4.08-1.6L12 19.7l1.92-2.09a5.97 5.97 0 0 0 4.07 1.6 6 6 0 0 0 6-6 5.98 5.98 0 0 0-1.96-4.43L24 6.65h-4.35a13.57 13.57 0 0 0-7.64-2.35zM12 6.26c1.53 0 3.060.3 4.50.9C13.94 8.14 12 10.43 12 13.1c0-2.67-1.94-4.96-4.5-5.94A11.72 11.72 0 0 1 12 6.26zM6 9.16a4.06 4.06 0 1 1 0 8.12 4.06 4.06 0 0 1 0-8.12zm11.990a4.06 4.06 0 1 1 0 8.12 4.06 4.06 0 0 10-8.11zm-11.99 1.93a2.13 2.13 0 0 0 0 4.26 2.13 2.13 0 0 0 0-4.26zm11.99 0a2.13 2.13 0 0 0 0 4.26 2.13 2.13 0 0 0 0-4.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTripadvisor;
