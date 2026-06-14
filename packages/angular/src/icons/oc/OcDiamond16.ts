import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-diamond-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDiamond16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.53 9.24a1.75 1.75 0 0 1 0-2.47L6.780.51a1.75 1.75 0 0 1 2.48 0l6.25 6.25a1.75 1.75 0 0 1 0 2.48l-6.25 6.25a1.75 1.75 0 0 1-2.47 0L0.53 9.24Zm1.06-1.41a0.250.25 0 0 0 0 0.35l6.25 6.25a0.250.25 0 0 0 0.35 0l6.25-6.25a0.250.25 0 0 0 0-0.35l-6.25-6.25a0.250.25 0 0 0-0.35 0l-6.25 6.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDiamond16;
