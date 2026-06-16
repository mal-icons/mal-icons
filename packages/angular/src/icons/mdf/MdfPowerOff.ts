import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-power-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPowerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.50.49-0.49zm-1.76 1.77L7.2 7.2l-0.010.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l0.48-0.48L19.45 22l1.26-1.28-4.47-4.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPowerOff;
