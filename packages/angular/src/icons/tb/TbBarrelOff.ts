import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-barrel-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBarrelOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4h8.72a2 2 0 0 1 1.84 1.22c0.96 2.26 1.44 4.52 1.44 6.78a16.35 16.35 0 0 1 -0.41 3.61m-0.96 3.01l-0.07 0.16a2 2 0 0 1 -1.84 1.22h-9.44a2 2 0 0 1 -1.84 -1.22c-0.96 -2.26 -1.44 -4.52 -1.44 -6.78c0 -2.21 0.46 -4.42 1.37 -6.63"}],["path",{"d":"M14 4c0.59 2.34 0.91 4.67 0.99 7.01m-0.11 3.86a33.42 33.42 0 0 1 -0.87 5.13"}],["path",{"d":"M10 4a34.42 34.42 0 0 0 -0.37 1.63m-0.51 3.5a32.13 32.13 0 0 0 -0.13 2.87c0 2.67 0.33 5.33 1 8"}],["path",{"d":"M4.5 16h11.5"}],["path",{"d":"M19.5 8h-7.5m-4 0h-3.5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBarrelOff;
