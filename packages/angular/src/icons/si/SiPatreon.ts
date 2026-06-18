import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-patreon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPatreon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.96 7.21c0-3.06-2.39-5.58-5.19-6.48-3.48-1.12-8.06-0.96-11.380.6C2.36 3.23 1.09 7.39 1.05 11.54c-0.04 3.410.3 12.4 5.37 12.46 3.770.05 4.33-4.8 6.07-7.14 1.24-1.66 2.84-2.13 4.8-2.62 3.38-0.84 5.68-3.5 5.67-7.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPatreon;
