import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-git-pull-request-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGitPullRequestLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 5H17C18.1 5 19 5.9 19 7V15.17C20.17 15.58 21 16.69 21 18C21 19.66 19.66 21 18 21C16.34 21 15 19.66 15 18C15 16.69 15.83 15.58 17 15.17V7H15V10L10.5 6L15 2V5ZM5 8.83C3.83 8.42 3 7.31 3 6C3 4.34 4.34 3 6 3C7.66 3 9 4.34 9 6C9 7.31 8.17 8.42 7 8.83V15.17C8.17 15.58 9 16.69 9 18C9 19.66 7.66 21 6 21C4.34 21 3 19.66 3 18C3 16.69 3.83 15.58 5 15.17V8.83ZM6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7ZM6 19C6.55 19 7 18.55 7 18C7 17.45 6.55 17 6 17C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19ZM18 19C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17C17.45 17 17 17.45 17 18C17 18.55 17.45 19 18 19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGitPullRequestLine;
