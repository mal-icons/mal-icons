import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-medkit-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoMedkitSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"168","y":"72","width":"176","height":"24","fill":"none"}],["path",{"d":"M484,96H384V40a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V96H28a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V108A12,12,0,0,0,484,96ZM168,72H344V96H168ZM352,310H278v74H234V310H160V266h74V192h44v74h74Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoMedkitSharp;
