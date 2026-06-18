import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-barrel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBarrel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.28 4h9.44a2 2 0 0 1 1.84 1.22c0.96 2.26 1.44 4.52 1.44 6.78c0 2.26 -0.48 4.52 -1.44 6.78a2 2 0 0 1 -1.84 1.22h-9.44a2 2 0 0 1 -1.84 -1.22c-0.96 -2.26 -1.44 -4.52 -1.44 -6.78c0 -2.26 0.48 -4.52 1.44 -6.78a2 2 0 0 1 1.84 -1.22"}],["path",{"d":"M14 4c0.67 2.67 1 5.33 1 8s-0.33 5.33 -1 8"}],["path",{"d":"M10 4c-0.67 2.67 -1 5.33 -1 8s0.33 5.33 1 8"}],["path",{"d":"M4.5 16h15"}],["path",{"d":"M19.5 8h-15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBarrel;
