import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-format-line-height",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgFormatLineHeight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.1 7H7.17L4.17 4L1.17 7H3.1V17H1.16L4.16 20L7.16 17H5.1V7Z","fill":"currentColor"}],["path",{"d":"M22.84 7H8.84V5H22.84V7Z","fill":"currentColor"}],["path",{"d":"M22.84 11H8.84V9H22.84V11Z","fill":"currentColor"}],["path",{"d":"M8.84 15H22.84V13H8.84V15Z","fill":"currentColor"}],["path",{"d":"M22.84 19H8.84V17H22.84V19Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgFormatLineHeight;
