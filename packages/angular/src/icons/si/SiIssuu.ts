import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-issuu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiIssuu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 0A11 0 0 0 0 1V12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0H1zm11.17 3.58a8.33 8.33 0 0 1 8.25 8.41 8.33 8.33 0 0 1-8.41 8.25c-4.6-0.04-8.3-3.81-8.25-8.410.05-4.6 3.81-8.3 8.41-8.25zm-0.03 2.27a6.11 6.11 0 0 0-6.15 6.05 6.11 6.11 0 0 0 6.05 6.16 6.1 6.1 0 0 0 6.15-6.05 6.11 6.11 0 0 0-6.04-6.16h-0.01zm-0.02 3.01a3.1 3.1 0 0 1 3.06 3.12 3.09 3.09 0 0 1-3.12 3.06l00a3.09 3.09 0 0 1 0.06-6.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiIssuu;
