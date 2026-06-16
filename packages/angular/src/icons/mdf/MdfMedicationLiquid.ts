import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-medication-liquid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfMedicationLiquid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3h12v2H3zm11 3H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-1 9h-2.5v2.5h-3V15H5v-3h2.5V9.5h3V12H13v3zm7-9c-1.68 0-3 1.76-3 4 0 1.770.83 3.22 2 3.76V20c0 0.550.45 1 1 1s1-0.45 1-1v-6.24c1.17-0.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfMedicationLiquid;
