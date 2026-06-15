import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlChart {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M272.06 319.98H48c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.06c17.68 0 32-14.32 32-32V351.98c0-17.68-14.32-32-32-32zm-32 640.02H80V383.98h160.06V960zm383.68-449.74h-224.08c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.08c17.68 0 32-14.32 32-32V542.26c0-17.7-14.3-32-32-32zm-32 449.74h-160.08V574.26h160.08V960zM976 0H752.27c-17.68 0-32 14.32-32 32v960c0 17.68 14.32 32 32 32H976c17.68 0 32-14.32 32-32V32c0-17.68-14.32-32-32-32zm-32 960H784.27V64H944v896z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlChart;
