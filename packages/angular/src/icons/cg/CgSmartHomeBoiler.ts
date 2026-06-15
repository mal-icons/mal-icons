import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-smart-home-boiler",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgSmartHomeBoiler {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 5C5 2.79 6.79 1 9 1H15C17.21 1 19 2.79 19 5V21H15.14L15.89 23H13.89L13.14 21H11.14L11.89 23H9.89L9.14 21H5V5ZM9 3H15C16.1 3 17 3.9 17 5V7H7V5C7 3.9 7.9 3 9 3ZM7 9H17V19H7V9Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgSmartHomeBoiler;
