import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-assembly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAssembly {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.88 6.27c0.7 0.4 1.13 1.14 1.13 1.95v7.28c0 0.81 -0.44 1.56 -1.16 1.95l-6.75 4.27a2.27 2.27 0 0 1 -2.18 0l-6.75 -4.27a2.23 2.23 0 0 1 -1.16 -1.95v-7.28c0 -0.81 0.44 -1.55 1.16 -1.95l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98l-0.03 0"}],["path",{"d":"M15.5 9.42c0.31 0.18 0.5 0.52 0.5 0.88v3.28c0 0.36 -0.2 0.7 -0.51 0.88l-3 1.92a1 1 0 0 1 -0.97 0l-3 -1.92a1 1 0 0 1 -0.51 -0.88v-3.28c0 -0.36 0.2 -0.7 0.51 -0.88l3 -1.79c0.31 -0.17 0.69 -0.17 1 0l3 1.79h-0.01l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAssembly;
