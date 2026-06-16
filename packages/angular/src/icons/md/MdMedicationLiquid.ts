import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-medication-liquid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdMedicationLiquid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3h12v2H3zM2 21h14V6H2v15zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5v-3zm15-6c-1.68 0-3 1.76-3 4 0 1.770.83 3.22 2 3.76V21h2v-7.24c1.17-0.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdMedicationLiquid;
