import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-progress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbProgress {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 20.78a8.94 8.94 0 0 1 -2.48 -0.97"}],["path",{"d":"M14 3.22a9 9 0 0 1 0 17.55"}],["path",{"d":"M4.58 17.09a8.96 8.96 0 0 1 -1.23 -2.59"}],["path",{"d":"M3.12 10.5c0.16 -0.95 0.47 -1.85 0.9 -2.67l0.17 -0.3"}],["path",{"d":"M6.91 4.58a8.95 8.95 0 0 1 3.09 -1.36"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbProgress;
