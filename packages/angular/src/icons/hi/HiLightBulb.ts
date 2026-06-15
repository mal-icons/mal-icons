import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-light-bulb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiLightBulb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-0.19m-1.50.19a6.01 6.01 0 0 1-1.5-0.19m3.75 7.48a12.06 12.06 0 0 1-4.5 0m3.75 2.38a14.41 14.41 0 0 1-3 0M14.25 18v-0.19c0-0.980.66-1.82 1.51-2.32a7.5 7.5 0 1 0-7.52 0c0.850.49 1.51 1.33 1.51 2.32V18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiLightBulb;
