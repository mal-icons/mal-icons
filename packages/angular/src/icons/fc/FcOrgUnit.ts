import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-org-unit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcOrgUnit {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#90CAF9","d":"M10,10v28h28V10H10z M34,34H14V14h20V34z"}],["rect",{"x":"6","y":"6","fill":"#D81B60","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"30","y":"6","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"6","y":"30","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"30","y":"30","width":"12","height":"12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcOrgUnit;
