import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-svelte",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSvelte {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 8l-5 3l0.82 -0.49c1.86 -1.15 4.41 -0.49 5.57 1.35a3.91 3.91 0 0 1 -1.26 5.42l-5.05 3.13c-1.86 1.15 -4.31 0.59 -5.47 -1.25a3.91 3.91 0 0 1 1.26 -5.42l0.26 -0.16"}],["path",{"d":"M8 17l5 -3l-0.82 0.5c-1.86 1.15 -4.41 0.49 -5.57 -1.35a3.91 3.91 0 0 1 1.26 -5.42l5.05 -3.13c1.86 -1.15 4.31 -0.59 5.47 1.25a3.91 3.91 0 0 1 -1.26 5.42l-0.26 0.16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSvelte;
