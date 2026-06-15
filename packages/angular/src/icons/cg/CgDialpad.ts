import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-dialpad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDialpad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 3H8.5V6H5.5V3Z","fill":"currentColor"}],["path",{"d":"M5.5 8H8.5V11H5.5V8Z","fill":"currentColor"}],["path",{"d":"M5.5 13V16H8.5V13H5.5Z","fill":"currentColor"}],["path",{"d":"M10.5 3H13.5V6H10.5V3Z","fill":"currentColor"}],["path",{"d":"M10.5 8V11H13.5V8H10.5Z","fill":"currentColor"}],["path",{"d":"M10.5 13H13.5V16H10.5V13Z","fill":"currentColor"}],["path",{"d":"M10.5 18V21H13.5V18H10.5Z","fill":"currentColor"}],["path",{"d":"M15.5 3H18.5V6H15.5V3Z","fill":"currentColor"}],["path",{"d":"M15.5 8V11H18.5V8H15.5Z","fill":"currentColor"}],["path",{"d":"M15.5 13H18.5V16H15.5V13Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDialpad;
