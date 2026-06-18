import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-git-repository-commits-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGitRepositoryCommitsLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 16V14H19V4H6V14.04C6.16 14.01 6.33 14 6.5 14H8V16H6.5C5.67 16 5 16.67 5 17.5C5 18.33 5.67 19 6.5 19H10V21H6.5C4.57 21 3 19.43 3 17.5V5C3 3.34 4.34 2 6 2H20C20.55 2 21 2.45 21 3V20C21 20.55 20.55 21 20 21H16V19H19V16H18ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM14 17V23H12V17H9L13 12L17 17H14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGitRepositoryCommitsLine;
