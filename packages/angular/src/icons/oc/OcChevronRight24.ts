import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-chevron-right-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcChevronRight24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.72 18.78a0.750.75 0 0 1 0-1.06L14.44 12 8.72 6.28a0.750.75 0 0 1 0.02-1.040.750.75 0 0 1 1.04-0.02l6.25 6.25a0.750.75 0 0 1 0 1.06l-6.25 6.25a0.750.75 0 0 1-1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcChevronRight24;
