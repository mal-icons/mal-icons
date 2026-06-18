import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-alarm-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsAlarmOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.29 6.71-3.01-3 1.41-1.42 3.01 3zm1.42 13.59-2.29-2.29C20.41 16.56 21 14.84 21 13c0-4.88-4.12-9-9-9-1.84 0-3.560.59-5.01 1.58L5.91 4.5l0.79-0.79-1.42-1.41-0.790.79-0.79-0.79-1.41 1.41 18 18 1.41-1.41zM17 14h-1.59l-2-2H17v2zm-6-6h2v3.59l-2-2V8zm1 14c1.66 0 3.22-0.48 4.57-1.3L4.31 8.43A8.79 8.79 0 0 0 3 13c0 4.88 4.12 9 9 9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsAlarmOff;
