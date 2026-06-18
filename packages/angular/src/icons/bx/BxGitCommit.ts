import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-git-commit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxGitCommit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6c-2.97 0-5.43 2.17-5.91 5H2v2h4.09c0.48 2.83 2.94 5 5.91 5s5.43-2.17 5.91-5H22v-2h-4.09c-0.48-2.83-2.94-5-5.91-5zm0 10c-2.2 0-4-1.79-4-4S9.8 8 12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxGitCommit;
