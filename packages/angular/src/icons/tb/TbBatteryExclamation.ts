import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-battery-exclamation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBatteryExclamation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 17h8c1.11 0 2 -0.89 2 -2v-0.5c0 -0.28 0.22 -0.5 0.5 -0.5s0.5 -0.22 0.5 -0.5v-3c0 -0.28 -0.22 -0.5 -0.5 -0.5s-0.5 -0.22 -0.5 -0.5v-0.5c0 -1.1 -0.89 -2 -2 -2h-11c-1.1 0 -2 0.9 -2 2v3"}],["path",{"d":"M5 16v3"}],["path",{"d":"M5 22v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBatteryExclamation;
