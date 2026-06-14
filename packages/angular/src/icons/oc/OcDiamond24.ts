import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-diamond-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDiamond24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.53 13.24a1.75 1.75 0 0 1 0-2.47l9.27-9.27a1.75 1.75 0 0 1 2.48 0l9.27 9.27a1.75 1.75 0 0 1 0 2.47l-9.27 9.27a1.75 1.75 0 0 1-2.47 0Zm1.06-1.41a0.250.25 0 0 0 0 0.35l9.27 9.27a0.250.25 0 0 0 0.35 0l9.27-9.27a0.250.25 0 0 0 0-0.35l-9.27-9.27a0.250.25 0 0 0-0.35 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDiamond24;
