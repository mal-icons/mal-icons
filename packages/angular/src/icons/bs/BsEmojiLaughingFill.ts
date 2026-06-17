import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-laughing-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiLaughingFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 0.5-0.160.4-0.410.24C6.42 6.63 6.22 6.5 6 6.5s-0.420.13-0.580.24C5.16 6.9 5 7 5 6.5 5 5.67 5.45 5 6 5s1 0.67 1 1.5m5.33 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.54 9h6.93a1 1 0 0 1 0.870.5m-1.75-2.76C10.42 6.63 10.22 6.5 10 6.5s-0.420.13-0.580.24C9.16 6.9 9 7 9 6.5c0-0.830.45-1.5 1-1.5s1 0.67 1 1.5c0 0.5-0.160.4-0.410.24"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiLaughingFill;
