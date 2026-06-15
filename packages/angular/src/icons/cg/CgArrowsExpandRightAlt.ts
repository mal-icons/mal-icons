import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-expand-right-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsExpandRightAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.9 2.1V4.1H18.49L12.71 9.88L14.12 11.29L19.9 5.51V10.1H21.9V2.1H13.9Z","fill":"currentColor"}],["path",{"d":"M5.51 19.9H10.1V21.9H2.1V13.9H4.1V18.49L9.88 12.71L11.29 14.12L5.51 19.9Z","fill":"currentColor"}],["path",{"d":"M9.17 7.76L7.76 9.17L14.83 16.24L16.24 14.83L9.17 7.76Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsExpandRightAlt;
