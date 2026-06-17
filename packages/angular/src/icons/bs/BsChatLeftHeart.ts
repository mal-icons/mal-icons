import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chat-left-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChatLeftHeart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.41A2 2 0 0 0 3 11.59l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.79a0.50.5 0 0 0 0.850.35l2.85-2.85A1 1 0 0 1 4.41 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}],["path",{"d":"M8 3.99c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChatLeftHeart;
