import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nightlight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNightlight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M593-80q-88.11 0-166.56-32.5Q348-145 288.43-200.41q-59.57-55.41-94-129.62Q160-404.25 160-487.62 160-572 194.5-646.5q34.5-74.5 94-130t137.94-88Q504.89-897 593-897q47 0 88 10t79 27q-90 64-146 160t-56 211.5q0 115.5 56 212T760-117q-38 17-79 27t-88 10Zm0-60h26.42Q632-140 640-141q-66-74-104-162t-38-185q0-97 38-185t104-163q-8-1-20.58-1H593q-153 0-263 101.96-110 101.96-110 247Q220-343 330-241.5T593-140Zm-95-349Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNightlight;
