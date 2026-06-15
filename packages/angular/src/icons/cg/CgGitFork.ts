import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-git-fork",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgGitFork {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 5C7 3.9 7.9 3 9 3C10.1 3 11 3.9 11 5C11 5.74 10.6 6.39 10 6.73V14.04H11.79C12.9 14.04 13.79 13.14 13.79 12.04V10.78C13.18 10.44 12.77 9.79 12.77 9.04C12.77 7.93 13.67 7.04 14.77 7.04C15.88 7.04 16.77 7.93 16.77 9.04C16.77 9.77 16.38 10.41 15.79 10.76V12.04C15.79 14.25 14 16.04 11.79 16.04H10V17.27C10.6 17.61 11 18.26 11 19C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19C7 18.26 7.4 17.61 8 17.27V6.73C7.4 6.39 7 5.74 7 5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgGitFork;
