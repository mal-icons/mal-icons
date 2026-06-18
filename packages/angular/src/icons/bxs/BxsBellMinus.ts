import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-bell-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBellMinus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22a2.98 2.98 0 0 0 2.82-2H9.18A2.98 2.98 0 0 0 12 22zm8.71-5.71L19 14.59V10c0-3.22-2.18-5.93-5.14-6.74C13.56 2.52 12.85 2 12 2s-1.560.52-1.85 1.26C7.19 4.07 5 6.78 5 10v4.59l-1.71 1.71A11 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a11 0 0 0-0.29-0.71zM16 12H8v-2h8v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBellMinus;
