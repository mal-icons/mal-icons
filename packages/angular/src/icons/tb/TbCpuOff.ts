import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cpu-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCpuOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 5h9a1 1 0 0 1 1 1v9m-0.29 3.71a1 1 0 0 1 -0.71 0.29h-12a1 1 0 0 1 -1 -1v-12c0 -0.27 0.11 -0.52 0.28 -0.7"}],["path",{"d":"M13 9h2v2m0 4h-6v-6"}],["path",{"d":"M3 10h2"}],["path",{"d":"M3 14h2"}],["path",{"d":"M10 3v2"}],["path",{"d":"M14 3v2"}],["path",{"d":"M21 10h-2"}],["path",{"d":"M21 14h-2"}],["path",{"d":"M14 21v-2"}],["path",{"d":"M10 21v-2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCpuOff;
