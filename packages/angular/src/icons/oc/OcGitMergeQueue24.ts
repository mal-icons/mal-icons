import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-merge-queue-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitMergeQueue24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.75 6.5a1.75 1.75 0 1 1 0-3.5A1.75 1.75 0 0 1 5.75 6.5ZM9.5 8.75a1.75 1.75 0 1 1 3.50A1.75 1.75 0 0 1 9.5 8.75ZM5.75 22.5a3.25 3.25 0 0 1-0.74-6.41A0.810.81 0 0 1 5 16v-5a0.750.75 0 0 1 1.5 0v5a0.810.81 0 0 100.09A3.25 3.25 0 0 1 5.75 22.5ZM4 19.25a1.75 1.75 0 1 0 3.50A1.75 1.75 0 0 0 4 19.25Zm11-6.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25 1.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitMergeQueue24;
