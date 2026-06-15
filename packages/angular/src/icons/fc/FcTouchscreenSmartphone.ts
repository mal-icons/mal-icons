import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-touchscreen-smartphone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcTouchscreenSmartphone {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#E38939","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"}],["path",{"fill":"#FFF3E0","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"}],["circle",{"fill":"#A6642A","cx":"24","cy":"41","r":"1.5"}],["circle",{"fill":"#E91E63","cx":"24","cy":"23","r":"2"}],["circle",{"fill":"none","stroke":"#F48FB1","stroke-width":"2","stroke-miterlimit":"10","cx":"24","cy":"23","r":"4"}],["circle",{"fill":"none","stroke":"#F8BBD0","stroke-miterlimit":"10","cx":"24","cy":"23","r":"6.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcTouchscreenSmartphone;
