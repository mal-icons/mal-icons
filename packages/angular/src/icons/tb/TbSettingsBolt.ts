import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-settings-bolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSettingsBolt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.26 20.47c-0.85 0.91 -2.58 0.64 -2.93 -0.79a1.72 1.72 0 0 0 -2.57 -1.07c-1.54 0.94 -3.31 -0.83 -2.37 -2.37a1.72 1.72 0 0 0 -1.06 -2.57c-1.76 -0.43 -1.76 -2.92 0 -3.35a1.72 1.72 0 0 0 1.07 -2.57c-0.94 -1.54 0.83 -3.31 2.37 -2.37c1 0.61 2.3 0.07 2.57 -1.06c0.43 -1.76 2.92 -1.76 3.35 0a1.72 1.72 0 0 0 2.57 1.07c1.54 -0.94 3.31 0.83 2.37 2.37a1.72 1.72 0 0 0 1.07 2.57c1.07 0.26 1.49 1.29 1.25 2.15"}],["path",{"d":"M19 16l-2 3h4l-2 3"}],["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSettingsBolt;
