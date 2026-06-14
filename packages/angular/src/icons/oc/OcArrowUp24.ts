import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-up-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowUp24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.66 10.41a0.750.75 0 0 1-1.06 0l-4.97-4.97v14.44a0.750.75 0 0 1-1.5 0V5.44l-4.97 4.97a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73l6.25-6.25a0.750.75 0 0 1 1.06 0l6.25 6.25a0.750.75 0 0 1 0 1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowUp24;
