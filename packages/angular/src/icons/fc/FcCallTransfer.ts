import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-call-transfer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcCallTransfer {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#009688","d":"M39.2,8.4l-1.8,1.8c-6.3,6.5-5.4,22,0,27.6l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l3.6-3.7c0.5-0.5,0.5-1.3,0-1.8 l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1,0-13.4h4.8l3.3-3.4c0.5-0.5,0.5-1.3,0-1.8L41,8.4C40.5,7.9,39.7,7.9,39.2,8.4z"}],["path",{"fill":"#009688","d":"M11.2,8.4l-1.8,1.8c-6.3,6.5-5.4,22,0,27.6l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l3.6-3.7c0.5-0.5,0.5-1.3,0-1.8 l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1,0-13.4h4.8l3.3-3.4c0.5-0.5,0.5-1.3,0-1.8L13,8.4C12.5,7.9,11.7,7.9,11.2,8.4z"}],["polygon",{"fill":"#2196F3","points":"25.3,18.6 30.7,24 25.3,29.4"}],["rect",{"fill":"#2196F3","x":"16","y":"22","width":"11","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcCallTransfer;
