import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vonage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVonage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.28 11.62l-4.54-10.07H0l6.8 15.3a0.080.08 0 0 0 0.15 0zm9.9-10.07s-6.15 13.87-6.92 15.57c-1.84 4.06-3.2 5.07-4.59 5.29a0.030.03 0 0 0 00.05h4.34c1.91 0 3.22-1.28 5.06-5.34C17.72 15.69 24 1.55 24 1.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVonage;
