import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-power-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPowerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 14.49V9c0-1.1-0.9-2-2-2V3h-2v4h-3.88l7.69 7.690.19-0.2zM10 3H8v1.88l2 2zm-5.880.84L2.71 5.25l3.34 3.34c-0.030.13-0.050.27-0.050.4v5.51L9.5 18v3h5v-3l0.48-0.48 4.47 4.47 1.41-1.41L4.12 3.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPowerOff;
