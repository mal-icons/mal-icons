import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-power-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPowerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.80.2-0.2V9c0-1.1-0.9-2-2-2V3h-2v4h-3.88l2 2H16zM4.12 3.84 2.71 5.25 6 8.54v5.96L9.5 18v3h5v-3l0.48-0.48 4.47 4.47 1.41-1.41L4.12 3.84zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57-1.07 1.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPowerOff;
