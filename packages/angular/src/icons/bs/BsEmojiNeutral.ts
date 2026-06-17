import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-neutral",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiNeutral {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}],["path",{"d":"M4 10.5a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0-1h-7a0.50.5 0 0 0-0.50.5m3-4C7 5.67 6.55 5 6 5s-1 0.67-1 1.5S5.45 8 6 8s1-0.67 1-1.5m4 0c0-0.83-0.45-1.5-1-1.5s-1 0.67-1 1.5S9.45 8 10 8s1-0.67 1-1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiNeutral;
