import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-diff-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDiff16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.75 1.75V5H12a0.750.75 0 0 1 0 1.5H8.75v3.25a0.750.75 0 0 1-1.5 0V6.5H4A0.750.75 0 0 1 4 5h3.25V1.75a0.750.75 0 0 1 1.5 0ZM4 13h8a0.750.75 0 0 1 0 1.5H4A0.750.75 0 0 1 4 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDiff16;
