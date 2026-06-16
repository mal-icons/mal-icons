import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-pallet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPallet {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-80h800v80h-80v-40H520v40h-80v-40H160v40H80Zm150-240q-12.75 0-21.37-8.62T200-350v-500q0-12.75 8.63-21.37T230-880h500q12.75 0 21.38 8.63T760-850v510q0 8.5-5.75 14.25T740-320H230Zm10-40h480v-480H240v480Zm120-300h240v-40H360v40ZM240-360v-480 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPallet;
