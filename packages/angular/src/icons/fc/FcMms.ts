import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-mms",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcMms {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#E91E63","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"}],["polygon",{"fill":"#F48FB1","points":"20,16.5 10,31 30,31"}],["circle",{"fill":"#F8BBD0","cx":"34","cy":"15","r":"3"}],["polygon",{"fill":"#F8BBD0","points":"30,21 22,31 38,31"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcMms;
