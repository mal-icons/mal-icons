import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-branch-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitBranch16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 3.25a2.25 2.25 0 1 1 3 2.12V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.13a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 1 1 1.5 0v1.84A2.49 2.49 0 0 1 6 7h4a1 1 0 0 0 1-1v-0.63A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a0.750.75 0 1 0 1.5 0 0.750.75 0 0 0-1.5 0Zm8.25-0.75a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5ZM4.25 12a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitBranch16;
