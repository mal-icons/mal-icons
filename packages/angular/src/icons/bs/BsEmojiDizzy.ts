import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-dizzy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiDizzy {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}],["path",{"d":"M9.15 5.15a0.50.5 0 0 1 0.71 0l0.650.650.65-0.65a0.50.5 0 0 1 0.710.71l-0.650.650.650.65a0.50.5 0 0 1-0.710.71l-0.65-0.65-0.650.65a0.50.5 0 1 1-0.71-0.71l0.65-0.65-0.65-0.65a0.50.5 0 0 1 0-0.71m-5 0a0.50.5 0 0 1 0.71 0l0.650.650.65-0.65a0.50.5 0 1 1 0.710.71l-0.650.650.650.65a0.50.5 0 1 1-0.710.71L5.5 7.21l-0.650.65a0.50.5 0 1 1-0.71-0.71l0.65-0.65-0.65-0.65a0.50.5 0 0 1 0-0.71M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiDizzy;
