import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-adobe-indesign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAdobeIndesign {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12c0 -4.24 0 -6.36 1.32 -7.68s3.44 -1.32 7.68 -1.32s6.36 0 7.68 1.32s1.32 3.44 1.32 7.68s0 6.36 -1.32 7.68s-3.44 1.32 -7.68 1.32s-6.36 0 -7.68 -1.32s-1.32 -3.44 -1.32 -7.68"}],["path",{"d":"M15 11v4c0 1.1 -0.66 1 -1.6 1a2.35 2.35 0 0 1 -1.7 -0.73a2.55 2.55 0 0 1 -0.7 -1.77c0 -0.66 0.25 -1.3 0.7 -1.77a2.35 2.35 0 0 1 1.7 -0.73h1.6"}],["path",{"d":"M15 11v-3"}],["path",{"d":"M8 8v8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAdobeIndesign;
