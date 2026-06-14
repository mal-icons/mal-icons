import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-pull-request-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitPullRequest24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-14.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM4.75 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 4.75 3Zm0 14.5a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 4.75 17.5Zm14.5 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 00-3.5Z"}],["path",{"d":"M13.41 1.72a0.750.75 0 0 1 0 1.06L12.19 4h4.07A3.75 3.75 0 0 1 20 7.75v8.75a0.750.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.06l1.22 1.22a0.750.75 0 0 1-1.06 1.06l-2.5-2.5a0.750.75 0 0 1 0-1.06l2.5-2.5a0.750.75 0 0 1 1.06 0ZM4.75 7.25A0.750.75 0 0 1 5.5 8v8A0.750.75 0 0 1 4 16V8a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitPullRequest24;
