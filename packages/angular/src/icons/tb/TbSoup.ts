import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-soup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSoup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 11h16a1 1 0 0 1 1 1v0.5c0 1.5 -2.52 5.57 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.69 -1.05 -4 -5 -4 -6.5v-0.5a1 1 0 0 1 1 -1"}],["path",{"d":"M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSoup;
