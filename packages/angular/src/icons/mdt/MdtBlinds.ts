import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-blinds",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBlinds {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 9h8v2H6zm0-4h8v2H6zm10 4h2v2h-2zm0-4h2v2h-2z","opacity":".3"}],["path",{"d":"M20 19V3H4v16H2v2h20v-2h-2zM6 5h8v2H6V5zm0 4h8v2H6V9zm12 10H6v-6h8v1.82A1.75 1.75 0 0 0 15 18a1.75 1.75 0 0 0 1-3.18V13h2v6zm0-8h-2V9h2v2zm0-4h-2V5h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBlinds;
