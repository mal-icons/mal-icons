import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-smile-upside-down-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiSmileUpsideDownFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 9.5C7 8.67 6.55 8 6 8s-1 0.67-1 1.50.45 1.5 1 1.5 1-0.67 1-1.5M4.29 6.43a0.50.5 0 0 0 0.68-0.18A3.5 3.5 0 0 1 8 4.5c1.3 0 2.430.7 3.03 1.75a0.50.5 0 0 0 0.87-0.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.9 2.250.50.5 0 0 0 0.180.68M10 8c-0.55 0-1 0.67-1 1.5s0.45 1.5 1 1.5 1-0.67 1-1.5S10.55 8 10 8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiSmileUpsideDownFill;
