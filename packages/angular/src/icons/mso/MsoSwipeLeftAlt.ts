import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-swipe-left-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSwipeLeftAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M600-280q-82 0-133.5-50.5T401-450H194l89 89-42 42L80-480l161-161 42 42-89 89h207q14-69 65.5-119.5T600-680q83 0 141.5 58T800-480q0 82-58.5 141T600-280Zm0-60q58 0 99-41.5t41-98.5q0-59-41-99.5T600-620q-58 0-99 40.5T460-480q0 57 41 98.5t99 41.5Zm0-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSwipeLeftAlt;
