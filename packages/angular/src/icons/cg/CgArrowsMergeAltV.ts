import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-merge-alt-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsMergeAltV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 1.5V3.5L13 3.5V7.67L14.83 5.85L16.24 7.26L12 11.5L7.76 7.26L9.17 5.85L11 7.67V3.5L6 3.5V1.5L18 1.5Z","fill":"currentColor"}],["path",{"d":"M18 20.5V22.5H6V20.5H11V16.33L9.17 18.15L7.76 16.74L12 12.5L16.24 16.74L14.83 18.15L13 16.33V20.5H18Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsMergeAltV;
