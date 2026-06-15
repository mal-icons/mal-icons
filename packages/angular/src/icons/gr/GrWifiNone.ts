import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-wifi-none",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrWifiNone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"fill":"none"}],["circle",{"cx":"12","cy":"18","r":"2","stroke":"currentColor","stroke-width":"2"}],["path",{"stroke":"currentColor","stroke-opacity":".2","stroke-width":"2","d":"M7.76,13.76 C10.1,11.41 13.9,11.41 16.24,13.76 M4.93,10.93 C8.83,7.02 15.17,7.02 19.07,10.93 M2.1,8.1 C7.57,2.63 16.43,2.63 21.9,8.1","opacity":".8"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrWifiNone;
