import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-radio-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRadioOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 3l-4.99 2m-2.87 1.15l-1.51 0.6a1 1 0 0 0 -0.63 0.93v11.32a1 1 0 0 0 1 1h14a1 1 0 0 0 0.71 -0.29m0.29 -3.71v-8a1 1 0 0 0 -1 -1h-8m-4 0h-2.5"}],["path",{"d":"M4 12h8m4 0h4"}],["path",{"d":"M7 12v-2"}],["path",{"d":"M13 16v0.01"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRadioOff;
