import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-right-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowRight16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.22 2.97a0.750.75 0 0 1 1.06 0l4.25 4.25a0.750.75 0 0 1 0 1.06l-4.25 4.25a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04l2.97-2.97H3.75a0.750.75 0 0 1 0-1.5h7.44L8.22 4.03a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowRight16;
