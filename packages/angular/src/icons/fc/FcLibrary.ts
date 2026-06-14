import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-library",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcLibrary {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"fill":"#FF9800","x":"1","y":"38","width":"46","height":"2"}],["rect",{"fill":"#FF9800","x":"25","y":"18","width":"4","height":"16"}],["rect",{"fill":"#FF9800","x":"31","y":"18","width":"4","height":"16"}],["rect",{"fill":"#FF9800","x":"37","y":"18","width":"4","height":"16"}],["rect",{"fill":"#FF9800","x":"19","y":"18","width":"4","height":"16"}],["rect",{"fill":"#FF9800","x":"13","y":"18","width":"4","height":"16"}],["rect",{"fill":"#FF9800","x":"7","y":"18","width":"4","height":"16"}],["polygon",{"fill":"#FF9800","points":"43,16 5,16 5,13 24,4 43,13"}],["rect",{"fill":"#FF9800","x":"5","y":"34","width":"38","height":"2"}],["rect",{"fill":"#EF6C00","x":"25","y":"16","width":"4","height":"2"}],["rect",{"fill":"#EF6C00","x":"31","y":"16","width":"4","height":"2"}],["rect",{"fill":"#EF6C00","x":"37","y":"16","width":"4","height":"2"}],["rect",{"fill":"#EF6C00","x":"19","y":"16","width":"4","height":"2"}],["rect",{"fill":"#EF6C00","x":"13","y":"16","width":"4","height":"2"}],["rect",{"fill":"#EF6C00","x":"7","y":"16","width":"4","height":"2"}],["rect",{"fill":"#EF6C00","x":"3","y":"36","width":"42","height":"2"}],["circle",{"fill":"#EF6C00","cx":"24","cy":"11","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcLibrary;
