import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-loadbar-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgLoadbarAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"opacity":"0.3","x":"3","y":"10","width":"18","height":"4","rx":"2","fill":"currentColor"}],["rect",{"x":"7","y":"10","width":"10","height":"4","rx":"2","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgLoadbarAlt;
