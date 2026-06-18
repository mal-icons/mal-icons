import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-message-rounded-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsMessageRoundedX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 5.59 2 10c0 2.91 1.9 5.52 5 6.93V22l5.34-4C17.7 17.85 22 14.32 22 10c0-4.41-4.49-8-10-8zm3.71 10.29-1.41 1.41L12 11.41l-2.29 2.29-1.41-1.41L10.59 10 8.29 7.71l1.41-1.41L12 8.59l2.29-2.29 1.41 1.41L13.41 10l2.29 2.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsMessageRoundedX;
