import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-link-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLink16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.78 3.28 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 0.750.75 0 0 1 0.02-1.040.750.75 0 0 1 1.04-0.02 2 2 0 0 0 2.83 0l2.5-2.5a2 2 0 0 0-2.83-2.83l-1.25 1.25a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04Zm-4.69 9.64a2 2 0 0 0 2.83 0l1.25-1.25a0.750.75 0 0 1 1.040.020.750.75 0 0 1 0.02 1.04l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 0.750.75 0 0 1-0.02 1.040.750.75 0 0 1-1.040.02 2 2 0 0 0-2.83 0l-2.5 2.5a2 2 0 0 0 0 2.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLink16;
