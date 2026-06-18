import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-brex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBrex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.69 2.32a3.87 3.87 0 0 0-3.11 1.55l-0.76 1.01a1.66 1.66 0 0 1-1.310.66H0V21.68h5.3a3.87 3.87 0 0 0 3.11-1.55l0.76-1.01a1.66 1.66 0 0 1 1.31-0.66H24V2.32h-5.31Zm1.11 11.95h-5.66a3.87 3.87 0 0 0-3.11 1.55l-0.76 1.01a1.66 1.66 0 0 1-1.310.66H4.2V9.73h5.66a3.87 3.87 0 0 0 3.11-1.55l0.76-1.01a1.66 1.66 0 0 1 1.31-0.66h4.77l-0.01 7.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBrex;
