import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-branch-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitBranch24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM2.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.75 6.5a1.75 1.75 0 1 00-3.5A1.75 1.75 0 0 0 5.75 6.5Zm0 14.5a1.75 1.75 0 1 00-3.5A1.75 1.75 0 0 0 5.75 21Zm12.5-14.5a1.75 1.75 0 1 00-3.5A1.75 1.75 0 0 0 18.25 6.5Z"}],["path",{"d":"M5.75 16.75A0.750.75 0 0 1 5 16V8a0.750.75 0 0 1 1.5 0v8a0.750.75 0 0 1-0.750.75Z"}],["path",{"d":"M17.5 8.75v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-7a1.75 1.75 0 0 0-1.75 1.75H5A3.25 3.25 0 0 1 8.25 11h7a2.25 2.25 0 0 0 2.25-2.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitBranch24;
