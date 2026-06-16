import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-mode-night",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrModeNight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.93 2.3c-2.04-0.5-4.02-0.35-5.770.28-0.720.26-0.91 1.22-0.31 1.71A9.94 9.94 0 0 1 9.5 12a9.94 9.94 0 0 1-3.65 7.71c-0.590.49-0.42 1.450.31 1.7 1.040.38 2.170.59 3.340.59 6.05 0 10.85-5.38 9.87-11.6-0.61-3.92-3.59-7.16-7.44-8.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrModeNight;
