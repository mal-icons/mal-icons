import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-swipe-right-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSwipeRightAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-280q-82 0-141-58.5T160-480q0-83 59-141.5T360-680q82 0 133.5 50.5T559-510h207l-89-89 42-42 161 161-161 161-42-42 89-89H559q-14 69-65.5 119.5T360-280Zm0-60q59 0 99.5-41t40.5-99q0-58-40.5-99T360-620q-57 0-98.5 41T220-480q0 58 41.5 99t98.5 41Zm0-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSwipeRightAlt;
