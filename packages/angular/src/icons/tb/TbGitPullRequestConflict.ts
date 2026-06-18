import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-git-pull-request-conflict",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGitPullRequestConflict {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M11 6h5a2 2 0 0 1 2 2v8"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 11v5"}],["path",{"d":"M4 4l4 4"}],["path",{"d":"M8 4l-4 4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGitPullRequestConflict;
