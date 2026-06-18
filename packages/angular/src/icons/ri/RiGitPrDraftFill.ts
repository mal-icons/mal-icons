import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-git-pr-draft-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGitPrDraftFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 8.83C8.17 8.42 9 7.31 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.31 3.83 8.42 5 8.83V15.17C3.83 15.58 3 16.69 3 18C3 19.66 4.34 21 6 21C7.66 21 9 19.66 9 18C9 16.69 8.17 15.58 7 15.17V8.83ZM21 18C21 19.66 19.66 21 18 21C16.34 21 15 19.66 15 18C15 16.34 16.34 15 18 15C19.66 15 21 16.34 21 18ZM18 7.5C18.83 7.5 19.5 6.83 19.5 6C19.5 5.17 18.83 4.5 18 4.5C17.17 4.5 16.5 5.17 16.5 6C16.5 6.83 17.17 7.5 18 7.5ZM19.5 11.5C19.5 12.33 18.83 13 18 13C17.17 13 16.5 12.33 16.5 11.5C16.5 10.67 17.17 10 18 10C18.83 10 19.5 10.67 19.5 11.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGitPrDraftFill;
