import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrows-vertical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowsVertical {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.35 14.85a0.50.5 0 0 1-0.71 0l-2-2a0.50.5 0 0 1 0.71-0.71L7.5 13.29V2.71L6.35 3.85a0.50.5 0 1 1-0.71-0.71l2-2a0.50.5 0 0 1 0.71 0l2 2a0.50.5 0 0 1-0.710.71L8.5 2.71v10.59l1.15-1.15a0.50.5 0 0 1 0.710.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowsVertical;
