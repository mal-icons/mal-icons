import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-power-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPowerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21c4.41 0 8-3.59 8-8 0-3.35-2.07-6.22-5-7.41v2.22A6 6 0 0 1 18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 0 1 3-5.19V5.59C6.07 6.78 4 9.65 4 13c0 4.41 3.59 8 8 8z"}],["path",{"d":"M11 2h2v10h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPowerOff;
