import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-batch-prediction",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBatchPrediction {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-80q-33 0-56.5-23.5T200-160v-400q0-33 23.5-56.5T280-640h400q33 0 56.5 23.5T760-560v400q0 33-23.5 56.5T680-80H280Zm200-78q13 0 21.5-8.5T510-188v-10h-60v10q0 13 8.5 21.5T480-158Zm-30-70h60q0-29 15.5-53t34.5-46.5 34.5-46.5q15.5-24 15.5-54 0-54-37.5-92T480-558q-54 0-92 38t-38 92q0 30 15.5 54t34.5 46.5 34.5 46.5q15.5 24 15.5 53ZM240-710q0-23 13.5-36.5T290-760h380q23 0 36.5 13.5T720-710H240Zm40-120q0-23 13.5-36.5T330-880h300q23 0 36.5 13.5T680-830H280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBatchPrediction;
