import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-medication-liquid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMedicationLiquid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"opacity":".3"}],["path",{"d":"M4 8h10v11H4z","opacity":".3"}],["path",{"d":"M4 19h10V8H4v11zm1-7h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5v-3z","clip-path":"url(#b)"}],["path",{"d":"M3 3h12v2H3zm11 3H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2m0 13H4V8h10v11z"}],["path",{"d":"M7.5 17.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5z"}],["ellipse",{"cx":"20","cy":"10","opacity":".3","rx":"1","ry":"2"}],["path",{"d":"M20 6c-1.68 0-3 1.76-3 4 0 1.770.83 3.22 2 3.76V20c0 0.550.45 1 1 1s1-0.45 1-1v-6.24c1.17-0.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4zm0 6c-0.41 0-1-0.78-1-2s0.59-2 1-2 1 0.78 1 2-0.59 2-1 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMedicationLiquid;
