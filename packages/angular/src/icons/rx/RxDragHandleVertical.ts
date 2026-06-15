import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-drag-handle-vertical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDragHandleVertical {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.1 12.5C4.1 12.72 4.28 12.9 4.5 12.9C4.72 12.9 4.9 12.72 4.9 12.5L4.9 2.5C4.9 2.28 4.72 2.1 4.5 2.1C4.28 2.1 4.1 2.28 4.1 2.5L4.1 12.5ZM6.1 12.5C6.1 12.72 6.28 12.9 6.5 12.9C6.72 12.9 6.9 12.72 6.9 12.5L6.9 2.5C6.9 2.28 6.72 2.1 6.5 2.1C6.28 2.1 6.1 2.28 6.1 2.5L6.1 12.5ZM8.5 12.9C8.28 12.9 8.1 12.72 8.1 12.5L8.1 2.5C8.1 2.28 8.28 2.1 8.5 2.1C8.72 2.1 8.9 2.28 8.9 2.5L8.9 12.5C8.9 12.72 8.72 12.9 8.5 12.9ZM10.1 12.5C10.1 12.72 10.28 12.9 10.5 12.9C10.72 12.9 10.9 12.72 10.9 12.5L10.9 2.5C10.9 2.28 10.72 2.1 10.5 2.1C10.28 2.1 10.1 2.28 10.1 2.5L10.1 12.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDragHandleVertical;
