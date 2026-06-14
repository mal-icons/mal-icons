import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-compare-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitCompare16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.570.68A0.250.25 0 0 1 10 0.85V2.5h1A2.5 2.5 0 0 1 13.5 5v5.63a2.25 2.25 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.65a0.250.25 0 0 1-0.430.18L7.18 3.43a0.250.25 0 0 1 0-0.35ZM6 12v-1.65a0.250.25 0 0 1 0.43-0.18l2.4 2.4a0.250.25 0 0 1 0 0.35l-2.4 2.4A0.250.25 0 0 1 6 15.15V13.5H5A2.5 2.5 0 0 1 2.5 11V5.37a2.25 2.25 0 1 1 1.5 0V11a1 1 0 0 0 1 1ZM4 3.25a0.750.75 0 1 0-1.5 0 0.750.75 0 0 0 1.5 0ZM12.75 12a0.750.75 0 1 0 0 1.50.750.75 0 0 0 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitCompare16;
