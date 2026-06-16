import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-pages",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPages {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 5v6h5l-0.6-2.38c-0.18-0.740.48-1.4 1.22-1.22L11 8V3H5c-1.1 0-2 0.9-2 2zm5 8H3v6c0 1.10.9 2 2 2h6v-5l-2.380.6c-0.730.18-1.4-0.48-1.21-1.21L8 13zm7.38 3.6L13 16v5h6c1.1 0 2-0.9 2-2v-6h-5l0.6 2.38c0.180.74-0.48 1.4-1.22 1.22zM19 3h-6v5l2.38-0.6c0.73-0.18 1.40.48 1.21 1.21L16 11h5V5c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPages;
