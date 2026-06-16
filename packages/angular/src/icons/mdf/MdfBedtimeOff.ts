import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-bedtime-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfBedtimeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27A9.96 9.96 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-0.62 5.51-1.66l2.27 2.27 1.41-1.42zM12.34 2.02c-2.18-0.07-4.190.55-5.85 1.64l4.59 4.59c-0.27-2.050.1-4.22 1.26-6.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfBedtimeOff;
