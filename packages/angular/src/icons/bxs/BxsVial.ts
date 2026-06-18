import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-vial",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsVial {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 22a4.97 4.97 0 0 0 3.54-1.46l9.19-9.190.710.71 1.41-1.41-8.48-8.49-1.41 1.410.710.71-9.19 9.19C2.52 14.41 2 15.66 2 17s0.52 2.59 1.47 3.54A4.97 4.97 0 0 0 7 22zM18.31 9.93 15.24 13H6.76l7.31-7.31 4.24 4.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsVial;
