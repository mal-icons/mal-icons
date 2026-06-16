import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-bedroom-parent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsBedroomParent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 12h11v2h-11zm0.75-3.5h4v2h-4zm5.5 0h4v2h-4z"}],["path",{"d":"M22 2H2v20h20V2zm-3 15h-1.5v-1.5h-11V17H5v-5l0.65-0.55V7H11c0.37 0 0.720.12 1 0.320.28-0.20.63-0.32 1-0.32h5.35v4.45L19 12v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsBedroomParent;
