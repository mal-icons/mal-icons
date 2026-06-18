import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-git-close-pull-request-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGitClosePullRequestFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6C3 4.34 4.34 3 6 3C7.66 3 9 4.34 9 6C9 7.31 8.17 8.42 7 8.83V15.17C8.17 15.58 9 16.69 9 18C9 19.66 7.66 21 6 21C4.34 21 3 19.66 3 18C3 16.69 3.83 15.58 5 15.17V8.83C3.83 8.42 3 7.31 3 6ZM15.29 3.29C15.68 2.9 16.32 2.9 16.71 3.29L18 4.59L19.29 3.29C19.68 2.9 20.32 2.9 20.71 3.29C21.1 3.68 21.1 4.32 20.71 4.71L19.41 6L20.71 7.29C21.1 7.68 21.1 8.32 20.71 8.71C20.32 9.1 19.68 9.1 19.29 8.71L18 7.41L16.71 8.71C16.32 9.1 15.68 9.1 15.29 8.71C14.9 8.32 14.9 7.68 15.29 7.29L16.59 6L15.29 4.71C14.9 4.32 14.9 3.68 15.29 3.29ZM18 10C18.55 10 19 10.45 19 11V15.17C20.17 15.58 21 16.69 21 18C21 19.66 19.66 21 18 21C16.34 21 15 19.66 15 18C15 16.69 15.83 15.58 17 15.17V11C17 10.45 17.45 10 18 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGitClosePullRequestFill;
