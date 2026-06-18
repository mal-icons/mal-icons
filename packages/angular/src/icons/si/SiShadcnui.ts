import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-shadcnui",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiShadcnui {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.22 11.78 11.78 22.22c-0.410.41-0.41 1.07 0 1.480.410.41 1.070.41 1.48 0L23.7 13.26c0.41-0.410.41-1.07 0-1.48-0.41-0.41-1.07-0.41-1.48 0ZM20.130.310.31 20.13c-0.410.41-0.41 1.07 0 1.480.410.41 1.070.41 1.48 0L21.61 1.78c0.41-0.410.41-1.07 0-1.48-0.41-0.41-1.07-0.41-1.48 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiShadcnui;
