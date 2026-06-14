import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-up-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowUp16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.47 7.78a0.750.75 0 0 1 0-1.06l4.25-4.25a0.750.75 0 0 1 1.06 0l4.25 4.25a0.750.75 0 0 1-0.02 1.040.750.75 0 0 1-1.040.02L9 4.81v7.44a0.750.75 0 0 1-1.5 0V4.81L4.53 7.78a0.750.75 0 0 1-1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowUp16;
