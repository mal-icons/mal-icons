import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-kayak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbKayak {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.41 6.41a2 2 0 0 0 0 -2.83l-1.41 -1.41l-2.83 2.83l1.41 1.41a2 2 0 0 0 2.83 0"}],["path",{"d":"M17.59 17.59a2 2 0 0 0 0 2.83l1.41 1.41l2.83 -2.83l-1.41 -1.41a2 2 0 0 0 -2.83 0"}],["path",{"d":"M6.5 6.5l11 11"}],["path",{"d":"M22 2.5c-9.98 2.6 -17.63 7.95 -20 19.5c9.98 -2.6 17.63 -7.95 20 -19.5"}],["path",{"d":"M6.5 12.5l5 5"}],["path",{"d":"M12.5 6.5l5 5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbKayak;
