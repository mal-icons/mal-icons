import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-dns",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDns {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 15v4H5v-4h14m1-2H4c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM7 18.5c-0.82 0-1.5-0.67-1.5-1.5s0.68-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1zM7 8.5c-0.82 0-1.5-0.67-1.5-1.5S6.18 5.5 7 5.5s1.50.68 1.5 1.5S7.83 8.5 7 8.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDns;
