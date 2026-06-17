import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-wink-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiWinkFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 6.5C7 5.67 6.55 5 6 5s-1 0.67-1 1.5S5.45 8 6 8s1-0.67 1-1.5M4.29 9.57a0.50.5 0 0 0-0.180.68A4.5 4.5 0 0 0 8 12.5a4.5 4.5 0 0 0 3.9-2.250.50.5 0 1 0-0.87-0.5A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-3.03-1.750.50.5 0 0 0-0.68-0.18m5.15-3.31a0.50.5 0 0 0-0.870.49c0.330.60.96 1.01 1.69 1.01s1.36-0.41 1.69-1.01a0.50.5 0 0 0-0.87-0.490.930.93 0 0 1-0.810.490.930.93 0 0 1-0.81-0.49"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiWinkFill;
