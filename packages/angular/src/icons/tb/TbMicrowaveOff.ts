import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-microwave-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMicrowaveOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 18h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2m4 0h10a1 1 0 0 1 1 1v10"}],["path",{"d":"M15 6v5m0 4v3"}],["path",{"d":"M18 12h0.01"}],["path",{"d":"M18 9h0.01"}],["path",{"d":"M6.5 10.5c1 -0.67 1.5 -0.67 2.5 0c0.64 0.27 1.27 0.67 1.91 0.43"}],["path",{"d":"M6.5 13.5c1 -0.67 1.5 -0.67 2.5 0c0.83 0.35 1.67 0.93 2.5 0"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMicrowaveOff;
