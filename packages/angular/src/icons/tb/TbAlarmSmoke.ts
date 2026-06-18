import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-alarm-smoke",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAlarmSmoke {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 8l-0.8 3a1.25 1.25 0 0 1 -1.2 1h-8a1.25 1.25 0 0 1 -1.2 -1l-0.8 -3"}],["path",{"d":"M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M12 16c0.64 0.29 1.02 0.76 1 1.25c0.02 0.49 -0.36 0.96 -1 1.25s-1.02 0.76 -1 1.25c-0.02 0.49 0.36 0.96 1 1.25"}],["path",{"d":"M7 16c0.64 0.29 1.02 0.76 1 1.25c0.02 0.49 -0.36 0.96 -1 1.25s-1.02 0.76 -1 1.25c-0.02 0.49 0.36 0.96 1 1.25"}],["path",{"d":"M17 16c0.64 0.29 1.02 0.76 1 1.25c0.02 0.49 -0.36 0.96 -1 1.25s-1.02 0.76 -1 1.25c-0.02 0.49 0.36 0.96 1 1.25"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAlarmSmoke;
