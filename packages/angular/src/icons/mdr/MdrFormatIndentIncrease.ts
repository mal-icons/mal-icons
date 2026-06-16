import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-indent-increase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatIndentIncrease {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 21h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1zM3 9.21v5.59c0 0.450.540.670.850.35l2.79-2.79c0.2-0.20.2-0.51 0-0.71l-2.79-2.8a0.50.5 0 0 0-0.850.36zM12 17h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1zM3 4c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1zm9 5h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 4h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatIndentIncrease;
