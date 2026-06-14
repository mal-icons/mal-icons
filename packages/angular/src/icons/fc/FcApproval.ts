import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-approval",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcApproval {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#8BC34A","points":"24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"}],["polygon",{"fill":"#CCFF90","points":"34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcApproval;
