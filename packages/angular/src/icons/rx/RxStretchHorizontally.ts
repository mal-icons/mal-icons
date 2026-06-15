import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-stretch-horizontally",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxStretchHorizontally {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.5 1C14.22 1 14 1.22 14 1.5L14 6L1 6L1 1.5C1 1.22 0.78 1 0.5 1C0.22 1 0 1.22 0 1.5L0 13.5C0 13.78 0.22 14 0.5 14C0.78 14 1 13.78 1 13.5L1 9L14 9L14 13.5C14 13.78 14.22 14 14.5 14C14.78 14 15 13.78 15 13.5L15 1.5C15 1.22 14.78 1 14.5 1Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxStretchHorizontally;
