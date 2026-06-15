import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-ruler-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfRulerAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.04 0.02l-12.02 12.02 4.95 4.95 12.02-12.02-4.95-4.95zM1.43 12.04l0.7-0.7 1.41 1.41 0.71-0.71-1.41-1.41 0.72-0.72 0.71 0.71 0.71-0.71-0.71-0.71 0.71-0.71 1.41 1.41 0.71-0.71-1.41-1.41 0.7-0.7 0.71 0.71 0.71-0.71-0.71-0.71 0.71-0.71 1.41 1.41 0.71-0.71-1.41-1.41 0.72-0.72 0.71 0.71 0.71-0.71-0.71-0.71 0.71-0.71 1.42 1.41 0.71-0.71-1.41-1.41 0.71-0.71 3.54 3.54-10.61 10.61-3.54-3.53z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfRulerAlt;
