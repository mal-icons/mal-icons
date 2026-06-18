import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-alarm-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAlarmOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.29 6.71-3.01-3 1.41-1.42 3.01 3zm1.42 13.59-2.29-2.29C20.41 16.56 21 14.84 21 13c0-4.88-4.12-9-9-9-1.84 0-3.560.59-5.01 1.58L5.91 4.5l0.79-0.79-1.42-1.41-0.790.79-0.79-0.79-1.41 1.41 18 18 1.41-1.41zM12 6c3.79 0 7 3.21 7 7 0 1.29-0.39 2.51-1.03 3.56L15.41 14H17v-2h-3.59L13 11.59V8h-2v1.59L8.44 7.03C9.49 6.39 10.71 6 12 6zM4.31 8.43A8.79 8.79 0 0 0 3 13c0 4.88 4.12 9 9 9a8.79 8.79 0 0 0 4.57-1.3l-1.46-1.46A6.8 6.8 0 0 1 12 20c-3.79 0-7-3.21-7-7 0-1.110.28-2.170.77-3.11L4.31 8.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAlarmOff;
