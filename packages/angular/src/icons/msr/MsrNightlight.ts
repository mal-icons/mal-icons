import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nightlight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNightlight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M593-837q-153 0-263 101.96-110 101.96-110 247Q220-343 330-241.5T593-140h26.42Q632-140 640-141q-66-74-104-162t-38-185q0-97 38-185t104-163q-8-1-20.58-1H593Zm0 757q-88.11 0-166.56-32.5Q348-145 288.43-200.41q-59.57-55.41-94-129.62Q160-404.25 160-487.62 160-572 194.5-646.5q34.5-74.5 94-130t137.94-88Q504.89-897 593-897q38 0 72.51 6.86Q700.02-883.28 732-871q11 5 12.5 13t-8.5 16q-80 64-129 155t-49 198.5q0 107.5 49 199T736-135q10 8 8.5 16T732-106q-31.98 12.28-66.49 19.14Q631-80 593-80ZM430-489Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNightlight;
