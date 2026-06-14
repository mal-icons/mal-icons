import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-check-circle-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCheckCircleFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a0.750.75 0 0 0-0.02-1.040.750.75 0 0 0-1.04-0.02L6.75 9.19 5.28 7.72a0.750.75 0 0 0-1.040.020.750.75 0 0 0-0.02 1.04l2 2a0.750.75 0 0 0 1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCheckCircleFill16;
