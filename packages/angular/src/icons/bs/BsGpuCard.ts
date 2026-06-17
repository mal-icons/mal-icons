import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-gpu-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGpuCard {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"}],["path",{"d":"M0 1.5A0.50.5 0 0 1 0.5 1h1a0.50.5 0 0 1 0.50.5V4h13.5a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-0.50.5H2v2.5a0.50.5 0 0 1-1 0V2H0.5a0.50.5 0 0 1-0.5-0.5m5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"}],["path",{"d":"M3 12.5h3.5v1a0.50.5 0 0 1-0.50.5H3.5a0.50.5 0 0 1-0.5-0.5zm4 1v-1h4v1a0.50.5 0 0 1-0.50.5h-3a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGpuCard;
