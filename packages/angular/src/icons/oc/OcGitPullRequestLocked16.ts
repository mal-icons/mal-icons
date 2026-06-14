import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-pull-request-locked-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitPullRequestLocked16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6a3 3 0 0 1 3 3v1.17c0.590.28 1 0.88 1 1.58v2.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-2.5c0-0.70.41-1.3 1-1.58V9a3 3 0 0 1 3-3Zm0 1.5A1.5 1.5 0 0 0 10.5 9v1h3V9A1.5 1.5 0 0 0 12 7.5ZM3.25 1A2.25 2.25 0 0 1 4 5.37v5.26a2.25 2.25 0 1 1-1.5 0V5.37A2.25 2.25 0 0 1 3.25 1Zm0 1.5a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Zm0 9.5a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5ZM10 0.85a0.250.25 0 0 0-0.43-0.18L7.18 3.07a0.250.25 0 0 0 0 0.36l2.4 2.4A0.250.25 0 0 0 10 5.65V0.85Z"}],["path",{"d":"M12 2.71A2.49 2.49 0 0 0 11 2.5h-1V4h1c0.5 0 0.89 0 0.960.6a0.740.74 0 0 0 0.750.670.750.75 0 0 0 0.75-0.67c0-0.1 0-0.15-0.07-0.36 0 0-0.04-0.12-0.07-0.2a2.24 2.24 0 0 0-0.21-0.39 2 2 0 0 0-0.33-0.41l-0.04-0.04a2.78 2.78 0 0 0-0.13-0.11c-0.01-0.01-0.02-0.02-0.03-0.03a1.98 1.98 0 0 0-0.17-0.13l-0.04-0.02a3.09 3.09 0 0 0-0.16-0.09l-0.05-0.02a2.66 2.66 0 0 0-0.17-0.08Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitPullRequestLocked16;
