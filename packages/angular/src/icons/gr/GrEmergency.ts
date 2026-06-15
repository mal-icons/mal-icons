import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-emergency",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrEmergency {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10,7.17 L10,2 L14,2 L14,7.17 L17.66,3.51 L20.49,6.34 L16.83,10 L22,10 L22,14 L16.83,14 L20.49,17.66 L17.66,20.49 L14,16.83 L14,22 L10,22 L10,16.83 L6.34,20.49 L3.51,17.66 L7.17,14 L2,14 L2,10 L7.17,10 L3.51,6.34 L6.34,3.51 L10,7.17 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrEmergency;
