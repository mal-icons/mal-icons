import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-github-project",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGithubProject {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 2H4.5C3.12 2 2 3.12 2 4.5V11.5C2 12.88 3.12 14 4.5 14H11.5C12.88 14 14 12.88 14 11.5V4.5C14 3.12 12.88 2 11.5 2ZM3 4.5C3 3.67 3.67 3 4.5 3H6V6H3V4.5ZM4.5 13C3.67 13 3 12.33 3 11.5V7H6V13H4.5ZM13 11.5C13 12.33 12.33 13 11.5 13H7V7H13V11.5ZM13 6H7V3H11.5C12.33 3 13 3.67 13 4.5V6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGithubProject;
