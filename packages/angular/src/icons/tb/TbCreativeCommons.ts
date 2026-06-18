import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-creative-commons",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCreativeCommons {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M10.5 10.5c-0.85 -0.71 -2.13 -0.66 -2.91 0.12a1.93 1.93 0 0 0 0 2.77c0.78 0.77 2.07 0.83 2.91 0.12"}],["path",{"d":"M16.5 10.5c-0.85 -0.71 -2.13 -0.66 -2.91 0.12a1.93 1.93 0 0 0 0 2.77c0.78 0.77 2.07 0.83 2.91 0.12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCreativeCommons;
