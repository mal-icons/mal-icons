import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-git",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.09 23.55a1.54 1.54 0 0 1-2.18 0L0.45 13.09a1.54 1.54 0 0 1 0-2.18l7.19-7.19 2.73 2.73a1.85 1.85 0 0 0 0.96 2.33v6.66a1.85 1.85 0 1 0 1.54 0V8.96l2.51 2.51a1.85 1.85 0 1 0 1.09-1.09l-2.63-2.63a1.85 1.85 0 0 0-2.38-2.38L8.73 2.63 10.910.45a1.54 1.54 0 0 1 2.18 0l10.46 10.46a1.54 1.54 0 0 1 0 2.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGit;
