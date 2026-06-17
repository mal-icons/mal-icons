import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box2-heart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBox2HeartFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 0a1 1 0 0 0-0.80.4L0.1 4.2a0.50.5 0 0 0-0.10.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a0.50.5 0 0 0-0.1-0.3L13.050.4a1 1 0 0 0-0.8-0.4zM8.5 4h6l0.50.67V5H1v-0.33L1.5 4h6V1h1zM8 7.99c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBox2HeartFill;
