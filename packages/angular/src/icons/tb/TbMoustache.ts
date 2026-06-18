import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-moustache",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMoustache {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 9a3 3 0 0 1 2.6 1.5c0.93 1.33 2.13 1.56 3.13 1.56l0.29 0l0.77 -0.04l0.21 0c-0.96 1.93 -3.16 2.93 -6.6 3l-0.4 0l-0.16 0a3 3 0 0 1 0.17 -6l0 -0.01"}],["path",{"d":"M9 9a3 3 0 0 0 -2.6 1.5c-0.93 1.33 -2.13 1.56 -3.13 1.56l-0.29 0l-0.77 -0.04l-0.21 0c0.96 1.93 3.16 2.93 6.6 3l0.4 0l0.17 0a3 3 0 0 0 -0.16 -6l0 -0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMoustache;
