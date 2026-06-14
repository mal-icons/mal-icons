import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-briefcase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiBriefcase {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 7c0-1.65-1.35-3-3-3h-6c-1.65 0-3 1.35-3 3-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-9-1h6c0.55 0 1 0.45 1 1h-8c0-0.550.45-1 1-1zm10 11c0 0.55-0.45 1-1 1h-12c-0.55 0-1-0.45-1-1v-1h14v1zm-14-2v-5c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1v5h-14zM13 12h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiBriefcase;
