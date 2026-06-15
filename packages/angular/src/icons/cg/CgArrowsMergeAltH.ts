import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-merge-alt-h",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsMergeAltH {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 6H3.5V11H7.67L5.85 9.17L7.26 7.76L11.5 12L7.26 16.24L5.85 14.83L7.67 13H3.5V18H1.5V6Z","fill":"currentColor"}],["path",{"d":"M20.5 6H22.5V18H20.5V13H16.33L18.15 14.83L16.74 16.24L12.5 12L16.74 7.76L18.15 9.17L16.33 11H20.5V6Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsMergeAltH;
