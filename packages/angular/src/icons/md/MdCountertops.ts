import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-countertops",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdCountertops {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 10h-4V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-0.550.45-1 1-1s1 0.45 1 1v3H8c1.1 0 2-0.9 2-2V4H4v4c0 1.10.9 2 2 2H2v2h2v8h16v-8h2v-2zM6 6h2v2H6V6zm0 12v-6h5v6H6zm12 0h-5v-6h5v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdCountertops;
