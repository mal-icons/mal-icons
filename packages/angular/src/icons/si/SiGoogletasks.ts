import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googletasks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGoogletasks {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.380.62C5.10.62 0 5.71 0 12c0 6.29 5.1 11.38 11.38 11.38 6.29 0 11.38-5.1 11.38-11.38a11.34 11.34 0 0 0-0.88-4.39l-3.2 3.2c0.060.390.10.780.1 1.19a7.4 7.4 0 1 1-7.4-7.4c1.5 0 2.890.45 4.05 1.21l2.86-2.86a11.33 11.33 0 0 0-6.91-2.34zm9.670.76c-0.29 0-0.580.11-0.80.33-2.97 2.97-5.93 5.93-8.9 8.9L9.6 8.85a1.14 1.14 0 0 0-1.61 0l-1.77 1.77a1.14 1.14 0 0 0 0 1.61l4.17 4.16a1.42 1.42 0 0 0 2.01 0L23.67 5.12a1.14 1.14 0 0 0 0-1.61l-1.8-1.8a1.14 1.14 0 0 0-0.8-0.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGoogletasks;
