import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-rain-heavy-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudRainHeavyFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.18 11.03a0.50.5 0 0 1 0.290.64l-1.5 4a0.50.5 0 0 1-0.94-0.35l1.5-4a0.50.5 0 0 1 0.64-0.29m3 0a0.50.5 0 0 1 0.290.64l-1.5 4a0.50.5 0 0 1-0.94-0.35l1.5-4a0.50.5 0 0 1 0.64-0.29m3 0a0.50.5 0 0 1 0.290.64l-1.5 4a0.50.5 0 0 1-0.94-0.35l1.5-4a0.50.5 0 0 1 0.64-0.29m3 0a0.50.5 0 0 1 0.290.64l-1.5 4a0.50.5 0 0 1-0.94-0.35l1.5-4a0.50.5 0 0 1 0.64-0.29m0.23-7a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 0.41-5.97"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudRainHeavyFill;
