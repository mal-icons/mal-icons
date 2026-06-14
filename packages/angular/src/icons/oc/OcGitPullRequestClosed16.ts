import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-pull-request-closed-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitPullRequestClosed16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.25 1A2.25 2.25 0 0 1 4 5.37v5.26a2.25 2.25 0 1 1-1.5 0V5.37A2.25 2.25 0 0 1 3.25 1Zm9.5 5.5a0.750.75 0 0 1 0.750.75v3.38a2.25 2.25 0 1 1-1.5 0V7.25a0.750.75 0 0 1 0.75-0.75Zm-2.03-5.27a0.750.75 0 0 1 1.06 0l0.970.970.97-0.97a0.750.75 0 0 1 1.260.330.750.75 0 0 1-0.20.73l-0.970.970.970.97a0.750.75 0 0 1-0.02 1.040.750.75 0 0 1-1.040.02l-0.97-0.97-0.970.97a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73l0.97-0.97-0.97-0.97a0.750.75 0 0 1 0-1.06ZM2.5 3.25a0.750.75 0 1 0 1.5 0 0.750.75 0 0 0-1.5 0ZM3.25 12a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Zm9.5 0a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitPullRequestClosed16;
