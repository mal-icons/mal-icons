import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-department",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcDepartment {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#C5CAE9","points":"42,42 6,42 6,9 24,2 42,9"}],["rect",{"x":"6","y":"42","fill":"#9FA8DA","width":"36","height":"2"}],["rect",{"x":"20","y":"35","fill":"#BF360C","width":"8","height":"9"}],["rect",{"fill":"#1565C0","x":"31","y":"27","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"27","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"27","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"31","y":"35","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"35","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"31","y":"19","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"19","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"19","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"31","y":"11","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"11","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"11","width":"6","height":"5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcDepartment;
