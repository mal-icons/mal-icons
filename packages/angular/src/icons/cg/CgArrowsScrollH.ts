import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-scroll-h",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsScrollH {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.31 12L18.13 9.18L16.72 7.76L13.89 10.59L13.89 10.58L12.47 12L12.48 12L12.47 12L13.89 13.42L13.89 13.41L16.72 16.24L18.13 14.82L15.31 12Z","fill":"currentColor"}],["path",{"d":"M10.11 10.59L10.11 10.58L11.53 12L11.52 12L11.53 12L10.11 13.42L10.11 13.41L7.28 16.24L5.87 14.82L8.69 12L5.87 9.18L7.28 7.76L10.11 10.59Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsScrollH;
