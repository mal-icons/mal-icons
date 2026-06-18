import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-adobe-xd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAdobeXd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12c0 -4.24 0 -6.36 1.32 -7.68s3.44 -1.32 7.68 -1.32s6.36 0 7.68 1.32s1.32 3.44 1.32 7.68s0 6.36 -1.32 7.68s-3.44 1.32 -7.68 1.32s-6.36 0 -7.68 -1.32s-1.32 -3.44 -1.32 -7.68"}],["path",{"d":"M6 8l5 8"}],["path",{"d":"M6 16l5 -8"}],["path",{"d":"M18 11v4c0 1.1 -0.52 1 -1.5 1a2.5 2.5 0 0 1 -2.5 -2.5a2.5 2.5 0 0 1 2.5 -2.5l1.5 0v-3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAdobeXd;
