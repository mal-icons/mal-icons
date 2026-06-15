import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-corner-top-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCornerTopLeft {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9.88 3H9.9H11.5C11.78 3 12 3.22 12 3.5C12 3.78 11.78 4 11.5 4H9.9C8.77 4 7.96 4 7.31 4.05C6.68 4.1 6.26 4.21 5.91 4.38C5.25 4.72 4.72 5.25 4.38 5.91C4.21 6.26 4.1 6.68 4.05 7.31C4 7.96 4 8.77 4 9.9V11.5C4 11.78 3.78 12 3.5 12C3.22 12 3 11.78 3 11.5V9.9V9.88C3 8.78 3 7.92 3.06 7.23C3.11 6.53 3.23 5.97 3.49 5.46C3.92 4.61 4.61 3.92 5.46 3.49C5.97 3.23 6.53 3.11 7.23 3.06C7.92 3 8.78 3 9.88 3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCornerTopLeft;
