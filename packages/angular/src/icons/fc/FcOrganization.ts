import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-organization",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcOrganization {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#90CAF9","d":"M42,42H6V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V42z"}],["rect",{"x":"6","y":"42","fill":"#64B5F6","width":"36","height":"2"}],["rect",{"fill":"#1565C0","x":"31","y":"27","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"27","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"27","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"31","y":"35","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"35","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"31","y":"19","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"19","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"19","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"31","y":"11","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"11","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"11","y":"11","width":"6","height":"5"}],["rect",{"fill":"#1565C0","x":"21","y":"35","width":"6","height":"9"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcOrganization;
