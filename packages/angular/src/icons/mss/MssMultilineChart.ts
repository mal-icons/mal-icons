import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-multiline-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMultilineChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m122-221-42-43 296-296 165 166 139-156q-60-69-135.5-108.5T378-698q-72 0-137.5 26T122-599l-42-43q62-56 137.5-86T378-758q100 0 187.5 43.5T719-594l120-136 41 44-124 141q34 51 55 115.5T842-296h-60q-6-53-23.5-103T713-497L544-307 376-475 122-221Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMultilineChart;
