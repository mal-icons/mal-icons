import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-home-modern",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiHomeModern {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.25 21v-4.87c0-0.620.5-1.12 1.13-1.12h2.25c0.62 0 1.130.5 1.13 1.13V21m0 0h4.5V3.55M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.64M18.75 3l-1.50.55m0 6.21 3 1m1.50.5-1.5-0.5M6.75 7.36V3h-3v18m3-13.64 10.5-3.82"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiHomeModern;
