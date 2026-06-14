import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-spacing-large-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSpacingLarge16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.25 2H2.75a0.750.75 0 0 0 0 1.5h10.5a0.750.75 0 0 0 0-1.5Zm-3 5h-4.5a0.750.75 0 0 0 0 1.5h4.5a0.750.75 0 0 0 0-1.5Zm3 5H2.75a0.750.75 0 0 0 0 1.5h10.5a0.750.75 0 0 0 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSpacingLarge16;
