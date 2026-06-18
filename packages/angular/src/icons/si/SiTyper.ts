import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-typer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTyper {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.82 3.65H2.18C0.98 3.65 0 4.48 0 5.51v3.71h2.18V5.49h19.64v13.04H2.18v-3.73H0v3.73c0 1.020.98 1.84 2.18 1.84h19.64c1.2 0 2.18-0.82 2.18-1.84V5.51c0-1.03-0.98-1.86-2.18-1.86Zm-10.91 12.07L15.27 12l-4.36-3.72v2.79H0v1.86h10.91v2.79Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTyper;
