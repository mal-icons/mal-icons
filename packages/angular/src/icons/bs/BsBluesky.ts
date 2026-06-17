import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bluesky",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBluesky {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.47 1.95C5.3 3.33 7.28 6.12 8 7.62c0.73-1.5 2.7-4.29 4.53-5.67C13.860.96 16 0.19 16 2.63c0 0.49-0.28 4.11-0.44 4.69-0.57 2.04-2.65 2.56-4.5 2.25 3.240.55 4.06 2.38 2.28 4.2-3.38 3.46-4.85-0.87-5.23-1.98-0.07-0.2-0.1-0.3-0.1-0.22 0-0.08-0.030.01-0.10.22-0.38 1.11-1.85 5.44-5.23 1.98-1.78-1.82-0.95-3.65 2.28-4.2-1.850.32-3.93-0.2-4.5-2.25C0.28 6.74 0 3.12 0 2.63 0 0.19 2.150.96 3.47 1.95"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBluesky;
