import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-dropdown-menu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDropdownMenu {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 3.1C7.28 3.1 7.1 3.28 7.1 3.5C7.1 3.72 7.28 3.9 7.5 3.9H14.5C14.72 3.9 14.9 3.72 14.9 3.5C14.9 3.28 14.72 3.1 14.5 3.1H7.5ZM7.5 5.1C7.28 5.1 7.1 5.28 7.1 5.5C7.1 5.72 7.28 5.9 7.5 5.9H14.5C14.72 5.9 14.9 5.72 14.9 5.5C14.9 5.28 14.72 5.1 14.5 5.1H7.5ZM7.1 7.5C7.1 7.28 7.28 7.1 7.5 7.1H14.5C14.72 7.1 14.9 7.28 14.9 7.5C14.9 7.72 14.72 7.9 14.5 7.9H7.5C7.28 7.9 7.1 7.72 7.1 7.5ZM7.5 9.1C7.28 9.1 7.1 9.28 7.1 9.5C7.1 9.72 7.28 9.9 7.5 9.9H14.5C14.72 9.9 14.9 9.72 14.9 9.5C14.9 9.28 14.72 9.1 14.5 9.1H7.5ZM7.1 11.5C7.1 11.28 7.28 11.1 7.5 11.1H14.5C14.72 11.1 14.9 11.28 14.9 11.5C14.9 11.72 14.72 11.9 14.5 11.9H7.5C7.28 11.9 7.1 11.72 7.1 11.5ZM2.5 9.25L5 6H0L2.5 9.25Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDropdownMenu;
