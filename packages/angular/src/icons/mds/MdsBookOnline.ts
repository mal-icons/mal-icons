import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-book-online",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsBookOnline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 1H5v22h14V1zM7 18V6h10v12H7zm9-7V8H8v3.1c0.55 0 1 0.45 1 1s-0.45 1-1 1V16h8v-3c-0.55 0-1-0.45-1-1s0.45-1 1-1zm-3.5 3.5h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsBookOnline;
