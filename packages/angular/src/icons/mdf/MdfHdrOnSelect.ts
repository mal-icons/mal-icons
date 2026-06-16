import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-hdr-on-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfHdrOnSelect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 18.5v-1c0-0.8-0.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l0.9 2H18l-0.9-2.1c0.5-0.30.9-0.80.9-1.4zm-1.5 0h-2v-1h2v1zm-13-0.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5v2zm6.5-2H6.5v6H10c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm14-0.5h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfHdrOnSelect;
