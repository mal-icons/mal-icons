import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-software-upload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgSoftwareUpload {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 14.99C11 15.54 11.45 15.99 12 15.99C12.55 15.99 13 15.54 13 14.99V7.83L16.24 11.07L17.66 9.66L12 4L6.34 9.66L7.76 11.07L11 7.83V14.99Z","fill":"currentColor"}],["path",{"d":"M4 14H6V18H18V14H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V14Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgSoftwareUpload;
