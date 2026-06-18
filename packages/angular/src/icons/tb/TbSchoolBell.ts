import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-school-bell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSchoolBell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 17a3 3 0 0 0 3 3"}],["path",{"d":"M14.81 6.37l2.78 -2.78a2 2 0 1 1 2.83 2.83l-2.78 2.79"}],["path",{"d":"M16.51 7.5a5.11 5.11 0 0 1 0.18 7.04l-0.18 0.18l-1.87 1.87a3.48 3.48 0 0 0 -1.01 2.23l-0.01 0.23v0.93c0 0.33 -0.13 0.64 -0.36 0.87a0.51 0.51 0 0 1 -0.65 0.06l-0.07 -0.06l-9.38 -9.38a0.51 0.51 0 0 1 0 -0.72c0.2 -0.2 0.46 -0.32 0.73 -0.35l0.14 -0.01h0.93c0.85 0 1.66 -0.31 2.3 -0.86l0.17 -0.16l1.87 -1.87l0.16 -0.15a5.11 5.11 0 0 1 7.06 0.15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSchoolBell;
