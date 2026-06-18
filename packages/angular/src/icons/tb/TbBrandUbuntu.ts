import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-ubuntu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandUbuntu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17.72 7.41a7.99 7.99 0 0 0 -3.74 -2.16m-3.97 0a7.99 7.99 0 0 0 -3.79 2.22m-1.88 3.22a8 8 0 0 0 -0.34 2.32c0 0.74 0.1 1.45 0.29 2.13m1.96 3.43a7.99 7.99 0 0 0 3.76 2.19m4 0a7.99 7.99 0 0 0 3.75 -2.19m1.96 -3.43a8.01 8.01 0 0 0 0.29 -2.13c0 -0.76 -0.11 -1.5 -0.31 -2.2"}],["path",{"d":"M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandUbuntu;
