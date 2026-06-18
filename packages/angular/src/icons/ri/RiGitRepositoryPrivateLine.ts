import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-git-repository-private-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGitRepositoryPrivateLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 10V20H19V10H6ZM18 8H20C20.55 8 21 8.45 21 9V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V9C3 8.45 3.45 8 4 8H6V7C6 3.69 8.69 1 12 1C15.31 1 18 3.69 18 7V8ZM16 8V7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7V8H16ZM7 11H9V13H7V11ZM7 14H9V16H7V14ZM7 17H9V19H7V17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGitRepositoryPrivateLine;
