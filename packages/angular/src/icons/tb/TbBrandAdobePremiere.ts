import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-adobe-premiere",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAdobePremiere {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12c0 -4.24 0 -6.36 1.32 -7.68s3.44 -1.32 7.68 -1.32s6.36 0 7.68 1.32s1.32 3.44 1.32 7.68s0 6.36 -1.32 7.68s-3.44 1.32 -7.68 1.32s-6.36 0 -7.68 -1.32s-1.32 -3.44 -1.32 -7.68"}],["path",{"d":"M7.26 15.79v-3.79m0 0v-3.25c0 -0.33 0.22 -0.54 0.54 -0.54h1.35a1.9 1.9 0 1 1 0 3.79l-1.89 0"}],["path",{"d":"M13.9 10.58v1.9m0 0v3.32m0 -3.31c0.53 -0.71 1.03 -1.59 1.89 -1.83q 0.22 -0.06 0.47 -0.06"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAdobePremiere;
