import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-question-mark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtQuestionMark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.07 12.85c0.77-1.39 2.25-2.21 3.11-3.440.91-1.290.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.410.7 1.15 1.11 3.30.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-0.250.46-0.350.76-0.35 2.24h-2.89c-0.01-0.78-0.13-2.050.48-3.15zM14 20c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtQuestionMark;
