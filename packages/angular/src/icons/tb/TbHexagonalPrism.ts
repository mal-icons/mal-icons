import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-hexagonal-prism",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHexagonalPrism {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.79 7l-3.77 2.64a2.01 2.01 0 0 1 -1.15 0.36h-7.74c-0.41 0 -0.81 -0.13 -1.15 -0.36l-3.77 -2.64"}],["path",{"d":"M8 10v11"}],["path",{"d":"M16 10v11"}],["path",{"d":"M3.85 18.27l3.37 2.36a2 2 0 0 0 1.15 0.36h7.27c0.41 0 0.81 -0.13 1.15 -0.36l3.37 -2.36c0.54 -0.37 0.85 -0.99 0.85 -1.64v-9.26c0 -0.65 -0.32 -1.27 -0.85 -1.64l-3.37 -2.36a2 2 0 0 0 -1.15 -0.36h-7.27c-0.41 0 -0.81 0.13 -1.15 0.36l-3.37 2.36a2.01 2.01 0 0 0 -0.85 1.64v9.26c0 0.66 0.32 1.27 0.85 1.64"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHexagonalPrism;
