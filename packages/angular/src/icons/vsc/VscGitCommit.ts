import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-git-commit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGitCommit {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 8C11.5 6.24 10.19 4.78 8.5 4.54V1.5C8.5 1.22 8.28 1 8 1C7.72 1 7.5 1.22 7.5 1.5V4.54C5.81 4.78 4.5 6.24 4.5 8C4.5 9.76 5.81 11.22 7.5 11.46V14.5C7.5 14.78 7.72 15 8 15C8.28 15 8.5 14.78 8.5 14.5V11.46C10.19 11.22 11.5 9.76 11.5 8ZM8 10.5C6.62 10.5 5.5 9.38 5.5 8C5.5 6.62 6.62 5.5 8 5.5C9.38 5.5 10.5 6.62 10.5 8C10.5 9.38 9.38 10.5 8 10.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGitCommit;
