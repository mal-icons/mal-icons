import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-brightness-auto",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBrightnessAuto {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V6c0-1.1-0.9-2-2-2h-2.69l-1.9-1.9c-0.78-0.78-2.05-0.78-2.83 0L8.69 4H6c-1.1 0-2 0.9-2 2v2.69l-1.9 1.9c-0.780.78-0.78 2.05 0 2.83l1.9 1.9V18c0 1.10.9 2 2 2h2.69l1.9 1.9c0.780.78 2.050.78 2.83 0l1.9-1.9H18c1.1 0 2-0.9 2-2v-2.69l1.9-1.9c0.78-0.780.78-2.05 0-2.83L20 8.69zm-5.91 6.71L13.6 14h-3.2l-0.49 1.4c-0.130.36-0.460.6-0.840.6a0.890.89 0 0 1-0.84-1.19l2.44-6.86c0.2-0.570.73-0.95 1.33-0.950.6 0 1.130.38 1.340.94l2.44 6.86a0.890.89 0 0 1-0.84 1.190.870.87 0 0 1-0.85-0.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBrightnessAuto;
